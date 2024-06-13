
//CHECK FUNCTION
const items = document.querySelectorAll(".item")

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
});


// SLICK CAROUSEL FUNCTION
$(document).ready(function(){
    $('.slick-carousel').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });
});


// COOKIES FUNCTION
const cookieBox = document.querySelector(".cookie-container");
acceptBtn = cookieBox.querySelector(".cookie-btn button");

acceptBtn.onclick = ()=> {
    console.log("Button clicked!!");
    cookieBox.classList.add("hide");
}