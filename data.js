let cat ={
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
let cat2 ={
    firstname: "fluffy",
    nickname: "old lady",
    age: 13,
    hobbies: ["sleeping", "yelling", "running", "looking at builders"],
    hometown: "brønshøj",
    family:{
parent: "cat mom",
enemy: "ib"
    }
}


cat2.hobbies.forEach(function(hobby){
    console.log(hobby);
})

console.log(cat2.family.parent);
console.log(cat2.family.enemy);

//-----opgave 3-----
