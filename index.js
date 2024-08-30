// offer bar
var offerBar = document.getElementById("offer-bar")

document.getElementById("offer-close").addEventListener("click",function(){
    offerBar.style.display="none"
}
)


// selecting side-navbar, menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function()
{
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

//Image slider
currentSlide = 1;
slider = document.getElementById("slider")
totalSlides = slider.childElementCount;
console.log(totalSlides)
function next()
{
    if(currentSlide<totalSlides){
        currentSlide++
        showSlide()
    }
}

function previous()
{
    if(currentSlide>1){
        currentSlide--
        showSlide()
    }
}

function showSlide(){
    slides = document.getElementById("slider").getElementsByTagName("img")
    for(let index = 0; index < totalSlides; index++){
        const element = slides[index];
        if(currentSlide===index+1){
            element.classList.remove('hidden')
        }
        else
        {
            element.classList.add('hidden')
        }
    }

}

