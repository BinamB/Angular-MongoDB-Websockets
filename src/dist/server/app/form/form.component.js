"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
//import { OutletComponent } from '../outlet/outlet.component';
let FormComponent = class FormComponent {
    //writing this is the same as constructor(auth:AuthService){this.auth = auth} 
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    registerUser(event) {
        console.log("starting resiterUser()");
        event.preventDefault();
        const errors = [];
        const target = event.target;
        const userName = target.querySelector('#userName').value;
        const password = target.querySelector('#password').value;
        const confirm = target.querySelector('#confirm').value;
        const check = target.querySelector('#check').value;
        const email = target.querySelector('#email').value;
        console.log("User: " + userName);
        console.log("Email: " + email);
        console.log("password: " + password);
        if (password != confirm) {
            errors.push("Passwords Do Not Match");
            console.log("password mismatch!!");
        }
        if (check == false) {
            errors.push("Please Confirm Registration");
        }
        //more validation later
        if (errors.length === 0) {
            console.log("starting stuff!");
            this.auth.registerUser(userName, email, password).subscribe(data => {
                console.log(data);
                if (data.success) {
                    this.router.navigate(['login']);
                }
            });
        }
        console.log(userName, email, password);
    }
};
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    })
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map