window.addEventListener("scroll",()=>{
    let navbar =document.querySelector("nav");
    let scrollPosition = document.documentElement.scrollTop;


    if (scrollPosition > 100){
        navbar.classList.add("scrol");
    }else navbar.classList.remove("scrol")
})