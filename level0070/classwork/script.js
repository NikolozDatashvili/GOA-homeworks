function domainName(url) {
  let start = 0; //<> საწყისი ინდექსი
  //// შევამოწმოთ თუ ლინკი იწყება https:-ით
  if (
    url[0] === "h" &&
    url[1] === "t" &&
    url[2] === "t" &&
    url[3] === "p" &&
    url[4] === "s" &&
    url[5] === ":"
  ) {
    start = 8; /// გამოვტოვოთ https:// და გავაგრძელოთ მერვე ინდექსიდან
    //// შევამოწმოთ თუ ლინკი იწყება http:-ით
  } else if (
    url[0] === "h" &&
    url[1] === "t" &&
    url[2] === "t" &&
    url[3] === "p" &&
    url[4] === ":"
  ) {
    start = 7; /// გამოტოვეთ http:// და გავაგრძელოთ მერვე ინდექსიდან
  }
  //! შევამოწმოთ თუ url იწყება www.-ით
  if (
    url[start] === "w" &&
    url[start + 1] === "w" &&
    url[start + 2] === "w" &&
    url[start + 3] === "."
  ) {
    start += 4; //* https:// და http:// შემოწმების და გამოტოვების
    //* შემდეგ მიღებულ სიგრძეს
    //* დავუმატებთ 4ს რომ გამოვდოვოთ www.იც
  }
  let domain = ""; /// ცარიელი სტრინგი საიტის სახელის შესანახად
  for (let i = start; i < url.length; i++) {
    //<> გადავუყვეთ დარჩენილ სიმბოლოებს start-ის ინდექსიდან
    if (url[i] === ".") {
      break; //// შევაჩეროთ loop წერტილის პოვნისას
    }
    domain += url[i]; /// დავამატოთ თითოეული სიმბოლო წერტილამდე
  }
  return domain;
}
console.log(domainName("http://example.com/adjustment"));
