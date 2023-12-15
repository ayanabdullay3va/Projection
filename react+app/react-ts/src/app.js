var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }
    Human.prototype.getInfo = function () { };
    return Human;
}());
var Position;
(function (Position) {
    Position[Position["developer"] = 0] = "developer";
    Position[Position["designer"] = 1] = "designer";
})(Position || (Position = {}));
var Emploee = /** @class */ (function (_super) {
    __extends(Emploee, _super);
    function Emploee(salary, skills) {
        var _this = _super.call(this, surname, age, salary, skills) || this;
        _this.salary = salary;
        _this.skills = skills;
        return _this;
    }
    return Emploee;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, GPA, hobbies) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        _this.hobbies = hobbies;
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._GPA = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    };
    return Student;
}(Human));
