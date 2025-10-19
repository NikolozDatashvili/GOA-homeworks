let card = document.querySelector(".card");
let uList = document.querySelector("ul");
let items = "";
async function func1() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    let count = 0;
    data.forEach((elem) => {
      if (count < 10) {
        items += `
      <li><h2>ID: ${elem.id}</h2><h3>Title: ${elem.title}</h3><p>Body ${elem.body}</p></li>
      
      `;
      }

      count++;
    });
    uList.innerHTML = items;
  } catch (err) {
    console.error(err);
  }
}
func1();
