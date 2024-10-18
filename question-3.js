// เริ่มเขียนโค้ดตรงนี้

async function fetchdata() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users"); //fetch data
  const userData = await users.json(); // covert to JSON
  //console.log(userData);
  console.log(userData.length); // มี10

  //filter length มากกว่า 17 รวมถึง spacebar
  let filterUser = userData.filter((user) => user.name.length > 17);
  console.log(filterUser.length); // จา่ก 10 เหลือ 3

  //reduce ให้เป็น array ด้วย build-in
  let filterUserNametoArray = filterUser.reduce((acc, cur) => {
    acc.push(cur.name);
    return acc;
  }, []);

  return filterUserNametoArray;
}

async function getUsers() {
  try {
    const data = await fetchdata();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//เรียกใช้ฟังก์ชั่น
getUsers();
