//\ background color mode switcher
let icon = document.getElementById("icon");
//// ვუთითებ თუ რა მოხდება icon-ზე დაკლიკების დროს
icon.onclick = function () {
  //// toggle-ის მეშვეობით dark-theme კლასი ჩაემატებ body
  //// ელემენტში ის თუ არ არსებობს. თუ არსებობს ამოშლის
  document.body.classList.toggle("dark-theme");
  /// ვამოწმებთ რომ dark-theme კლასი არის body ელემენტში
  if (document.body.classList.contains("dark-theme")) {
    /// თუ dark mode აქტიურია მაშინ icon-ის წყარო შეიცვლება
    /// და მომხმარებელი დაინახავს light mode-ის (მზის) სურათს
    icon.src = "images/sun.png";
  } else {
    /// ხოლო თუ light mode-ია აქტიური მაშინ icon-ის წყარო შეიცვლება
    /// და მომხმარებელი დაინახავს dark mode-ის (მთვარის) სურათს
    icon.src = "images/moon.png";
  }
};
// <> first input
//<> მივწვდები პარაგრაფს სადაც ტექსტი უნდა გამოვიდეს
//<> ღილაკზე დაჭერის შემდეგ
displayed = document.getElementById("dispTxt");
function txtAdd() {
  //// მივწვდი I ინფუთს სადაც მომხარებელი შეიყვანს ტექსტს
  textInp = document.getElementById("txtAdder").value;
  //// ინფუთში ჩაწერილი ტექსტი დაემატება უკვე მოცემულ ტექსტს
  displayed.textContent += " " + textInp;
}
/// second input
function colorChange() {
  /// მივწვდი იმ input-ის მნიშვნელობას (colChange)
  colInput = document.getElementById("colChange").value;
  //// ტექსტს ვუცვლი ფერს მომხმარებლის მიერ შემოტანილი ფერით
  displayed.style.color = colInput;
}
//// third input
function sizeChange() {
  //* ვწვდები input-ის მნიშვნელობას (fontSizer)
  fontSizing = document.getElementById("fontSizer").value;
  //* ვუცვლი ტექსტს ზომას user-ის მიერ შემოტანილი რიცხვით
  displayed.style.fontSize = fontSizing;
}
