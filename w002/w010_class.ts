class Student {
    RollNo: number;
    Name: string;

    constructor(_RollNo: number, _Name: string) {
        this.RollNo = _RollNo;
        this.Name = _Name;
    }

    showDetails() {
        console.log(this.RollNo + " : " + this.Name);
    }
}
