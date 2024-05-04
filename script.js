function myMenu() {
    document.getElementById('mymenu').classList.toggle('open');
    document.getElementById('menuButton').classList.toggle('close');

  }
  
  function closeMenu() {
    document.getElementById('mymenu').classList.remove('open');
    document.getElementById('menuButton').classList.remove('close');
  }

  function darkMode() {

    /*const cardDark = document.querySelectorAll('.card')*/

    document.getElementsByTagName('body')[0].classList.toggle('body_darkMode');
    document.getElementsByClassName('darkButton')[0].classList.toggle('lightButton');
    document.getElementsByClassName('mobil-menu-interior')[0].classList.toggle('mobil-interior-dark');
    document.getElementsByClassName('title_text')[0].classList.toggle('title_dark');
    document.getElementsByClassName('sub_text')[0].classList.toggle('sub_dark');
    document.getElementsByClassName('headline_text')[0].classList.toggle('darkHeadline');
    document.getElementsByClassName('headline_text')[1].classList.toggle('darkHeadline');
    document.getElementsByClassName('headline_text')[2].classList.toggle('darkHeadline');
    document.getElementsByClassName('headline_text')[3].classList.toggle('darkHeadline');
    document.getElementsByClassName('paragraph_box')[0].classList.toggle('pBox_dark');
    document.getElementsByClassName('paragraph_box')[1].classList.toggle('pBox_dark');
    document.getElementsByClassName('paragraph_text')[0].classList.toggle('text_dark');
    document.getElementsByClassName('skill_sub')[0].classList.toggle('skill_dark');
    document.getElementsByClassName('skill_sub')[1].classList.toggle('skill_dark');
    document.getElementsByClassName('skill_list')[0].classList.toggle('list_dark');
    document.getElementsByClassName('skill_list')[1].classList.toggle('list_dark');
    document.getElementsByClassName('faq_border')[0].classList.toggle('faqBorder_dark');
    document.getElementsByClassName('faq_border')[1].classList.toggle('faqBorder_dark');
    document.getElementsByClassName('faq_border')[2].classList.toggle('faqBorder_dark');
    document.getElementsByClassName('faq_border')[3].classList.toggle('faqBorder_dark');
    document.getElementsByClassName('dropdown')[0].classList.toggle('dropdown_dark');
    document.getElementsByClassName('dropdown')[1].classList.toggle('dropdown_dark');
    document.getElementsByClassName('dropdown')[2].classList.toggle('dropdown_dark');
    document.getElementsByClassName('dropdown')[3].classList.toggle('dropdown_dark');
    document.getElementsByClassName('dropdown_text')[0].classList.toggle('dropText_dark');
    document.getElementsByClassName('dropdown_text')[1].classList.toggle('dropText_dark');
    document.getElementsByClassName('dropdown_text')[2].classList.toggle('dropText_dark');
    document.getElementsByClassName('dropdown_text')[3].classList.toggle('dropText_dark');
    /*document.getElementsByClassName('img_border')[0].classList.toggle('imgBorder_dark');*/
  

  }
  /*
  const faqToggle = document.querySelectorAll('.faq_toggle')

  for (let i = 0; i < faqToggle.length; i++) {
    faqToggle[i].addEventListener("click", function() { this.classList.toggle('faq-open') })
  }

  function faqReveal() {
    document.getElementsByClassName('faq_toggle').classList.toggle('faq-open')
  } */

  (function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('pop_in');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

var a = document.getElementsByTagName("a");
var cfImg = document.getElementsByClassName("coverflow__image")

var scaleI = 0;
for (scaleI; scaleI < a.length; scaleI++) {
  if (scaleI === 3) {
    continue;
  } else {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
}

function prevDef(e) {
  e.preventDefault();
}

function forScale(coverflowPos) {
  for (scaleI = 0; scaleI < a.length; scaleI++) {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
  for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
    if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
      cfImg[scaleI].parentElement.style.cursor = "pointer";
      cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
    }
  }
}
//end added by Chase

function setupCoverflow(coverflowContainer) {
  var coverflowContainers;

  if (typeof coverflowContainer !== "undefined") {
    if (Array.isArray(coverflowContainer)) {
      coverflowContainers = coverflowContainer;
    } else {
      coverflowContainers = [coverflowContainer];
    }
  } else {
    coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
  }

  coverflowContainers.forEach(function(containerElement) {
    var coverflow = {};
    var prevArrows, nextArrows;

    //capture coverflow elements
    coverflow.container = containerElement;
    coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
    coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

    //set indicies on images
    coverflow.images.forEach(function(coverflowImage, i) {
      coverflowImage.dataset.coverflowIndex = i + 1;
    });

    //set initial position
    coverflow.container.dataset.coverflowPosition = coverflow.position;

    //get prev/next arrows
    prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
    nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

    //add event handlers
    function setPrevImage() {
      coverflow.position = Math.max(1, coverflow.position - 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      //call the functin forScale added
      forScale(coverflow.position);
    }

    function setNextImage() {
      coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      //call the function Chase added
      forScale(coverflow.position);
    }

    function jumpToImage(evt) {
      coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      //start added by Chase
      setTimeout(function() {
        forScale(coverflow.position);
      }, 1);
      //end added by Chase
    }

    function onKeyPress(evt) {
      switch (evt.which) {
        case 37: //left arrow
          setPrevImage();
          break;
        case 39: //right arrow
          setNextImage();
          break;
      }
    }
    prevArrows.forEach(function(prevArrow) {
      prevArrow.addEventListener('click', setPrevImage);
    });
    nextArrows.forEach(function(nextArrow) {
      nextArrow.addEventListener('click', setNextImage);
    });
    coverflow.images.forEach(function(image) {
      image.addEventListener('click', jumpToImage);
    });
    window.addEventListener('keyup', onKeyPress);
  });
}

setupCoverflow();

