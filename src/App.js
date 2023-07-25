window.addEventListener("scroll",()=>{
    let navbar =document.querySelector("nav");
    let scrollPosition = document.documentElement.scrollTop;


    if (scrollPosition > 100){
        navbar.classList.add("scrol");
    }else navbar.classList.remove("scrol")
})
// sidebar
let times = document.querySelector(".times");
let show =  document.querySelector(".show");
let hamburger =  document.querySelector(".hamburger");
let myLinks = document.querySelectorAll(".loop-links")


times.addEventListener("click",function(){
    show.classList.toggle("active")
    setTimeout(()=>{
        hamburger.style.display = "block"
    },100)
})

hamburger.addEventListener("click",function(){
    show.classList.toggle("active")
    hamburger.style.display = "none"
   
})



myLinks.forEach((items)=>{
    let myHeader =items.querySelector(".link-sign")
    let myAccordion = items.querySelector(".accordion");
    let accordionContent = items.querySelector(".accordion-content")
    myHeader.addEventListener("click",()=>{
        accordionContent.classList.toggle("active")
        myAccordion.classList.toggle("active")
    })
})
