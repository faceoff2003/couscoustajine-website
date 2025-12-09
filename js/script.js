// je recupere la navbar et le bouton du menu dans le html
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

// qd je clique sur le bouton menu
menuBtn.onclick = () =>{
   // j change l’icone (burger <-> croix) en ajoutant/enlevant la class fa-times
   menuBtn.classList.toggle('fa-times');
   // j’ouvre / j ferme la navbar en ajoutant/enlevant la class active
   navbar.classList.toggle('active');
};

// qd je scroll la page
window.onscroll = () =>{
   // je remet le bouton dans son état normal (sans la croix)
   menuBtn.classList.remove('fa-times');
   // je ferme le menu si il était ouvert
   navbar.classList.remove('active');
};

// --------------------- SLIDER HOME ---------------------

// ici je crée le slider principal sur la section .home-slider
var swiper = new Swiper(".home-slider", {
   // curseur en forme de main qd on passe dessus
   grabCursor:true,
   // les slides tournent en boucle
   loop:true,
   // la slide active reste bien au centre
   centeredSlides:true,
   // btn suivant / précédent
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

// --------------------- SLIDER FOOD ---------------------

// slider pr la partie des plats (.food-slider)
var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   // espace entre chq slide
   spaceBetween: 20,
   // petits points de pagination en dessous du slider
   pagination: {
      el: ".swiper-pagination",
      clickable: true, // on pt cliquer sur les points
   },
   // config responsive selon la taille de l'écran
   breakpoints: {
      0: {
        slidesPerView: 1,   // sr ptt écran: 1 slide visible
      },
      700: {
        slidesPerView: 2,   // a partir de 700px: 2 slides
      },
      1000: {
        slidesPerView: 3,   // a partir de 1000px: 3 slides
      },
   },
});

// --------------------- PREVIEW FOOD (PPUP) ---------------------

// container général qui contient toutes les previews des plats
let previewContainer = document.querySelector('.food-preview-container');
// toutes les box de preview individuelles
let previewBox = previewContainer.querySelectorAll('.food-preview');

// pr chq slide ds la section .food
document.querySelectorAll('.food .slide').forEach(food =>{
   // qd je clique sur un plat
   food.onclick = () =>{
      // j'affiche la popup (flex pour centrer)
      previewContainer.style.display = 'flex';
      // je récupère la valeur de data-name du plat sur lequel j'ai cliqué
      let name = food.getAttribute('data-name');
      // je parcours toutes les box de preview
      previewBox.forEach(preveiw =>{
         // je récupère leur data-target
         let target = preveiw.getAttribute('data-target');
         // si le data-name du plat == data-target de la preview
         if(name == target){
            // j'active seulement cette preview là
            preveiw.classList.add('active');
         }
      });
   };
});

// bouton pour fermer la popup
previewContainer.querySelector('#close-preview').onclick = () =>{
   // j cache la popup complète
   previewContainer.style.display = 'none';
   // j enlève la class active
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};

// --------------------- SLIDER MENU ---------------------

// slider pr la section du menu (.menu-slider)
var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   // la hauteur du slider s'adapte auto
   autoHeight:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

// --------------------- SLIDER BLOGS ---------------------

// slider pour la section des blogs (.blogs-slider)
var swiper = new Swiper(".blogs-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true, // hauteur auto selon le txte de l article
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   // responsive comme pour la partie food
   breakpoints: {
      0: {
        slidesPerView: 1,   // sur mobile: 1 article / slide
      },
      700: {
        slidesPerView: 2,   // tablette: 2 articles
      },
      1000: {
        slidesPerView: 3,   // pc: 3 articles
      },
   },
});
