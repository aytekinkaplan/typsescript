var Student = /** @class */ (function () {
    function Student(_RollNo, _Name) {
        this.RollNo = _RollNo;
        this.Name = _Name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());
