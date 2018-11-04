"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const records_service_1 = require("./records.service");
describe('RecordsService', () => {
    beforeEach(() => testing_1.TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = testing_1.TestBed.get(records_service_1.RecordsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=records.service.spec.js.map