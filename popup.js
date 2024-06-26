console.log("this is a popup!")
var element = document.querySelector('.title-content-title');
console.log(element)
element.forEach(function(value, index) {
    console.log(value.textContent);
});