
function handleMouseEnter(){
  this.classList.add('sCard-hovered');
  document.body.id = `${this.id}-hovered`
}

function handleMouseLeave(){
  this.classList.remove('sCard-hovered')
  document.body.id = ''
}

function addEventListenersToCards(){
  const cardElements = document.getElementsByClassName('sCard');
  
  for(let i = 0; i < cardElements.length; i++){
    const card = cardElements[i];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards(), false)

function selectCarouselItem(selectedButtonElement){
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.sCards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;
  
  const activeButtonElement = document.querySelector('.sController-button--active');
  activeButtonElement.classList.remove('sController-button--active');
  selectedButtonElement.classList.add('sController-button--active')

}
