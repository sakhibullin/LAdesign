window.onload = function(){
  function toggleEl(el) {
    if (el.style.display !== 'none') {
      el.style.display = 'none';
  }
  else {
      el.style.display = 'block';
  }
}


// function runOnScroll() {
//   if (window.pageYOffset > 107) {
//       let scroll = document.querySelectorAll('.scroll-header')[0];
//       scroll.classList.add('scroll');
//     }
//   else{
//     let scroll = document.querySelectorAll('.scroll-header')[0];
//     scroll.classList.remove('scroll');
//   }
// }; 

// window.addEventListener("scroll", runOnScroll);


// for(let i = 0;i<5;i++){
//   document.querySelectorAll('.inform')[i].addEventListener('click',function(n){
//     if (document.querySelectorAll('.info__block')[i].style.display == 'none'){
//       for(let j = 0;j<5;j++){
//               document.querySelectorAll('.info__block')[j].style.display = 'none';
//               document.querySelectorAll('.arrow')[j].classList.remove('arrow__active');
//             }
//             toggleEl(document.querySelectorAll('.info__block')[i]);
//             document.querySelectorAll('.arrow')[i].classList.toggle('arrow__active');
          
//     }else{
//       toggleEl(document.querySelectorAll('.info__block')[i]);
//       document.querySelectorAll('.arrow')[i].classList.toggle('arrow__active');
//     }
//       });
// }
    

// for (let i = 0;i<4;i++){
//   let buttonList = document.querySelectorAll('.portfolio__chose');
//   buttonList[i].addEventListener('click',function(){
//     for (let j = 0;j<4;j++){
//       buttonList[j].classList.remove('active');
//     }
//     buttonList[i].classList.add('active');
//   });
// }

// let more = document.querySelectorAll('.more')[0]
// more.addEventListener('click',function(){
//   for (let i = 10;i<17;i++){
//     toggleEl(document.querySelectorAll('.grid__item')[i]);
//     document.querySelectorAll('.grid__item')[i].classList.add('animate__animated');
//     document.querySelectorAll('.grid__item')[i].classList.add('animate__fadeInUp');
//   }
//   more.style.display = 'none'
// })

// for(let i = 0;i<4;i++){
//   document.querySelectorAll('.portfolio__chose')[i].addEventListener('click',function(){
//     for(let j =  0;j<17;j++){
//       document.querySelectorAll('.grid__item')[j].style.display = 'none';
//     } 
//     document.querySelectorAll('.more')[0].style.display = 'none';

//     if (i === 0){
//       for(let j =  0;j<17;j++){
//           document.querySelectorAll('.grid__item')[j].style.display = 'block';
//           console.log(i)

//       }
//         }else if(i===1){
//       for(let j = 0;j<8;j++){
//         document.querySelectorAll('.kv')[j].style.display = 'block'
//         console.log(i)
//       }
//     }else if(i===2){
//       console.log(i)

//       for(let j = 0;j<7;j++) {
//         document.querySelectorAll('.home')[j].style.display = 'block'
//       }
//     }else if(i===3){
//       console.log(i)

//       for(let j = 0;j<2;j++) {
//         document.querySelectorAll('.com')[j].style.display = 'block'
//         console.log(i);
//       }
//     }
//   })
// }

document.querySelectorAll('.request__acivate')[0].addEventListener('click',function(){
  toggleEl(document.querySelectorAll('.request__menu')[0])
})

document.querySelectorAll('.close__button')[0].addEventListener('click',function(){
  toggleEl(document.querySelectorAll('.request__menu')[0])
})

document.querySelectorAll('.accept button')[0].addEventListener('click',function(){
  toggleEl(document.querySelectorAll('.request__menu')[1])
  toggleEl(document.querySelectorAll('.request__menu')[0])
})

document.querySelectorAll('.close__button__accepted')[0].addEventListener('click',function(){
  toggleEl(document.querySelectorAll('.request__menu')[1])
})

document.querySelectorAll('.logo')[0].addEventListener('click',() => {window.location.href = 'index.html'})

document.querySelectorAll('.burger')[0].addEventListener('click',function(){
  document.querySelectorAll('header .menu')[0].style.display = (document.querySelectorAll('header .menu')[0].style.display == 'none' || document.querySelectorAll('header .menu')[0].style.display == '' ) ? 'grid' : 'none';
  document.querySelectorAll('.logo img')[0].classList.toggle('no-filter')
  document.querySelectorAll('.phone img ')[0].classList.toggle('no-filter')
  document.querySelectorAll('.phone p ')[0].classList.toggle('no-filter')
  document.querySelectorAll('.burger img')[0].classList.toggle('no-filter')
  document.querySelectorAll('.burger img')[1].classList.toggle('no-filter')
  toggleEl(document.querySelectorAll('.burger img')[0])
  toggleEl(document.querySelectorAll('.burger img')[1])
  document.querySelectorAll('.scroll-header')[0].classList.toggle('fixed')
  document.querySelectorAll('.menu')[0].classList.toggle('none')
})

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   // direction: 'horizontal',
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0
//     },
//     // when window width is >= 480px
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     1251: {
//       slidesPerView: 4,
//       spaceBetween: 30,
      
//     }
//   },

//   slidesPerView: 4,
//   loop: true,
//   speed: 400,
//   spaceBetween: 30,
//   allowTouchMove:true,
//   autoplay: {
//     delay: 5000,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     dragSize:158,
//   },
//   });

// }





