/// 1. დანაშთის ლოგიკა
let images1 = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
];
let index1 = 0;
function showImage1() {
  document.getElementById("slider1").src = images1[index1 % images1.length];
}
function next1() {
  index1++;
  showImage1();
}
function prev1() {
  index1 = (index1 - 1 + images1.length) % images1.length;
  showImage1();
}

//// 2. if ლოგიკა
let images2 = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
];
let index2 = 0;
function showImage2() {
  document.getElementById("slider2").src = images2[index2];
}
function next2() {
  if (index2 < images2.length - 1) {
    index2++;
  } else {
    index2 = 0;
  }
  showImage2();
}
function prev2() {
  if (index2 > 0) {
    index2--;
  } else {
    index2 = images2.length - 1;
  }
  showImage2();
}

//<> 3. პროგრამირების ენები
let logos = [
  { src: "images/html.png", name: "HTML" },
  { src: "images/css.png", name: "CSS" },
  { src: "images/js.png", name: "JavaScript" },
  { src: "images/python.png", name: "Python" },
  { src: "images/java.png", name: "Java" },
];
let index3 = 0;
function showImage3() {
  document.getElementById("slider3").src = logos[index3].src;
  document.getElementById("label3").innerText = logos[index3].name;
}
function next3() {
  index3 = (index3 + 1) % logos.length;
  showImage3();
}
function prev3() {
  index3 = (index3 - 1 + logos.length) % logos.length;
  showImage3();
}
