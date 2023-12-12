
if(document.querySelector("#imgST")||document.querySelector("#imgCalc")||document.querySelector("#imgTDS"))
{
transformImg(document.querySelector("#imgST"));
transformImg(document.querySelector("#imgCalc"));
transformImg(document.querySelector("#imgTDS"));
}
function transformImg(slide) {
slide.addEventListener("mouseover", function() {
slide.style.transform = "scale(1.1)";
});

slide.addEventListener("mouseout", function() {
slide.style.transform = "scale(1)";
});
}

