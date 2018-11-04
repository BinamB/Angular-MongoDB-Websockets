import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

export class Message {
    constructor(
        public sender: string,
        public content: string,
        public isBroadcast = true,
    ) { }
}

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit {

    userName = ""
    email = ""
    password = ""
    
    ngOnInit() {
        this.user.getData().subscribe(data => {
          if(data.status) {
            this.userName = data.userName
            this.email = data.email
            this.password = data.password
          } else {
            this.router.navigate(['admin'])
          }
        })
      }

    @ViewChild('viewer') private viewer: ElementRef;

    public serverMessages = new Array<Message>();

    public clientMessage = '';
    public isBroadcast = true;
    public sender = '';

    private socket$: WebSocketSubject<Message>;

    constructor(private user: UserService, private router:Router) {

        this.socket$ = new WebSocketSubject('ws://localhost:8999');

        this.socket$
            .subscribe(
            (message) => this.serverMessages.push(message) && this.scroll(),
            (err) => console.error(err),
            () => console.warn('Completed!')
            );
    }

    ngAfterViewInit(): void {
        this.scroll();
    }

    public toggleIsBroadcast(): void {
        this.isBroadcast = !this.isBroadcast;
    }

    public send(): void {
        const message = new Message(this.sender, this.clientMessage, this.isBroadcast);

        this.serverMessages.push(message);
        this.socket$.next(message);
        this.clientMessage = '';
        this.scroll();
    }

    public isMine(message: Message): boolean {
        return message && message.sender === this.sender;
    }

    public getSenderInitials(sender: string): string {
        return sender && sender.substring(0, 2).toLocaleUpperCase();
    }

    public getSenderColor(sender: string): string {
        const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ';
        const initials = this.getSenderInitials(sender);
        const value = Math.ceil((alpha.indexOf(initials[0]) + alpha.indexOf(initials[1])) * 255 * 255 * 255 / 70);
        return '#' + value.toString(16).padEnd(6, '0');
    }

    private scroll(): void {
        setTimeout(() => {
            this.scrollToBottom();
        }, 100);
    }

    private getDiff(): number {
        if (!this.viewer) {
            return -1;
        }

        const nativeElement = this.viewer.nativeElement;
        return nativeElement.scrollHeight - (nativeElement.scrollTop + nativeElement.clientHeight);
    }

    private scrollToBottom(t = 1, b = 0): void {
        if (b < 1) {
            b = this.getDiff();
        }
        if (b > 0 && t <= 120) {
            setTimeout(() => {
                const diff = this.easeInOutSin(t / 120) * this.getDiff();
                this.viewer.nativeElement.scrollTop += diff;
                this.scrollToBottom(++t, b);
            }, 1 / 60);
        }
    }

    private easeInOutSin(t): number {
        return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
    }
}