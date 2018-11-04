"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('/api/data');
    }
    deleteUser() {
        return this.http.get('/api/delete');
    }
    updateUserName(value) {
        return this.http.post('/api/username', {
            value
        });
    }
    updateEmail(value) {
        return this.http.post('/api/email', {
            value
        });
    }
    updatePassword(value) {
        return this.http.post('/api/password', {
            value
        });
    }
    isLoggedIn() {
        return this.http.get('/api/isloggedin');
    }
    logout() {
        return this.http.get('/api/logout');
    }
};
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map