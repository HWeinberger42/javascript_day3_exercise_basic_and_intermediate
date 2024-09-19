// // exercise 1.1

// let ar = [1, 7, -3, 9];
// let ra = [];
// let highest = 0;
// let found = false;

// const search = arrayToSearch => {

//     let highest = 0;
//     let found = false;

//     for (const element of arrayToSearch) {
//         if (element > highest) {
//             highest = element;
//             found = true;
//         };
//     };

//     if (found){
//         console.log(`The highest value of the array ar is ${highest}`);
//     } else {
//         console.log("No element was found.");
//     };

// };

// search(ar);

// search(ra);

// // exercise 1.2

// function temp () {
//     let tempe = (Math.random()*100)-50;
//     // console.log(tempe);
//     let tempeRounded = Math.round(tempe);
//     // console.log(tempeRounded);
//     if (tempeRounded > 45) {
//         return `🔥 The weather is unbareably hot with ${tempeRounded} °C!`;
//     } else if (tempeRounded > 37) {
//         return `🫠 The weather is scolding hot with ${tempeRounded} °C!`;
//     } else if (tempeRounded > 30) {
//         return `☀️ The weather is very hot with ${tempeRounded} °C!`;
//     } else if (tempeRounded > 20) {
//         return `🌤️ The weather is warm with ${tempeRounded} °C!`;
//     } else if (tempeRounded > 10) {
//         return `☁️ The weather is moderate with ${tempeRounded} °C!`;
//     } else if (tempeRounded > 0) {
//         return `🌧️ The weather is cold with ${tempeRounded} °C!`;
//     } else {
//         return `❄️ The weather is freezing with ${tempeRounded} °C!`;
//     }
// };

// alert (temp());

// // temp1();
// // temp1();
// // temp1();
// // temp1();

// exercise 2.1

let martin = [76, 64, 81, 57, 94];

let thomas = [85, 49, 81, 72, 55];

let klaus = [65, 91, 84, 67, 85];

let maria = [93, 70, 81, 64, 84];

let david = [81, 99, 71, 100, 69];

let studentGroup1A = [martin, thomas, klaus, maria, david];

console.log(studentGroup1A);

let gradeTier = [
    [100, 90, 80, 70, 60],
    ["A", "B", "C", "D", "F"]
];


const gradePoints = (points, tierList) => {
    let graded = -1;
    for (let index = 0; index < tierList[0].length; index++) {
        const tierPoints = tierList[0][index];
        const tierGrade = tierList[1][index];
        if (points < (tierPoints + 1)) {
           graded = tierGrade;
           console.log(graded); 
        }
    }
    console.log("finished");
    return graded;
};

const gradeStudent = (student, tierList) => {
    let gradedStudent = [];
    for (let i = 0; i < student.length; i++) {
        gradedStudent[i] = gradePoints(student[i], tierList);

    };
    return gradedStudent;
};

const gradeStudentGroup = (studentGroup, tierList) => {
    let gradedStudentGroup = [];
    for (let stu = 0; stu < studentGroup.length; stu++) {
        gradedStudentGroup[stu] = gradeStudent(studentGroup[stu], tierList);
    }
    return gradedStudentGroup;
}

console.log(gradeStudentGroup(studentGroup1A, gradeTier));

const averagePoints = student => {
    let sum = 0;
    for (const points of student) {
        sum += points;
    }
    return [student.length, sum/student.length];
}

averageMartin = averagePoints(martin);

console.log(`The average points of student Martins' ${averageMartin[0]} grades is ${averageMartin[1]}, the average grade is ${gradePoints(averageMartin[1], gradeTier)}.`);

const averagePointsGroup = (studentGroup) => {
    let sumG = 0;
    let numberOfGradesGroup = 0;
    for (const student of studentGroup) {
        let aPoints = averagePoints(student);
        numberOfGradesGroup += aPoints[0];
        console.log(numberOfGradesGroup);
        sumG += aPoints[1];
        console.log(sumG);
    }
    return [numberOfGradesGroup, sumG/studentGroup.length];
}

averageOfStudentGroup1A = averagePointsGroup(studentGroup1A);

console.log(`The average points of all student group 1A ${averageOfStudentGroup1A[0]} grades is ${averageOfStudentGroup1A[1]}, the average grade is ${gradePoints(averageOfStudentGroup1A[1], gradeTier)}.`);
