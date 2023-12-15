function focusCursorOnInput(inputId) {
  document.getElementById(inputId).focus();
}

function setInputValueToEmptyString(inputId) {
  document.getElementById(inputId).value = "";
}

export function toggleInputBox(inputContainerId, inputElementId) {
  const inputContainerElement = document.getElementById(inputContainerId);
  inputContainerElement.style.display =
    inputContainerElement.style.display === "block" ? "none" : "block";

  if (inputContainerElement.style.display === "block") {
    focusCursorOnInput(inputElementId);
  } else {
    setInputValueToEmptyString(inputElementId);
  }
}

export function toggleAddButton(addButtonId) {
  const addButtonElement = document.getElementById(addButtonId);
  addButtonElement.style.display =
    addButtonElement.style.display === "none" ? "block" : "none";
}
