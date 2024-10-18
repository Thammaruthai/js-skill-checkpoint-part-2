const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// - ให้เขียนโปรแกรมโดยใช้ Built-in Array Function ดังนี้
//     1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50 >> ใช้ .filter
//     2. ให้เพิ่มคะแนนนักเรียนแต่ละคน 10% >> ใช้ .map
//     3. ให้รวมคะแนนทั้งหมดของนักเรียนที่เหลืออยู่ และที่ถูกเพิ่มคะแนนคนละ 10% ไปก่อนหน้านี้ (โดยใช้ Built-in Array Function) >> ใช้ .reduce
//     4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ >> ใช้ console.log
//     `"Total score is <ค่าของคะแนนที่รวมแล้ว>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)

// 1
let filterStudentOver50 = students.filter(
  (studentList) => studentList.score > 50
);
//console.log(filterStudentOver50);

// 2
let increase10percent = filterStudentOver50.map(
  (studentList) => studentList.score * 1.1
);
//console.log(increase10percent);

// 3
let sumOfscoreOver50AndExtrascore = increase10percent.reduce(
  (acc, cur) => acc + cur,
  0
);

// 4 เพิ่มข้อความ และ กำหนดทศนิยม 1 ตำแหน่ง
let message = "" + sumOfscoreOver50AndExtrascore;
let messageArray = message.split("");
let answer = "Total score is ";

//fixed decimal
for (let i = 0; i < messageArray.length; i++) {
  //console.log(i);
  //console.log(messageArray[i]);
  if (messageArray[i] === ".") {
    //console.log(messageArray[i]);
    let fixeddecimal = messageArray.splice(
      i + 2,
      messageArray.length - (i + 2)
    );
    //console.log(fixeddecimal);
    //console.log(messageArray);
    answer += Number(messageArray.join(""));
  }
}

//คำตอบ
console.log(answer);
