document.addEventListener('DOMContentLoaded', () => {
  let carousel_nav_left = document.querySelector('.carousel-nav-left');
  let carousel_nav_right = document.querySelector('.carousel-nav-right');
  let carousel = document.querySelector('.carousel');

  let carousel_nav_left2 = document.querySelector('.carousel-nav-left2');
  let carousel_nav_right2 = document.querySelector('.carousel-nav-right2');
  let carousel2 = document.querySelector('.carousel2');

  carousel_nav_left.addEventListener('click', (e) => {
    let slider = parseInt(carousel.style.left) || 0;
    if (slider < 0) {
      carousel.style.left = (slider + 135) + 'px';
    }
  });

  carousel_nav_right.addEventListener('click', (e) => {
    let slider = parseInt(carousel.style.left) || 0;
    if (slider > carousel.childElementCount * -135 / 1.8) {
      carousel.style.left = (slider - 135) + 'px';
    } else {
      carousel.style.left = 0;
    }
  });

  carousel_nav_left2.addEventListener('click', (e) => {
    let slider = parseInt(carousel2.style.left) || 0;
    if (slider < 0) {
      carousel2.style.left = (slider + 135) + 'px';
    }
  });

  carousel_nav_right2.addEventListener('click', (e) => {
    let slider = parseInt(carousel2.style.left) || 0;
    if (slider > carousel2.childElementCount * -135 / 1.8) {
      carousel2.style.left = (slider - 135) + 'px';
    } else {
      carousel2.style.left = 0;
    }
  });

  let see_more = document.querySelector('.see-more');
  let nodes = document.querySelectorAll('.carousel .hide')
  see_more.addEventListener('click', (e) => {
    nodes.forEach((node) => {
      node.classList.toggle('hide');
    })
    if(see_more.innerText == "See More") {
      see_more.innerText = "See Less";
    }else {
      see_more.innerText == "See More";
    }
  });

  let see_more2 = document.querySelector('.see-more2');
  let nodes2 = document.querySelectorAll('.carousel2 .hide')
  see_more2.addEventListener('click', (e) => {
    nodes2.forEach((node) => {
      node.classList.toggle('hide');
    })
    if(see_more2.innerText == "See More") {
      see_more2.innerText = "See Less";
    }else {
      see_more2.innerText == "See More";
    }
  });
});
