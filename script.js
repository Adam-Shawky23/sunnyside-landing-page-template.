const ham = document.getElementById("ham")
const sec = document.getElementById("sec")

ham.addEventListener("click", ()=>{
    ham.style.display = "none"
    sec.style.display = "block"
})
sec.addEventListener("click", ()=>{
    sec.style.display = "none"
    ham.style.display = "block"
})
