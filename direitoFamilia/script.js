AOS.init()

document.querySelectorAll(".button-accordion").forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.parentElement.classList.toggle("open");
    })
    
})