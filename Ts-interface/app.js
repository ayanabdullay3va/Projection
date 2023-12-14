// interface IHuman{
//     name:string;
//     surname:string;
//     age:number
//     getInfo():void
// }
// abstract class Human{
// private _name:string;
// private _surname:string;
// age:number;
// getInfo(): void {}
// constructor(name:string,surname:string,age:number){
//     this._name=name;
//     this._surname=surname;
//     this.age=age
// }
// }
// enum Position{
// developer,designer
// }
// abstract class Emploee extends Human implements IEmploee{
// salary:number;
// skills:string;
// constructor(salary:number,skills:string){
//     super (surname,age,salary , skills);
//     this.salary=salary;
//     this.skills=skills
// }
// }
// class Student extends Human implements IStudent<string[]>{
//     public groupName: string;
//     private _GPA: number;
//     public hobbies: string[];
//     constructor(name: string,surname: string,age:number, groupName: string, GPA: number, hobbies: string[]){
//         super(name, surname,age);
//         this.groupName = groupName;
//         if (GPA<0 || GPA>100) {
//             this._GPA = 0;
//         }
//         else{
//             this._GPA = GPA;
//         }
//         this.hobbies = hobbies;
//     }
//     get GPA(){
//         return this._GPA;
//     }
//     set GPA(value:number){
//         if (value>=0 && value<=100) {
//             this._GPA = value;
//         }
//     }
//     hasPassed():boolean{
//         if (this._GPA<50) {
//             return false;
//         }
//         else{
//             return true;
//         }
//     }
// }
var Emploee = /** @class */ (function () {
    function Emploee(skills, salary) {
        this.skills = skills,
            this.salary = salary;
    }
    return Emploee;
}());
var Student = /** @class */ (function () {
    function Student(groupname, Gpa, hobbies) {
        this.groupname = groupname;
        this.Gpa = Gpa;
        this.hobbies = hobbies;
    }
    return Student;
}());
var form = document.querySelector("form");
var submitbtn = document.querySelector(".button");
var ageinp = document.querySelector(".ageinp");
var nameinp = document.querySelector(".nameinp");
var surnameinp = document.querySelector(".surnameinp");
submitbtn === null || submitbtn === void 0 ? void 0 : submitbtn.addEventListener("click", function () {
});
