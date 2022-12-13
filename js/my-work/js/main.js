var theImages = Array.from(document.querySelectorAll('.slider-container img'));
console.table(theImages)

var currentSlider = 1;

var countSlider =  theImages.length;
var sliderNumber = document.getElementById('slider-number')


var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');


// handel the buttons
nextButton.onclick = nextSlider;
prevButton.onclick = prevSlider;



var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for(var i = 1; i <= countSlider; i++){
	var paginationItem = document.createElement('li');
	paginationItem.setAttribute('data-index', i);
	paginationItem.appendChild(document.createTextNode(i))
	paginationElement.appendChild(paginationItem)
}
document.getElementById('indicators').appendChild(paginationElement)
paginationCreated = document.getElementById('pagination-ul')
paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
for(var i= 0; i< paginationBullets.length; i++){
	paginationBullets[i].onclick = function(){
		currentSlider = parseInt(this.getAttribute('data-index'));
		theChecker();
	}
}

theChecker();


function nextSlider(){
	if(nextButton.classList.contains('disabled')){
		return false
	}else{
		currentSlider++
		theChecker();
	}
}

function prevSlider(){
		if(prevButton.classList.contains('disabled')){
		return false
	}else{
		currentSlider--
		theChecker();
	}
}



function theChecker(){
	removeAllActive();
	
	theImages[currentSlider -1].classList.add('active');
	paginationCreated.children[currentSlider -1].classList.add('active');
	
	
	sliderNumber.textContent = 'Slider##'+ currentSlider+'of' +countSlider;
	if(currentSlider == 1){
		prevButton.classList.add('disabled')
	}else{
		prevButton.classList.remove('disabled')
	}
	
		if(currentSlider == countSlider){
		nextButton.classList.add('disabled')
	}else{
		nextButton.classList.remove('disabled')
	}
	
}


function removeAllActive(){
	theImages.forEach(function (img){
	img.classList.remove('active')
	});
	
	paginationBullets.forEach(function (bullet){
	bullet.classList.remove('active')
	});
}











