"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
let AuthGuard = class AuthGuard {
    constructor(auth, router, user) {
        this.auth = auth;
        this.router = router;
        this.user = user;
    }
    canActivate(next, state) {
        //debugger
        if (this.auth.isLoggedIn) {
            return true;
        }
        return this.user.isLoggedIn().pipe(operators_1.map(res => {
            if (res.status) {
                this.auth.setLoggedIn(true);
                return true;
            }
            else {
                this.router.navigate(['login']);
                return false;
            }
        }));
    }
};
AuthGuard = __decorate([
    core_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map