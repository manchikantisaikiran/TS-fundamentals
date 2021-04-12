"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//variable declarations
var a = 5; //function scoped and can redclare the varaible
var x = 10; //block scoped and cannot redeclare the variable
var y = 20; //block scoped and should be assigned a value at declaration
//variable types(basic)
var isBegginer = true;
var total = 0;
var name = 'sai kiran';
//template string
//used to span a string in multiple lines and to use variable within ${} syntax
var sentense = "this is a sentance " + isBegginer + "\nthat wrapped to multiple lines";
console.log(sentense);
//sub types of all other types
var n = null;
var u = undefined;
var isNew = null;
//array types
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple type(elements in array are fixed and order is imp)
var person1 = ['sai kiran', 22];
//enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green; //accesing a value
//any type
var random = 10;
random = '';
random = true;
//unknown type
var un;
un = 1;
un = '';
un.toUpperCase();
function hasName(obj) {
    return obj &&
        typeof obj === 'object' && 'name' in obj;
}
if (hasName(un)) {
    console.log(un.name);
}
//type inference(mentioning type is optional)
//inferes the type when assigned to a value
//union's
var multiType;
multiType = 0;
multiType = '';
//functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//optional paramerters
function ab(a, b) {
    return a;
}
ab('');
//default parameters
function sub(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 - num2;
}
sub(4);
function fullname(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
fullname({
    firstName: 'sai',
    lastName: 'kiran'
});
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('welcome' + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('sai');
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mName) {
        return _super.call(this, mName) || this;
    }
    Manager.prototype.deligateWork = function () {
        console.log('deligating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('kiran');
m1.deligateWork();
m1.greet();
//acces modifiers sets the accesability of properties and methods in a class
//public(default)
//private(cannot be accesed outside the it's own class,cannot in child class)
//protected(can be accessed in child class, cannot outside the class)
