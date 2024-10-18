const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

let allPeople = []; //edit declare variable from const to let for reassignment.

// เริ่มเขียนโค้ดตรงนี้
// Reassign with rest function ...<variable>
allPeople = [...techupPeople, ...techcoolPeople];
console.log(allPeople);

// filter ให้กรองพนักงานที่มีอายุน้อยกว่า 20 โดยใช้ Built-in Array Function
let poplebelowtwenty = allPeople.filter((a) => a.age < 20);
console.log(poplebelowtwenty); //คำตอบ question 1
