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

