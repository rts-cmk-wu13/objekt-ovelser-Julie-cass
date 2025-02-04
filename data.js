let cat = {
    firstname: "fluffy",
    nickname: "old lady",
    age: 13,
    hometown: "brønshøj"
}

//-----opgave 1-----
console.log(cat.firstname)
console.log(cat.nickname)
console.log(cat.age)
console.log(cat.hometown)


//-----opgave 2-----
let cat2 = {
    firstname: "fluffy",
    nickname: "old lady",
    age: 13,
    hobbies: ["sleeping", "yelling", "running", "looking at builders"],
    hometown: "brønshøj",
    family: {
        parent: "cat mom",
        enemy: "ib"
    }
}


cat2.hobbies.forEach(function (hobby) {
    console.log(hobby);
})

console.log(cat2.family.parent);
console.log(cat2.family.enemy);

//-----opgave 3-----

let newDiv = document.createElement("div");
newDiv.textContext = "dette er en ny <div>";
document.body.append(newDiv);

let students = [
    { name: "bobby", age: 69, course: "footballer" },
    { name: "kim", age: 20, course: "designer" },
    { name: "larsen", age: 49, course: "forfatter" },
];

let studentListDiv = document.querySelector(".student-list");
students.forEach(function (student) {
    const studentDiv = document.createElement("div");
    studentDiv.textContent =
    `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
    console.log(studentDiv);
/*         student.name + ', alder: ' + student.age + ', uddannelse: ' + student.course;
 */    
})


//-----extra code/examples-----


const name2 = "carl";
const age2 = 50;
const message = `Mit navn er ${name2}, og jeg er ${age2} år gammel.`;
console.log(message);

const poem = `Coding tip for when you get stuck:
Shut your laptop. 
Stand up.
Stretch.
Take a walk.
Go to the airport.
Get on a plane.
Adopt a sea lion.
Never return.`;
console.log(poem);


