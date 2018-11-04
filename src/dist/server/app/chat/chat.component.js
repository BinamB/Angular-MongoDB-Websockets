"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const WebSocketSubject_1 = require("rxjs/observable/dom/WebSocketSubject");
class Message {
    constructor(sender, content, isBroadcast = true) {
        this.sender = sender;
        this.content = content;
        this.isBroadcast = isBroadcast;
    }
}
exports.Message = Message;
let ChatComponent = class ChatComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.userName = "";
        this.email = "";
        this.password = "";
        this.serverMessages = new Array();
        this.clientMessage = '';
        this.isBroadcast = true;
        this.sender = '';
        this.socket$ = new WebSocketSubject_1.WebSocketSubject('ws://localhost:8999');
        this.socket$
            .subscribe((message) => this.serverMessages.push(message) && this.scroll(), (err) => console.error(err), () => console.warn('Completed!'));
    }
    ngOnInit() {
        this.user.getData().subscribe(data => {
            if (data.status) {
                this.userName = data.userName;
                this.email = data.email;
                this.password = data.password;
            }
            else {
                this.router.navigate(['admin']);
            }
        });
    }
    ngAfterViewInit() {
        this.scroll();
    }
    toggleIsBroadcast() {
        this.isBroadcast = !this.isBroadcast;
    }
    send() {
        const message = new Message(this.sender, this.clientMessage, this.isBroadcast);
        this.serverMessages.push(message);
        this.socket$.next(message);
        this.clientMessage = '';
        this.scroll();
    }
    isMine(message) {
        return message && message.sender === this.sender;
    }
    getSenderInitials(sender) {
        return sender && sender.substring(0, 2).toLocaleUpperCase();
    }
    getSenderColor(sender) {
        const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ';
        const initials = this.getSenderInitials(sender);
        const value = Math.ceil((alpha.indexOf(initials[0]) + alpha.indexOf(initials[1])) * 255 * 255 * 255 / 70);
        return '#' + value.toString(16).padEnd(6, '0');
    }
    scroll() {
        setTimeout(() => {
            this.scrollToBottom();
        }, 100);
    }
    getDiff() {
        if (!this.viewer) {
            return -1;
        }
        const nativeElement = this.viewer.nativeElement;
        return nativeElement.scrollHeight - (nativeElement.scrollTop + nativeElement.clientHeight);
    }
    scrollToBottom(t = 1, b = 0) {
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
    easeInOutSin(t) {
        return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
    }
};
__decorate([
    core_1.ViewChild('viewer')
], ChatComponent.prototype, "viewer", void 0);
ChatComponent = __decorate([
    core_1.Component({
        selector: 'app-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css']
    })
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map