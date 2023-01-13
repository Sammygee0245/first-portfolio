// refrencing the responsive navigation elements
let shownav = false
let hamburger = document.querySelector("#hamburger")

let profile2 = document.querySelector("#profile-2")

let resNav = document.querySelector(".res-nav")

let ul = document.querySelector(".unordered-list-2")

// Adding eventListiner to listin to a click event
hamburger.addEventListener("click",()=>{
   if(!shownav){
    resNav.style.display = "flex"
    shownav = true
   }else{
    resNav.style.display = "none"
    shownav = false
   }
})

ul.addEventListener("click",()=>{
   resNav.style.display = "none"
   shownav = false
})