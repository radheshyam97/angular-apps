export class Address {
    street: string;
    city: string;
    zipCode: string;
    state: string;
    country: string;

    constructor(street: string, city: string, zipCode: string, state: string, country: string) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.state = state;
        this.country;
    }
};