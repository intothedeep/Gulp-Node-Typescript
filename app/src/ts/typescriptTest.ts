let people : string = "victor";

class Person {

  public fullName : string;

  constructor( public firstName:string, public lastName:string ) {
    this.fullName = firstName + " " + lastName;
    console.log(this.fullName);
  }

}

let visitor : Person = new Person("wowowowowowo11111111111wowowowowowowowo", "LLLLLLLLLLaasttttttt");

document.getElementById('visitor').innerHTML = visitor.fullName;
