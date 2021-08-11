// to make dropdown menu
const toggle = document.querySelector('.menu')
const navigation = document.querySelector('.collapse')

toggle.addEventListener('click', () => {
toggle.classList.toggle('active')
navigation.classList.toggle('active')
})
// to preview product
function upDate(previewPic){
    var x = previewPic.src;
    document.getElementById('image').setAttribute("src", x);
}
// loginForm
var loginForm = document.getElementById("logForm");
var regForm = document.getElementById("regForm");
var indicator = document.querySelector(":root");
function login(){
    loginForm.style.transform = "translateX(300px)";
    regForm.style.transform = "translateX(300px)";
    indicator.style.setProperty("--position", '-130px');
}
function register(){
    loginForm.style.transform = "translateX(0)";
    regForm.style.transform = "translateX(0)"
    indicator.style.setProperty("--position", '0');
}