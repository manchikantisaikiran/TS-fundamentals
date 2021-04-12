//using this export TS compiler treats the file as a module instead of script
export { }

//variable declarations
var a = 5; //function scoped and can redclare the varaible
let x = 10; //block scoped and cannot redeclare the variable
const y = 20; //block scoped and should be assigned a value at declaration

//variable types(basic)
let isBegginer: boolean = true;
let total: number = 0;
let name: string = 'sai kiran'

//template string
//used to span a string in multiple lines and to use variable within ${} syntax
let sentense: string = `this is a sentance ${isBegginer}
that wrapped to multiple lines`;
console.log(sentense);

//sub types of all other types
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;

//array types
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//tuple type(elements in array are fixed and order is imp)
let person1: [string, number] = ['sai kiran', 22];

//enum type
enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green; //accesing a value

//any type
let random: any = 10;
random = '';
random = true;

//unknown type
let un: unknown
un = 1;
un = '';
(un as string).toUpperCase()
function hasName(obj: any): obj is { name: string } {
    return obj &&
        typeof obj === 'object' && 'name' in obj
}
if (hasName(un)) {
    console.log(un.name);

}

//type inference(mentioning type is optional)
//inferes the type when assigned to a value

//union's
let multiType: number | string;
multiType = 0;
multiType = '';

//functions
function add(num1: number, num2: number): number {
    return num1 + num2
}
add(5, 10)
//optional paramerters
function ab(a: string, b?: any) {
    return a;
}
ab('')

//default parameters
function sub(num1: number, num2: number = 0) {
    return num1 - num2
}
sub(4)

//interface(to specify a particular structure for a object)
interface Person {
    firstName: string;
    lastName?: string;
}
function fullname(person: Person) {
    console.log(person.firstName + ' ' + person.lastName)
}

fullname({
    firstName: 'sai',
    lastName: 'kiran'
})

//classes
class Employee{
    employeeName:string;
    constructor(name:string){
        this.employeeName = name;
    }
    greet(){
        console.log('welcome' + this.employeeName);
    }
}

let employee1 = new Employee('sai');
employee1.greet()

class Manager extends Employee{
    constructor(mName:string){
        super(mName);
    }
    deligateWork(){
        console.log('deligating tasks');       
    }
}

const m1 = new Manager('kiran')
m1.deligateWork()
m1.greet();

//acces modifiers sets the accesability of properties and methods in a class
//public(default)
//private(cannot be accesed outside the it's own class,cannot in child class)
//protected(can be accessed in child class, cannot outside the class)