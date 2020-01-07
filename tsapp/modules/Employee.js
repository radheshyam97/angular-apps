"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var address_module_1 = require("./address_module");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, contactNo, email, empid, salary, street, city, zipCode, state, country) {
        var _this = this;
        var addr = new address_module_1.Address(street, city, zipCode, state, country);
        _this = _super.call(this, name, contactNo, email, addr) || this;
        _this.empid = empid;
        _this.salary = salary;
        return _this;
    }
    return Employee;
}(Person_1.Person));
exports.Employee = Employee;
;
