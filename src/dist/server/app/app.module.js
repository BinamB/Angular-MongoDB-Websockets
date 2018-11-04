"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
const router_1 = require("@angular/router");
const app_component_1 = require("./app.component");
const home_component_1 = require("./home/home.component");
const form_component_1 = require("./form/form.component");
const outlet_component_1 = require("./outlet/outlet.component");
const login_component_1 = require("./login/login.component");
const admin_component_1 = require("./admin/admin.component");
const auth_service_1 = require("./auth.service");
const http_1 = require("@angular/common/http");
const user_service_1 = require("./user.service");
const edit_user_component_1 = require("./edit-user/edit-user.component");
const auth_guard_1 = require("./auth.guard");
const chat_component_1 = require("./chat/chat.component");
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'form', component: form_component_1.FormComponent },
    { path: 'outlet', component: outlet_component_1.OutletComponent },
    { path: 'edit', component: edit_user_component_1.EditUserComponent },
    { path: 'chat', component: chat_component_1.ChatComponent }
];
let AppModule = class AppModule {
    constructor(router) {
    }
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            form_component_1.FormComponent,
            outlet_component_1.OutletComponent,
            login_component_1.LoginComponent,
            admin_component_1.AdminComponent,
            edit_user_component_1.EditUserComponent,
            chat_component_1.ChatComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            router_1.RouterModule.forRoot(routes, {
                enableTracing: false,
            })
        ],
        providers: [auth_service_1.AuthService, user_service_1.UserService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map