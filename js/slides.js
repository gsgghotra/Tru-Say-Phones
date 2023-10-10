//Function for slides on home page
//Validation by Gurjeet Singh
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Show and hide divs on mobiles pages for different network deals.
function showmobile1(target){
document.getElementById("samsung1n_1").style.display = 'none';
document.getElementById("samsung1n_2").style.display = 'none';
document.getElementById("samsung1n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}
function showmobile2(target){
document.getElementById("samsung2n_1").style.display = 'none';
document.getElementById("samsung2n_2").style.display = 'none';
document.getElementById("samsung2n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}
function showmobile3(target){
document.getElementById("samsung3n_1").style.display = 'none';
document.getElementById("samsung3n_2").style.display = 'none';
document.getElementById("samsung3n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}