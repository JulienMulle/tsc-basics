class Person {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName() :string{
        console.log(`I am ${this.name}`);
        return this.name
    };

    tellMyAge() :number {
        console.log(`I am ${this.age} years old`)
        return this.age
    }

}

const person1: Person = new Person ('John', 40 );
const person2: Person = new Person('Mary', 35);
person1.tellMyAge();
person1.tellMyName();
person2.tellMyAge();
person2.tellMyName();