"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let OutletComponent = class OutletComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
        this.email = "Loading your Info";
        this.userName = "Loading your Info";
        this.password = "Loading your Info";
    }
    ngOnInit() {
        this.user.getData().subscribe(data => {
            if (data.status) {
                this.email = data.email;
                this.userName = data.userName;
                this.password = data.password;
            }
            else {
                this.router.navigate(['admin']);
            }
        });
    }
};
OutletComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet',
        templateUrl: './outlet.component.html',
        styleUrls: ['./outlet.component.css']
    })
], OutletComponent);
exports.OutletComponent = OutletComponent;
//# sourceMappingURL=outlet.component.js.map