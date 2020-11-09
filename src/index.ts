import { isNull } from "util";
import { isContext } from "vm";

let externalX = new String();

class MyClass {
    constructor(private s: string, private q: string) {}
    sas = new String();
    printName() : void {
        this.sas = "as";
        this.sas = this.sas.toUpperCase();
        externalX = this.sas;
        let s : string = "hello";
        console.log(this.s + " " + this.q + " " + s + " " + this.sas);
    }
}

type TrueOrString = string | null | number;

function trueOrNull(isTrue : boolean) : TrueOrString {
    if(isTrue) {
        return 'true'  
    }
    if(externalX === "AS") {
        return 3;
    }
    return null
}

//Arrays
let h = ["sa", 2]
h.push(1)
h.push(3)

let xrr = h.map(_ => {
    if(typeof _ === 'number') {
        return _*3
    }
    return _.toUpperCase()
})
console.log(xrr[1])
console.log(xrr[2])
console.log(xrr[0])

//special array
function buildArray() {
    let a = []
    a.push(1)
    a.push('x')
    return a;
}

let assd = buildArray();
assd.push("a");
type stringOrNumber = string | number | undefined;
let wred : stringOrNumber = assd.pop();
console.log("We got: " + wred);

let x = new MyClass("Anselm", "Schäfer");

console.log(externalX);

x.printName();

console.log(externalX);

console.log(trueOrNull(false));

//Tuples
let b: [string, string, number] = ["jwe","sd",4];
console.log(b[1]);

//splice array
let amHte: number[] = [1,2,3];
let amHteX: number[] = [11,22,33];
//first argument -> where to start
//second argument -> how many to delete?
//third, fourth... argument -> what to insert?
amHte.splice(2,0,1,2,3,4)

console.log(amHte)

let wef: never;
let wefef: void;
let ewqc: undefined;
let wewec: null;

console.log(" " + wefef + " " + ewqc + " ");

//Enum
const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair'
}

function flip(f: Flippable) {
    return 'flipped it'
}

console.log(flip(Flippable.Burger));
console.log(flip(Flippable['Burger']));

//Five ways to declare functions
function greet(name:string) {
    return "hello " + name
}

let myOtherFunction = function(name:string) {
    return "hello " + name
}

let myArrowFunction = (name:string) => {
    return "hello " + name
}

type Context = {
    appId?:string
    userId?:string
}

function log(message: string, context: Context={}) {
    let time = new Date().toISOString()
    console.log(time,message,context.userId)
}

let s23 : Context = {
    userId : "as",
    appId : "12"
};

log("hello", s23)

//Type alias
type Age = number;
type Person = {
    name: string
    age: Age
}

let age : Age = 44
let driver : Person = {
    name : 'James May',
    age: age
}

console.log(driver.age + " " + driver.name)

//Rest parameters
function sumOverAll(numbers: number[]): number {
    return numbers.reduce((total,n) => total+n,0) //why 0?
}
let as : number[] = [1,2,3,4,5];
//Second option
let as333 = as.reduce(function(a: number,b:number) {
    return a + b
});

console.log(as333);
console.log(sumOverAll(as));

//Rest parameter
function sumVariadic(message?: any, ...numbers: number[]): number {
    console.log("We sum up " + numbers.length + " " + message + " values")
    return Array
            .from(numbers)
            .reduce(((total,n) => total + n))
}

console.log(sumVariadic("Number", 1,2,3))

function fancyDate(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

console.log(fancyDate.call(new Date))

function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while(true) {
        yield a;
        [a,b] = [b, a+b]
    }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())

function* createNumbers(): IterableIterator<number> {
    let n = 0
    while(1) {
        yield n++
    }
}

let numbers = createNumbers()
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())

let foo : number[] = [];
let N : number = 100;
for (let i = 1; i <= N; i++) {
   foo.push(i);
}
console.log(foo[80]);

let foof : number[] = [1,2,3,4,5]
for(let a of foof) {
    console.log(a)
}
let [one, two, ...rest] = foof;
for(let asttt of rest) {
    console.log("Rest " + asttt)
}

function area(radius: number): number | null {
    if(radius < 0){
        return null
    }
    return Math.PI
}

//Call signature: (x:number, y:number)=>number
var myTwo : (x:number, y:number) => number = (x,y) => x + y; 

let s : number = myTwo(2,2);
console.log(s)

type Greet = (name: string) => string
let logeff: Greet = (
    asd
) => {
    return ("Hello " + asd)
}
console.log(logeff("asas"))

let asas : Greet = function(name: string) {
    return name
}

type Log = (message: string, userId?: string) => void
let logXY: Log = (
    message,
    userId = 'Not signed in'
) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}

logXY("asd");
logXY("asfw","q2e2e");

//Contextual typing/ callback function
function times(
    f: (index:number) => void,
    n: number
) {
    for(let i = 0; i < n; i++) {
        f(i)
    }
}

times(n=>console.log(n),4)
times(n=>{let y: number = n*n-3;console.log(y)},5)

//Overload function
type Reservation = {
    //reserve : string
}
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}
let reserve: Reserve = (
    from: Date, 
    toOrDestination: Date | string, 
    destination?: string
) => {
     if(toOrDestination instanceof Date && destination !== undefined) {
        console.log(from);
     } else if(typeof toOrDestination === 'string'){
         console.log(from);
     }
     return "reservation"
}
// overloading functions -> call signature: (baseValue: number, increment: number) => number
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
};
//optional parameters
function buildName(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
let result4 = buildName(undefined, "Adams");
console.log(result4) // returns Will Adams

//this
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
  
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
  console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

//improved this
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this:Deck):() => Card;
}
let deck2: Deck = {
    suits:["hearts","spades","clubs","diamonds"],
    cards:Array(52),
    //this is referring to this Deck object!
    createCardPicker: function(this:Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random()*52);
            let pickedSuit = Math.floor(pickedCard/13);
            //in curly braces: has signature of Card 
            //this is refering to object in function(this:Deck)
            //after colon -> assign values!
            return {suit:this.suits[pickedSuit], card:pickedCard%13};
        };
    },
};
//createCardPicker returns function that returns a Card
let cardPicker2 = deck2.createCardPicker();
//call function that return a Card
let pickedCard2 = cardPicker2();
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//Overloading
let suits = ["hearts","spades","clubs","diamonds"];
//define different input / output types:
// -> input type {suit:string;card:number}[] -> array of objects with Card signature
// -> output type number -> number
function pickedCardX(x:{suit:string;card:number}[]):number;
function pickedCardX(x:number):{suit:string;card:number};
function pickedCardX(x:any):any {
    if(typeof x == "object") {
        let pickedCard = Math.floor(Math.random()*x.length);
        return pickedCard;
    }
    else if(typeof x == "number") {
        let pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card:x%13};
    }
}
let myDeck= [
    {suit:"diamonds", card:2},
    {suit:"spades", card:10},
    {suit:"hearts", card:4},
];
let pickedCard1 = myDeck[pickedCardX(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2X = pickedCardX(15);
console.log("card: " + pickedCard2X.card + " of " + pickedCard2X.suit);

//Polymorphism -> Generics -> enforce type-level constraint in multiple places
//-> polymorphic type parameter
//(1) Bounding when calling function
type Filter = {
    <T>(array: T[], f: (item: T) => boolean) : T[]
}
let numberArray = [1,2,3,4];
let filter: Filter = (arrayXX, f) => {
    let result = []
    for(let i = 0; i < arrayXX.length; i++) {
        let item = arrayXX[i]
        if(f(item)){
            result.push(item)
        }
    }
    return result
}

let sasfd = filter(numberArray, _ => _<3)
console.log(sasfd) // return [1,2]

//(1) Bounding when using Filter
type Filter2X<T> = {
    (array: T[], f: (item: T) => boolean) : T[]
}
let filterPPP: Filter2X<number> = (arrayXX, f) => {
    let result = []
    for(let i = 0; i < arrayXX.length; i++) {
        let item = arrayXX[i]
        if(f(item)){
            result.push(item)
        }
    }
    return result
}
let sasfdSD = filterPPP(numberArray, _ => _>3)
console.log(sasfdSD) // return [4]