const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");
const radio3 = document.querySelector(".radio3");
const radiobutton = document.querySelector("#registration button");

console.log(radio1);
console.log(radio2);
console.log(radio3);
console.log(radiobutton);

radiobutton.addEventListener("click", () => {
    if (radio1.checked) {
        location.href = "./member-1.html";
    }
    else if (radio2.checked) {
        location.href = "./member-2.html";
    }
    else if (radio3.checked) {
        location.href = "./member-3.html"
    }
})