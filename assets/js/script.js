document.addEventListener('DOMContentLoaded', ()=>{
  let carousel_nav_left = document.querySelector('.carousel-nav-left');
  let carousel_nav_right = document.querySelector('.carousel-nav-right');
  let carousel = document.querySelector('.carousel');

  let carousel_nav_left2 = document.querySelector('.carousel-nav-left2');
  let carousel_nav_right2 = document.querySelector('.carousel-nav-right2');
  let carousel2 = document.querySelector('.carousel2');


  carousel_nav_left.addEventListener('click', (e)=>{
    let slider = parseInt(carousel.style.left) || 0;
    carousel.style.left = (slider - 135) + 'px';
    console.log('to left');
  });

  carousel_nav_right.addEventListener('click', (e)=>{
    let slider = parseInt(carousel.style.left) || 0;
    carousel.style.left = (slider + 135) + 'px';
    console.log('to right');
  });

  carousel_nav_left2.addEventListener('click', (e)=>{
    let slider = parseInt(carousel2.style.left) || 0;
    carousel2.style.left = (slider - 135) + 'px';
    console.log('to left');
  });

  carousel_nav_right2.addEventListener('click', (e)=>{
    let slider = parseInt(carousel2.style.left) || 0;
    carousel2.style.left = (slider + 135) + 'px';
    console.log('to right');
  });
});
