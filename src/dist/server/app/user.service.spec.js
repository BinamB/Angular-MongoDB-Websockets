"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const user_service_1 = require("./user.service");
describe('UserService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(user_service_1.UserService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=user.service.spec.js.map