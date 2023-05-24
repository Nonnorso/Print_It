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

slides.forEach((slide, key) => {
	let dot = document.createElement('span')
	dot.classList.add('dot')
	key === 0 ? dot.classList.add('dot_selected') : null
	dotsContainer.appendChild(dot)
});

const dots = dotsContainer.querySelectorAll('.dot');


//******* appeller le commencement de mon caroussel *******//
let currentSlide = 0;													// definit l'index de depart de la fonction appellée pour le caroussel


//******* creation des fonctions pour le deroulement du caroussel *******//
function showSlide(index) {												//affiche mon slide
	carouselImage.src = './assets/images/slideshow/' + slides[index].image;//affiche l'image selectionnée par l'inex appelé avec la fonction display 'block'
				
	tagLine.innerHTML = slides[index].tagLine;							//affiche l'objet "p" correspondant à l'index et lui donne la propriété innerHTML pour acceder au contenu du "p" selectionné par l'index
  
	dots.forEach(dot => {
	  dot.classList.remove('dot_selected');								//Parcours tous les elements dots et supprime la classe dot_selected
	});
	dots[index].classList.add('dot_selected');							// affiche la classe 'dot-selected' au dot correspondant à l'image en cours d'affichage
  }
  
function nextSlide() {													//permet de passer à l'image "suivante" de mon caroussel
	currentSlide = (currentSlide + 1) % slides.length;  				//calcul permettant de determiner le nombre d'images dans le slide et de revenir à la premiere image lorsque la derniere est atteinte
	showSlide(currentSlide);											//appelle l'image suivant à s'afficher
  }
  
function previousSlide() {												//fonctionne de la meme maniere que nextSlide avec un defilement inversé en affichant les images precedentes et non suivantes
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
  }


//******* comportement des fleches *******//
const arrowLeft = carouselContainer.querySelector('.arrow_left');		//Créé une action qui déclenchera le défilement vers l'image précédente lors du clik sur la fleche gauche
arrowLeft.addEventListener('click', previousSlide);

const arrowRight = carouselContainer.querySelector('.arrow_right');		//Créé une action qui déclenchera le défilement vers l'image suivante lors du clik sur la fleche droite
arrowRight.addEventListener('click', nextSlide);


//******* comportement des dots *******//
dots.forEach((dot, index) => {											//appele chaque dot selon son index
	dot.addEventListener('click', () => {								//créé un evenement au clik sur les dot, une fonction qui fera defiler les images selon la selection det dot et leur index correspondant dans le tableau du slide
	  currentSlide = index;												//determine quelle image doit etre affichée en fonction de l'index correspondant
	  showSlide(currentSlide);											// affiche l'image selectionné par le click sur le dot 
	});
  }); 

showSlide(currentSlide);												//appel de la fonction qui permet le racoussel, et lui indique d'afficher l'image actuelle definie par l'index

