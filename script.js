// document.querySelector("#img").style.transform = "rotate(90deg)"
rotateImg(document.querySelector("#imgST"));
rotateImg(document.querySelector("#imgCalc"));
rotateImg(document.querySelector("#imgTDS"));


function rotateImg(slide) {
slide.addEventListener("mouseover", function() {
slide.style.transform = "scale(1.1)";
});

slide.addEventListener("mouseout", function() {
slide.style.transform = "scale(1)";
});
}

