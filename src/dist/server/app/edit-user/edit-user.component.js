"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let EditUserComponent = class EditUserComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.userName = "";
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
        this.user.getData().subscribe(data => {
            if (data.status) {
                this.userName = data.userName;
                this.email = data.email;
                this.password = data.password;
            }
            else {
                this.router.navigate(['logout']);
            }
        });
    }
    updatePassword(event) {
        event.preventDefault();
        const errors = [];
        const target = event.target;
        const npasswsord = target.parentNode.querySelector("#npasswsord").value;
        const opassword = target.parentNode.querySelector("#opassword").value;
        const confirm = target.parentNode.querySelector("#confirm").value;
        if (!(npasswsord == "" || opassword == "" || confirm == "")) {
            if (npasswsord != confirm) {
                errors.push("passwords do not match");
                console.log("password mismatch!");
            }
            if (errors.length === 0) {
                console.log("updating password");
            }
        }
    }
    deleteUser(event) {
        event.preventDefault();
        //const target = event.target 
        console.log("Deleting User");
        this.user.deleteUser().subscribe(data => {
            if (data.success) {
                alert("User Deleted");
            }
            else {
                alert("Something went wrong");
            }
        });
    }
    updateUserName(event) {
        console.log("starting function");
        event.preventDefault();
        const errors = [];
        const target = event.target;
        const nuserName = target.parentNode.querySelector("#nuserName").value;
        console.log("new:" + nuserName);
        console.log("old:" + this.userName);
        if (!(nuserName == "" || nuserName == this.userName)) {
            if (errors.length === 0) {
                console.log("updating User Name");
                this.user.updateUserName(nuserName).subscribe(data => {
                    if (data.success) {
                        alert("UserName Updated!");
                    }
                    else {
                        alert("Some Problem Occured");
                    }
                });
            }
        }
    }
};
EditUserComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-user',
        templateUrl: './edit-user.component.html',
        styleUrls: ['./edit-user.component.css']
    })
], EditUserComponent);
exports.EditUserComponent = EditUserComponent;
//# sourceMappingURL=edit-user.component.js.map