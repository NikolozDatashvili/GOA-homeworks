// // JSON (JavaScript Object Notation) არის ტექსტური ფორმატი
// // გამოიყენება მონაცემების გასაზიარებლად სერვერსა და კლიენტს შორის
// // მსუბუქი და მარტივად წასაკითხია როგორც ადამიანისთვის ისე კომპიუტერისთვის
document.getElementById("btn").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("output").innerHTML =
        "<h3>" + data.title + "</h3><p>" + data.body + "</p>";
    });
});
document.getElementById("btn1").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (let i = 0; i < data.length; i++) {
        html += "<img src='" + data[i].thumbnailUrl + "' alt='photo'>";
      }
      document.getElementById("photos").innerHTML = html;
    });
});
