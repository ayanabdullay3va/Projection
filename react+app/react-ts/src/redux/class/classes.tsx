import React from 'react'

 // // enum VehicleType {
// //   car,
// //   motorcycle

// // }
// // enum engineType {
// //   doch,
// //   turbo
// // }
// // interface Vehicle {
// //   brandName: string,
// //   modelName: string,
// //   year: Date,
// //   fuelCapacity: number,
// //   fuelFor1Km: number,
// //   engine: engineType,
// //   getInfo(): string,
// //   drive(km: number): string,
// //   currentFuel: number,
// //   millage: number,

// // }
// // class motorcycle implements Vehicle {

// //   constructor(
// //     public vehicleType: VehicleType,
// //     public brandName: string,
// //     public modelName: string,
// //     public year: Date,
// //     public fuelCapacity: number,
// //     public fuelFor1Km: number,
// //     public engine: engineType,
// //     public currentFuel: number,
// //     public millage: number
// //   ) { }
// //   getInfo(): string {
// //     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
// //   }
// //   drive(km: number): string {
// //     if (km <= this.currentFuel / this.fuelFor1Km) {
// //       let Current: number = this.currentFuel - km * this.fuelFor1Km
// //       let millageNow: number = this.millage + km
// //       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
// //     }
// //     else {
// //       return `Salam`
// //     }



// //   }
// // }
// // const myMoto = new motorcycle(VehicleType.motorcycle, 'suzuki', '911kms', new Date(2022, 0, 1), 60, 12, engineType.doch, 230, 20000);
// // console.log(myMoto.getInfo());
// // console.log(myMoto.drive(2));

// // class Car implements Vehicle {

// //   constructor(
// //     public vehicleType: VehicleType,
// //     public brandName: string,
// //     public modelName: string,
// //     public year: Date,
// //     public fuelCapacity: number,
// //     public fuelFor1Km: number,
// //     public engine: engineType,
// //     public currentFuel: number,
// //     public millage: number


// //   ) { }
// //   getInfo(): string {
// //     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
// //   }
// //   drive(km: number): string {
// //     if (km <= this.currentFuel / this.fuelFor1Km) {
// //       let Current: number = this.currentFuel - km * this.fuelFor1Km
// //       let millageNow: number = this.millage + km
// //       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
// //     }
// //     else {
// //       return `Salam`
// //     }



// //   }
// // }
// // console.log();
// // const myCar = new Car(VehicleType.car, 'Toyota', 'Camry', new Date(2022, 0, 1), 60, 12, engineType.doch, 30, 50000);
// // console.log(myCar.getInfo());


// enum VehicleType {
//   car,
//   motorcycle

// }
// enum engineType {
//   doch,
//   turbo
// }
// interface Vehicle {
//   brandName: string,
//   modelName: string,
//   year: Date,
//   fuelCapacity: number,
//   fuelFor1Km: number,
//   engine: engineType,
//   getInfo(): string,
//   drive(km: number): string,
//   currentFuel: number,
//   millage: number,

// }
// class motorcycle implements Vehicle {

//   constructor(
//     public vehicleType: VehicleType,
//     public brandName: string,
//     public modelName: string,
//     public year: Date,
//     public fuelCapacity: number,
//     public fuelFor1Km: number,
//     public engine: engineType,
//     public currentFuel: number,
//     public millage: number
//   ) { }
//   getInfo(): string {
//     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
//   }
//   drive(km: number): string {
//     if (km <= this.currentFuel / this.fuelFor1Km) {
//       let Current: number = this.currentFuel - km * this.fuelFor1Km
//       let millageNow: number = this.millage + km
//       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
//     }
//     else {
//       return `Salam`
//     }



//   }
// }
// const myMoto = new motorcycle(VehicleType.motorcycle, 'suzuki', '911kms', new Date(2022, 0, 1), 60, 12, engineType.doch, 230, 20000);
// console.log(myMoto.getInfo());
// console.log(myMoto.drive(4));

// class Car implements Vehicle {

//   constructor(
//     public vehicleType: VehicleType,
//     public brandName: string,
//     public modelName: string,
//     public year: Date,
//     public fuelCapacity: number,
//     public fuelFor1Km: number,
//     public engine: engineType,
//     public currentFuel: number,
//     public millage: number


//   ) { }
//   getInfo(): string {
//     return `Type: ${VehicleType[this.vehicleType]}, Brand: ${this.brandName}, Model: ${this.modelName}, Year: ${this.year.getFullYear()}, Fuel Capacity: ${this.fuelCapacity}, Fuel Consumption: ${this.fuelFor1Km},Engine:${engineType[this.engine]},Fuel : ${this.currentFuel},Millage:${this.millage}`;
//   }
//   drive(km: number): string {
//     if (km <= this.currentFuel / this.fuelFor1Km) {
//       let Current: number = this.currentFuel - km * this.fuelFor1Km
//       let millageNow: number = this.millage + km
//       return `CurrentFuelNow: ${Current},millageNow:${millageNow}`
//     }
//     else {
//       return `Salam`
//     }



//   }
// }
// console.log();
// const myCar = new Car(VehicleType.car, 'Toyota', 'Camry', new Date(2022, 0, 1), 60, 12, engineType.doch, 30, 50000);
// console.log(myCar.getInfo());
// interface IAnimal {
//   name: string;
//   age: number;
//   getInfo(): void;
// }
// enum LivePlace {
//   river,
//   ocean,
//   sea
// }
// type killType = string | string[]
// interface IKill<T extends killType> {
//   kill: T
// }
// interface IFish extends IKill<killType> {
//   swim(): void,
//   livePlace: LivePlace
//   kill: killType

// }

// abstract class Animal implements IAnimal {
//   constructor(
//     readonly name: string,
//     readonly age: number
//   ) { }

//   getInfo(): void {
//     console.log(this.name, this.age);
//   }
// }

// class Fish extends Animal implements IFish {
//   livePlace: LivePlace
//   kill: killType;
//   constructor(
//     name: string,
//     age: number,
//     livePlace: LivePlace,
//     kill: killType,

//   ) {
//     super(name, age);
//     this.livePlace = livePlace;
//     this.kill = kill
//   }
//   swim(): void {
//     console.log("uzur baliq");

//   }
//   getInfo(): void {
//     console.log(`Fish: ${this.name}, Age: ${this.age},Color: ${LivePlace[this.livePlace]},kill: ${this.kill}`);
//   }
// }


// const myFish = new Fish("Nemo", 2, LivePlace.ocean, "2343556");
// myFish.getInfo();
// myFish.swim() 

interface IHuman {

    name: string;
    surname: string;
    age: number;
    getInfo(): string;
}
abstract class Human implements IHuman {
    private _name: string;
    private _surname: string;
    public age: number
    constructor(name: string, surname: string, age: number) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }

    public get name() {
        return this._name
    }
    public get surname() {
        return this._surname
    }
    public get surnameAndName() {
        return this._surname + this._name
    }

    abstract getInfo(): string;
}
// EMPLYOOOOOOOOOOOOOOOOOOOOOOO
enum Position {
    boss = "boss",
    other = "other"
}
interface IEmployee<T> {
    salary: number,
    skills: T,
    position: Position

}
class Employee extends Human implements IEmployee<string[]> {
    // private employeeName: string;
    // private employeeSurname: string;
    salary: number;
    skills: string[];
    position: Position;

    constructor(name: string, surname: string, age: number, salary: number, skills: string[], position: Position,) {
        super(name, surname, age);
        // this.employeeName = name;
        // this.employeeSurname = surname;
        this.salary = salary
        this.skills = skills
        this.position = position
        if ( typeof Number(age)) {
           this.age = 0
            
        }
        else{
            this.age = age
        }
    }


    getInfo(): string {

        return ` Age:${this.age } Salary: ${this.salary } Surname: ${this.surname } Name:${this.name }`
    }
}
// Studentttttttttttttttttttttttttttttt
let Employee1 = new Employee("salam", "salam", 23, 233, ["saa"], Position.boss)

Employee1.getInfo()
console.log(Employee1);

interface IStudent<T> {
    groupName: string,
    hobbies: T,
    GPA: number,
    hasPassed(): boolean
}
class Student extends Human implements IStudent<string | string[]> {
    groupName: string
    hobbies: string | string[]
    private _GPA: number
    constructor(name: string, surname: string, age: number, groupName: string, hobbies: string | string[], GPA: number) {
        super(name, surname, age);
        this.groupName = groupName
        this.hobbies = hobbies
        this._GPA = GPA

    }
    hasPassed(): boolean {
        if (this.GPA < 50) {
            return true
        }
        else {
            return false
        }
    }
    getInfo(): string {
        console.log(`Employee: ${this.name} ${this.surname}, Age: ${this.age}`);
        return "salam"
    }
    public get GPA() {
        return this._GPA
    }
    public set GPA(NewGPA) {
        if (NewGPA <= 100 && NewGPA > 0) {
            this._GPA = NewGPA
        }

    }
}


let studentForm = document.querySelector(".student") as HTMLFormElement
let employeeForm = document.querySelector(".employee") as HTMLFormElement
let selectOption = document.querySelector(".select") as HTMLSelectElement
function selectreset(){
    selectOption.addEventListener("change", function () {

        if (this.value == "employee") {
            studentForm.style.display = "none"
            employeeForm.style.display = "block"
        }
        else if (this.value == "student") {
            studentForm.style.display = "block"
            employeeForm.style.display = "none"
    
    
        }
    
    })
}
selectreset()
let employeeName = document.querySelector(".employeeName") as HTMLInputElement
let employeeSurname = document.querySelector(".employeeSurname") as HTMLInputElement
let employeeAge = document.querySelector(".employeeAge") as HTMLInputElement
let employeeSalary = document.querySelector(".employeeSalary") as HTMLInputElement
let employeeSkills = document.querySelector(".employeeSkills") as HTMLInputElement
let positions = document.querySelector(".skills") as HTMLSelectElement
let position: string;
positions.addEventListener("change", function () {
    position = positions.value
})
console.log(employeeSalary);
function reset () {
    employeeAge.value = ""
    employeeName.value = ""
    employeeSurname.value = ""
    employeeSalary.value = ""
    employeeSkills.value = ""
    position = ""
}
employeeForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let age: number = +(employeeAge.value)
    let Name: string = employeeName.value
    let Surname: string = employeeSurname.value
    let salary: number = +(employeeSalary.value)
    let skills: string[] = (employeeSkills.value).split(",")
    let postionn: string = position

    let employee5 = new Employee(Name, Surname, age, salary,skills , Position.boss)

    console.log(employee5);
    let Employes = document.querySelector(".Employes") as HTMLDivElement
    Employes.innerHTML += ` <li>${employee5.getInfo()}</li>

`
   reset()
  if (selectOption.value == "employee") {
    
    studentForm.style.display = "block"
    employeeForm.style.display = "none"
selectOption.value= "student"
  }
})
studentForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let age: number = +(employeeAge.value)
    let Name: string = employeeName.value
    let Surname: string = employeeSurname.value
    let salary: number = +(employeeSalary.value)
    let skills: string[] = (employeeSkills.value).split(",")
    let postionn: string = position

    let employee5 = new Employee(Name, Surname, age, salary,skills , Position.boss)

    console.log(employee5);
    let Employes = document.querySelector(".Employes") as HTMLDivElement
    Employes.innerHTML += ` <li>${employee5.getInfo()}</li>

`
   reset()
  if (selectOption.value == "employee") {
    
    studentForm.style.display = "block"
    employeeForm.style.display = "none"
selectOption.value= "student"
  }
})


let salam = "sadsa"
console.log(typeof salam);


