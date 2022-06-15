class User {
    name: string;
    firstname: string;
    age: number;
    email: string;
    phoneNumber: string;
    address: Address;

    constructor(name: string, firstname: string, age: number, email: string, phoneNumber: string, adress: Address){
        this.name = name;
        this.firstname = firstname;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber
    } 
}

class Address{
    adress: string;
    codePostal: string;
    city: string;
    country: string;

    constructor(adress: string, codePostal: string, city: string, country: string){
        this.adress = adress;
        this.codePostal = codePostal;
        this.city = city;
        this.country = country;
    }
}

const user: User = new User( "Aude", "Javel", 32, "aude@javel.com", "0606060606", new Address(" 12where the streets have no names","42 999", "BdxCity",  "Egypte") )