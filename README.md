**Variables** - are containers for storing data values,
**Variables** are names container that you can place data in and then refer to the data by naming the container.

**Invalid variable name:**

1. var 1stPet - with number in name;
2. var var = "variable" - keyword world;
3. var first name = "John" - space in word;

Valid variable name - best practices:

1. cameCase - first word with lower case and the rest words are writte with upper case;
2. human readable - you are codding for human readybility;

JavaScript has an interepreter and its know that defined variable is a string, number or boolim - dynamic typinh

String - are a data type used to represent text and are wrappe in either a single or double quote

6 Primitive data types in JS:

1. String
2. Number
3. boolean
4. null
5. undefined
6. symbol

String should be in a single or double quote. its return the same value. As a team you should choose which conventrion you are writing. 'Joe' or "Joe";
erros is 'Joe";

Leng af the string:
var greeting = "It's good to meat you!";

Operators - assign and compare values, performing arithmetic operations and more, allowing programmers to create a single balue from one or more value.

= assighment operator
== equal value
=== equal value and type

INCREMENT (++) the increments operator adds one to its operand and returns the value
Operator x++ or ++x

DECREMENT (--) the decrement operator substract one from its operand and returns a value
Operator x-- or --x

Objects{} - A value type consisting of key/value pairs. Anything that isn't a primivite(string, number, boolean, null, indefined, symbol) is an object,

Variables => properties;
Function => methods;

Object constructor function - a cinstructor is useful when you want to create multiple similar object with the same properties and methods. The code creates objects as an instance of it.

What happend when javascript primitives are working like on objects ?

primitives are behawiours like objects when the have, when any method is used on a variable eg.
let welcome = "Hello!"; //String
welcome.lengh //number
its only temporary, because of memory in js, objects are bigger than primitives.

Arrays - []; ale lists like object. They are used to store multiple values written as a list between square brackets, separated by comas.

testScores = [72,84,68,92,74];
Index 0,1,2,3,4,5 - computer start counting from 0

array = [];
objects = {};

Functions(){}; - let you grup a series of staremnts togheder to perform a specific task. If different parts a script repeat the same task, you can reuse the function, rather than reapering the same set of statement.
DRY - dont repeat yourself;
when we write a finction we choose a parameters function name(firstName, secondName);{};
when we call/invocate the function we write arguments
name("Aleksandra","Danuta");

Scope is where variable is defined. JS has two scopes:global and local. Variables declared outside of a function are global scope. Variables declared inside a function are local variables.

Scope chain - when javaScript need to loock up a variable it starts by looking for by first object in a chain (The Local Scope - Child Scope); if it find it it uses the value, if it doesn't looking something abobe(The Global Scope - Parent Scope). If the valie is not found in global scope it returns an error.

if we dont use word var or let the variable is automatically global!
To Avoid use Strict Mode
