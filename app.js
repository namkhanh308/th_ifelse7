let khong = document.getElementById("khong")
khong.addEventListener("mouseover",no)
let co = document.getElementById("co")
co.addEventListener("click", yes)
function no(){
    let a = Math.floor(Math.random() * 1280);
    let b = Math.floor(Math.random() * 720);
    khong.style.left = a + "px";
    khong.style.top = b +  "px";
}
function yes(){
    alert("Yes, You are right")
}
