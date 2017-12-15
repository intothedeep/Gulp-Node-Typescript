var people = "victor";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
        console.log(this.fullName);
    }
    return Person;
}());
var visitor = new Person("wowowowowowo11111111111wowowowowowowowo", "LLLLLLLLLLaasttttttt");
document.getElementById('visitor').innerHTML = visitor.fullName;
