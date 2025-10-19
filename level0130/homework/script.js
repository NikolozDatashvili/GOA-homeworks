//// try{} – ამ ბლოკში ვწერთ იმ კოდს, რომელმაც შეიძლება error-ი გამოიწვიოს
//// თუ try-ის შიგნით მოხდა შეცდომა, კოდი გადავა catch-ში.

/// catch(err){} – იჭერს ერორს და მასში ჩაწერილი კოდით შეგვიძლია
/// ვამცნოთ მომხმარებელს შეცდომის შესახებ

document.getElementById("btn").addEventListener("click", async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    document.getElementById(
      "output"
    ).innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
  } catch (err) {
    console.error("შეცდომა:", err.message);
  }
});

async function getData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await res.json();
  document.getElementById(
    "output1"
  ).innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
}
getData();

// async – ფუნქციის წინ რომ დავწერთ, ეს ფუნქცია ავტომატურად აბრუნებს "პრომისს".

//
// await – გამოიყენება async ფუნქციის შიგნით.
// იგი "ელოდება", სანამ პრომისი დასრულდება (resolve/reject).
// შედეგად ვიღებთ პირდაპირ მონაცემებს, თითქოს სინქრონული კოდია.
