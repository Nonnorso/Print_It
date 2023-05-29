//******* Mon tableau d'images et de texte correspondants ********/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//******* creer mes constantes *******//
const carouselContainer = document.getElementById('banner');

const carouselImage = carouselContainer.querySelector('.banner-img');

const tagLine = carouselContainer.querySelector('p');

const dotsContainer = carouselContainer.querySelector('.dots');


//******* creation de mes elements dots *******//
slides.forEach((slide, key) => {
	let dot = document.createElement('span')
	dot.classList.add('dot')
	key === 0 ? dot.classList.add('dot_selected') : null
	dotsContainer.appendChild(dot)
});

const dots = dotsContainer.querySelectorAll('.dot');


//******* definition de l'index de depart de mon caroussel *******//
let currentSlide = 0;												


//******* creation des fonctions pour le deroulement du caroussel *******//
//affiche mon slide et configure mon changement d'image, texte et dot en fonction du defilement
//indique un comportement automatique attribuant ou supprimant la classe "dot_selected" selon que l'index auquel est
//rattaché le dot est affiché ou non.

function showSlide(index) {														
	
	carouselImage.src = './assets/images/slideshow/' + slides[index].image;
				
	tagLine.innerHTML = slides[index].tagLine;							
  
	dots.forEach(dot => {
	  dot.classList.remove('dot_selected');								
	});

	dots[index].classList.add('dot_selected');							
  }

//permet de passer à l'image "suivante" de mon caroussel, integre un calcul avec modulo permettant de continuer la boucle infinie

function nextSlide() {	

	currentSlide = (currentSlide + 1) % slides.length;

	showSlide(currentSlide);

  }

//permet d'effectuer un defilement de la meme maniere que la fonction precedente mais dans le sens opposé

function previousSlide() {	

	currentSlide = (currentSlide - 1 + slides.length) % slides.length;

	showSlide(currentSlide);

  }


//******* comportement des fleches *******//
//	Ajout d'event listeners
//Créé une action qui déclenchera le défilement vers l'image précédente lors du clik sur la fleche gauche

const arrowLeft = carouselContainer.querySelector('.arrow_left');

arrowLeft.addEventListener('click', previousSlide);

//Créé une action qui déclenchera le défilement vers l'image suivante lors du clik sur la fleche droite

const arrowRight = carouselContainer.querySelector('.arrow_right');

arrowRight.addEventListener('click', nextSlide);


//******* comportement des dots *******//
//appele chaque dot selon son index, ajoute une fonction permettant d'effectuant le defilement du caroussel au click des dots
//selon l'image à laquelle il est attaché

dots.forEach((dot, index) => {	

	dot.addEventListener('click', () => {

	  currentSlide = index;	

	  showSlide(currentSlide);

	});

  }); 

//appel de la fonction qui permet le caroussel, et lui indique d'afficher l'image actuelle definie par l'index

showSlide(currentSlide);												

