

// === SCRIPT BUAT SIDENAV
function openSideNav() 
{
    document.querySelector(".sidenav").style.width = "125px";
    document.querySelector(".container-banner").style.marginLeft = "125px";
    document.querySelector(".container-slider").style.marginLeft = "125px";
    document.querySelector(".thumbnails-slider").style.marginLeft = "125px";
    document.querySelector(".container-product").style.marginLeft = "125px";
    document.querySelector(".footer").style.marginLeft = "125px";
    // document.querySelector(".container-navbar").style.display = "none";
    document.querySelector(".container-burger-menu").style.display = "none";
    document.querySelector(".container-slider").style.marginTop = "0px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSideNav() 
{
    document.querySelector(".sidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    document.querySelector(".container-banner").style.marginLeft = "0";
    document.querySelector(".container-slider").style.marginLeft = "0";
    document.querySelector(".thumbnails-slider").style.marginLeft = "0";
    document.querySelector(".container-product").style.marginLeft = "0";
    document.querySelector(".footer").style.marginLeft = "0";
    document.querySelector(".container-burger-menu").style.display = "inline-block";
    // document.body.style.backgroundColor = "white";
}



// === SCRIPT BUAT SLIDER

// Buat Nampilin Slide
var slideIndex = 1;
showSlides(slideIndex);

// Fungsi - fungsi nya
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  let sliders = document.getElementsByClassName("slider");
  let thumbnails = document.getElementsByClassName("thumbnail");

  if (n > sliders.length) 
  {
    slideIndex = 1
  }

  if (n < 1) 
  {
    slideIndex = sliders.length
  }

  for (i = 0; i < sliders.length; i++) 
  {
      sliders[i].style.display = "none";  
  }

  for (i = 0; i < thumbnails.length; i++) 
  {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  sliders[slideIndex-1].style.display = "block";  
  thumbnails[slideIndex-1].className += " active";
}


// === SCRIPT BUAT BUTTON FOOTER
let buttonFooter = document.querySelector('.button-footer');

buttonFooter.addEventListener('click', function(){

	//Tangkep element Div nya Content-Footer
	let divContentFooter = document.querySelectorAll('.footer div')[2];

	if (divContentFooter.style.maxHeight)
	{
      divContentFooter.style.maxHeight = null;
    } 

    else {
      divContentFooter.style.maxHeight = divContentFooter.scrollHeight + "px";
      // window.scrollTo(divContentFooter.style.maxHeight);
    } 

})


