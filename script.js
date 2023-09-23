const messageField = document.getElementById("messageField"); //naming the variables the same as the id's, easier to find
const messageBtn = document.getElementById("messageBtn");

//the function of the message button below, for now (when clicked) it just display the value of the input text, that's submitted to the console.log
messageBtn.addEventListener("click", function () {
  console.log(messageField.value);
});
