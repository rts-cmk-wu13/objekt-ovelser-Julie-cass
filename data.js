let cat ={
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

 //-----opgave 1-----
/* console.log(cat.firstname)
console.log(cat.nickname)
console.log(cat.age)
console.log(cat.hometown)
 */

//-----opgave 2-----

cat.hobbies.forEach(function(hobby){
    console.log(hobby);
})

console.log(cat.family.parent);
console.log(cat.family.enemy);

//-----opgave 3-----
