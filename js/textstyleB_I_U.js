// function getInputField(textInputId) {
//   const inputFieldvalue = document.getElementById(textInputId).innerHTML;
//   return inputFieldvalue;
// }

var textarea = document.getElementById("textArea");

//Text Bold Italic Underline
// make text bold
document.getElementById("boldText").addEventListener("click", function () {
  textarea.classList.toggle("bold");
});

//make text ittalick
document.getElementById("italicText").addEventListener("click", function () {
  textarea.classList.toggle("italic");
});

//make text Underline
document.getElementById("underlineText").addEventListener("click", function () {
  textarea.classList.toggle("underline");
});

// Text Alignment issues

//Text Left
document.getElementById("alignLeft").addEventListener("click", function () {
  textarea.classList.toggle("left");
});

//Text Center
document.getElementById("alignMiddle").addEventListener("click", function () {
  textarea.classList.toggle("center");
});

//Text Right
document.getElementById("alignRight").addEventListener("click", function () {
  textarea.classList.toggle("right");
});

//Text Justify
document.getElementById("alignJustify").addEventListener("click", function () {
  textarea.classList.toggle("justify");
});

// Text Size change
document.getElementById("fontSize").addEventListener("input", function () {
  var fontSizer = document.getElementById("fontSize");
  textarea.style.fontSize = fontSizer.value + "px";
});

//Text uppercase and lowercase
document.getElementById("capitalSmall").addEventListener("click", function () {
  textarea.classList.toggle("uppercase");
});

//Text Color
document.getElementById("colorpicker").addEventListener("input", function () {
  var colorValue = document.getElementById("colorpicker");
  textarea.style.color = colorValue.value;
});
