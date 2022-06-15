import  assert  from  'assert';

// ... Ton code ici ...
class BankCustomer{
    private name: string;
    private code: string;

    constructor(name:string, code:string){
        this.name = name;
        this.code = code
    }

    getName(): string{
        return this.name
    }

    verifyPinInput(): boolean{
        if (this.code === '3579'){
            return true
        }
        else return false
    }
}
// Tests

const customer: BankCustomer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));