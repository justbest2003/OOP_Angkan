class University {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.departments = [];
        this.students = [];
        this.professors = [];
    }
    addDepartment(department) {
        this.departments.push(department)
    }
    addStudent(student) {
        this.students.push(student)
    }
    addProfessor(professor) {
        this.professors.push(professor);
    }
    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getDepartment() {
        let departments = "";
        for (let i = 0; i < this.departments.length; i++) {
            departments += this.departments[i].name;
            if (i < this.departments.length - 1) {
                departments += ", ";
            }
        }
        return departments;
    }
    getStudents() {
        let students = "";
        for (let i = 0; i < this.students.length; i++) {
            students += this.students[i].name;
            if (i < this.professors.length - 1) {
                students += ", ";
            }
        }
        return students;
    }
    getProfessor() {
        let professors = "";
        for (let i = 0; i < this.professors.length; i++) {
            professors += this.professors[i].name;
            if (i < this.professors.length - 1) {
                professors += ", ";
            }
        }
        return professors;
    }
    toString() {
        return `University: ${this.name}, \n\tLoction:  ${this.location} \n\tDepartment:  ${this.getDepartment()}  \n\tStudent:  ${this.getStudents()}   \n\tProfessor:  ${this.getProfessor()} `
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.courses = [];
        this.professors = [];
        this.students = [];
    }
    addCourse(course) {
        this.courses.push(course)
    }
    addStudent(student) {
        this.students.push(student)
    }
    addProfessor(professor) {
        this.professors.push(professor);
    }

    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    removeProfessor(professor) {
        const index = this.professors.indexOf(professor);
        if (index !== -1) {
            this.professors.splice(index, 1);
        }
    }
    getCourse() {
        return this.courses.length;
    }
    getStudents() {
        let students = "";
        for (let i = 0; i < this.students.length; i++) {
            students += this.students[i].name;
            if (i < this.students.length - 1) {
                students += ", ";
            }
        }
        return students;
    }
    getProfessors() {
        let professors = "";
        for (let i = 0; i < this.professors.length; i++) {
            professors += this.professors[i].name;
            if (i < this.professors.length - 1) {
                professors += ", ";
            }
        }
        return professors;
    }
    toString() {
        return `Department: ${this.name}, \n\tCourse: ${this.getCourse()}, \n\tStudents: ${this.getStudents()}, \n\tProfessors: ${this.getProfessors()}`
    }
}

class Course {
    constructor(code, title) {
        this.code = code;
        this.title = title;
        this.professors = [];
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student)
    }
    removeStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
    setProfessor() {
        this.professors = professors;
    }
    getProfessor() {
        let professors = "";
        for (let i = 0; i < this.professors.length; i++) {
            professors += this.professors[i].name;
            if (i < this.professors.length - 1) {
                professors += ", ";
            }
        }
        return professors;
    }
    getStudents() {
        let students = "";
        for (let i = 0; i < this.students.length; i++) {
            students += this.students[i].name;
            if (i < this.students.length - 1) {
                students += ", ";
            }
        }
        return students;
    }
    toString() {
        return `Course: ${this.code} - ${this.title} \n\tProfessor: ${this.getProfessor()} \n\tStudents: ${this.getStudents()}`
    }
}

class Person {
    constructor(name, address, email) {
        this.name = name;
        this.address = address;
        this.email = email;
    }
}

class Professor extends Person {
    constructor(name, address, email, staffId) {
        super(name, address, email)
        this.staffId = staffId;
        this.courses = [];
    }
    teachCourse(course) {
        this.courses.push(course)
    }
    stopTeachingCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let courses = "";
        for (let i = 0; i < this.courses.length; i++) {
            courses += this.courses[i].title;
            if (i < this.courses.length - 1) {
                courses += ", ";
            }
        }
        return courses;
    }
    toString() {
        return `Student: ${this.name}, ${this.staffId} \n\tCourses: ${this.getCourses()}`
    }
}



class Student extends Person {
    constructor(name, address, email, studentId, year) {
        super(name, address, email)
        this.studentId = studentId;
        this.year = year;
        this.courses = [];
    }
    registerCourse(course) {
        this.courses.push(course)
    }
    dropCourse(course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
        }
    }
    getCourses() {
        let courses = "";
        for (let i = 0; i < this.courses.length; i++) {
            courses += this.courses[i].title;
            if (i < this.courses.length - 1) {
                courses += ", ";
            }
        }
        return courses;
    }
    toString() {
        return `Student: ${this.name}, ${this.studentId}, ${this.year} \n\tCourses: ${this.getCourses()}`
    }

}

const main = () => {
    // Creating University
    const myUniversity = new University(
        "Nakhon Pathom Rajabhat University",
        "85 Malaiman Road, Nakhon Pathom, Thailand"
    );

    // Creating Departments
    const department1 = new Department("Computer Science");
    const department2 = new Department("Software Engineering");

    // Adding Departments to University
    myUniversity.addDepartment(department1);
    myUniversity.addDepartment(department2);

    // Creating Students
    const student1 = new Student(
        "Alice",
        "123 Kanchanaburi",
        "alice@example.com",
        "S001",
        1
    );
    const student2 = new Student(
        "Bob",
        "456 Ratchaburi",
        "bob@example.com",
        "S002",
        2
    );

    // Adding Students to University
    myUniversity.addStudent(student1);
    myUniversity.addStudent(student2);

    // Adding Students to Department
    department1.addStudent(student1);
    department2.addStudent(student2);

    // Creating Professors
    const professor1 = new Professor(
        "Dr. Worachet Uttha",
        "789 Phetchakaseam road",
        "wuttha@example.com",
        "P001"
    );
    const professor2 = new Professor(
        "Dr. Udsanee Pakdeetrakulwong",
        "101 Wangtaku",
        "udsanee@example.com",
        "P002"
    );

    // Adding Professors to University
    myUniversity.addProfessor(professor1);
    myUniversity.addProfessor(professor2);
    //adding Professor to department
    department1.addProfessor(professor1);
    department2.addProfessor(professor2);
    // Creating Courses
    const course1 = new Course(
        "CS101",
        "Introduction to Programming",
        professor1
    );
    const course2 = new Course(
        "SE101",
        "Introduction of Database Design",
        professor2
    );

    //adding student to course
    course1.addStudent(student1);
    course2.addStudent(student2);

    // Registering Students to Courses
    student1.registerCourse(course1);
    student2.registerCourse(course2);

    // Teaching Courses by Professors
    professor1.teachCourse(course1);
    professor2.teachCourse(course2);

    //add course to department
    department1.addCourse(course1);
    department2.addCourse(course2);

    // Printing Information
    console.log(myUniversity.toString());
    console.log(department1.toString());
    console.log(department2.toString());
    console.log(course1.toString());
    console.log(course2.toString());
    console.log(student1.toString());
    console.log(student2.toString());
    console.log(professor1.toString());
    console.log(professor2.toString());

    // Printing all students in the university
    console.log("Students in the University:");
    myUniversity.students.forEach((student) => {
        console.log(student.toString());
    });

    // Printing all professors in the university
    console.log("Professors in the University:");
    myUniversity.professors.forEach((professor) => {
        console.log(professor.toString());
    });

    // Printing all departments in the university
    console.log("Departments in the University:");
    myUniversity.departments.forEach((department) => {
        console.log(department.toString());
    });

}

main();