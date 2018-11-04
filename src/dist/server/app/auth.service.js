"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// interface AllData{
//   success: boolean
// }
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loggedInStatus = false;
    }
    getUserDetails(userName, password) {
        //post these details to API server return user info if correct
        return this.http.post('/api/login', {
            userName,
            password
        });
    }
    setLoggedIn(value) {
        this.loggedInStatus = value;
    }
    get isLoggedIn() {
        return this.loggedInStatus;
    }
    // getUserAll(userName, email, password){
    //   //post these details to API server return user info if correct
    //   return this.http.post<AllData>('/api/login', {
    //     userName,
    //     email,
    //     password
    //   })
    // }
    registerUser(userName, email, password) {
        return this.http.post('/api/register', { userName,
            email,
            password
        });
    }
};
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map