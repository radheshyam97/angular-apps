import { Address } from "./address_module";

export class Person {

    name: string;
    contactNo: string;
    email: string;
    address: Address;

    constructor(name: string, contactNo: string, email: string, address: Address) {
        this.name = name;
        this.contactNo = contactNo;
        this.email = email;
        this.address = address;

    }
};

