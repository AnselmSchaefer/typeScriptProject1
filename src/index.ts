class MyClass {
    constructor(private s: string, private q: string) {}

    printName() {
        console.log(this.s + " " + this.q)
    }
}

let x = new MyClass("Anselm", "Schäfer");

let s : {
    firstName: string;
    secondName: string;
}

function printNameS() {
    
}

x.printName();

