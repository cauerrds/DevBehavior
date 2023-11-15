let prefix = ""
let postfix = ""
let infix = ""
let isUnselected = true

document.addEventListener('mouseup', (event) => {
  element = document.activeElement;
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element.isContentEditable) {
    let {selectionStart, selectionEnd} = element;

 if (selectionStart === selectionEnd) return 
  prefix = element.value.substring(0, selectionStart);
  infix = element.value.substring(selectionStart, selectionEnd);
  postfix = element.value.substring(selectionEnd);
 }
});

document.addEventListener('selectionchange', () => {
 element = document.activeElement;

 if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element.isContentEditable) {
 let {selectionStart, selectionEnd} = element;

 if (selectionStart === selectionEnd) return isUnselected = false;
  prefix = element.value.substring(0, selectionStart);
  infix = element.value.substring(selectionStart, selectionEnd);
  postfix = element.value.substring(selectionEnd);

 }
});

document.addEventListener('input', (event) => {
  clearFixs()
});

window.addEventListener("keydown", function (event) {
 let textLength = (prefix + infix + postfix).length
 if (event.key === '{' & textLength > 0) {
   element.value = prefix + '{' + infix + '}' + postfix
   clearFixs()
   event.preventDefault();
 }

 if (event.key === '(' & textLength > 0) {
   element.value = prefix + '(' + infix + ')' + postfix
   clearFixs()
   event.preventDefault();
 }

 if (event.key === "'" & textLength > 0) {
   element.value = prefix + "'" + infix + "'" + postfix
   clearFixs()
   event.preventDefault();
 }

 if (event.key === '"' & textLength > 0) {
   element.value = prefix + '"' + infix + '"' + postfix
   clearFixs()
   event.preventDefault();
 }

 if (event.key === "[" & textLength > 0) {
   element.value = prefix + "[" + infix + "]" + postfix
   clearFixs()
   event.preventDefault();
 }

 if (event.key === 'Dead' && event.code === 'BracketLeft' & textLength > 0) {
   element.value = prefix + "`" + infix + "`" + postfix
   clearFixs()
   event.preventDefault();
 }

 if (event.key === "Backspace") {
        clearFixs()
 }
});

const clearFixs = () => {
  prefix = ""
  infix = ""
  postfix = ""
}
