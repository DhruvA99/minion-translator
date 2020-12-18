var textValue = document.querySelector("#text-area");
var URL = "https://api.funtranslations.com/translate/minion.json";

function createURL(text) {
  return URL + "?text=" + text;
}
function changeOutput(text) {
  document.querySelector("#text-output").innerHTML = text;
  return console.log(text);
}

document.querySelector("#btn-translate").addEventListener("click", () => {
  fetch(createURL(textValue.value))
    .then((response) => response.json())
    .then((response) => changeOutput(response.contents.translated))
    .catch((error) => changeOutput(error));
});
