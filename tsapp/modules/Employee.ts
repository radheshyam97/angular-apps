import { Person } from "./Person"
import { Address } from "./address_module"

export class Employee extends Person {
    empid: number;
    salary: number;

    constructor(name: string, contactNo: string, email: string, empid: number, salary: number
        , street: string, city: string, zipCode: string, state: string, country: string) {
        var addr = new Address(street, city, zipCode, state, country);
        super(name, contactNo, email, addr);
        this.empid = empid;
        this.salary = salary;

    }
};