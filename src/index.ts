import { setMaxListeners } from "process";

let externalX = new String();

class MyClass {
    constructor(private s: string, private q: string) {}
    sas = new String();
    printName() {
        this.sas = "as";
        this.sas = this.sas.toUpperCase();
        externalX = this.sas;
        let s : string = "hello";
        console.log(this.s + " " + this.q + " " + s + " " + this.sas);
    }
}

let x = new MyClass("Anselm", "Schäfer");

console.log(externalX);

x.printName();

console.log(externalX);

