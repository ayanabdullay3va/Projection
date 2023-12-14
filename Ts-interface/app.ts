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
class Emploee{
    skills:string[];
    salary:number
    constructor(skills:string[],salary:number){
this.skills=skills,
this.salary=salary
    }

}
class Student {
    groupname:string;
    Gpa:number;
    hobbies:string[]
    constructor(groupname:string,Gpa:number,hobbies:string[]){
        this.groupname=groupname;
        this.Gpa=Gpa;
        this.hobbies=hobbies
    }
}
let form=document.querySelector("form")!
let submitbtn=document.querySelector(".button")!
let ageinp=document.querySelector(".ageinp")!
let nameinp=document.querySelector(".nameinp")!
let surnameinp=document.querySelector(".surnameinp")!
submitbtn?.addEventListener("click" ,  ()=>{

})