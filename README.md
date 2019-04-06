**Variables** - are containers for storing data values; <br/>
**Variables** are names container that you can place data in and then refer to the data by naming the container; <br/>
<br/>
**Invalid variable name:** <br/>
<br/>

> `let 1stPet = "Max";`- with number in name; <br/> > `let let = "variable";` - keyword world; <br/> > `let first name = "John"` - space in word; <br/>

<br/>

**Valid variable name - best practices:**<br/>
<br/>

> `cameCase` - first word with lowercase and the rest words are written with uppercase;<br/> > `human readable` - you are codding for human readybility;<br/>

<br/>
JavaScript has an interpreter and its know that defined variable is a string, number or boolean - dynamic typing;<br/>
<br/>
**String** - are a data type used to represent text and are wrapped in either a single or double quote;<br/>
<br/>
**6 Primitive data types in JS:**<br/>
<br/>

> String<br/>
> Number<br/>
> boolean<br/>
> null<br/>
> undefined<br/>
> symbol<br/>
> <br/>

String should be in a single or double quote. Its return the same value. As a team you should choose which conventrion you are writing:<br/>
`'Joe' or "Joe";`<br/>
erros is <br/>
`'Joe";`<br/>
<br/>
**Operators** - assign and compare values, performing arithmetic operations and more, allowing programmers to create a single value from one or more value.<br/>
<br/>
`=` assighment operator<br/>
`==` equal value<br/>
`===` equal value and type<br/>
<br/>
**INCREMENT (++)** the increments operator adds one to its operand and returns the value;<br/>
Operator x++ or ++x;<br/>
<br/>
**DECREMENT (--)** the decrement operator substract one from its operand and returns a value;<br/>
Operator x-- or --x;<br/>
<br/>
**Objects{}** A value type consisting of key/value pairs. Anything that isn't a primitive(string, number, boolean, null, undefined, symbol) is an object;<br/>
<br/>
Variables => properties;<br/>
Function => methods;<br/>
<br/>
**Object constructor function** A constructor is useful when you want to create multiple similar object with the same properties and methods. The code creates objects as an instance of it;<br/>
<br/>
_What happens when javascript primitives are working like on objects ?_<br/>
<br/>
Primitives are behaviours like objects when they have to, when any method is used on a variable eg.<br/>
`let welcome = "Hello!";` //String<br/>
`welcome.lengh;` //number<br/>
Its only temporary, because of memory in js, objects are bigger than primitives;<br/>
<br/>
**Arrays[]** are lists like object. They are used to store multiple values written as a list between square brackets, separated by commas;<br/>
`testScores = [72,84,68,92,74];`<br/>
_Index 0,1,2,3,4,5 - computer start counting from 0;_<br/>
<br/>

> array = [];<br/>
> objects = {};<br/>
> <br/>

**Functions(){};** - let you group a series of statements together to perform a specific task. If different parts a script repeat the same task, you can reuse the <br/>function, rather than repairing the same set of statement;<br/>
**DRY** - don't repeat yourself;<br/>

- When we write a finction we choose a parameters function name(firstName, secondName);{};<br/>
- When we call/invocate the function we write arguments<br/>
  name("Aleksandra","Danuta");<br/>
  <br/>
  **Scope** is where variable is defined. JS has two scopes:global and local. Variables declared outside of a function are global scope. Variables declared inside a <br/>function are local variables;<br/>
  <br/>
  **Scope chain** when javaScript need to look up a variable it starts by looking for by first object in a chain (The Local Scope - Child Scope); if it find it, it uses <br/>the value, if it doesn't looking something above(The Global Scope - Parent Scope). If the value is not found in global scope it returns an error;<br/>
- If we dont use word var or let the variable is automatically global!<br/>
  To Avoid use Strict Mode;<br/>
  <br/>
