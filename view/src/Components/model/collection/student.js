export default class Student {
    constructor(studentDetails){
        this.studentDetails = studentDetails
     console.log("inclass",this.studentDetails)
    }

    getStudentDetails(){
        return this.studentDetails
    }
}