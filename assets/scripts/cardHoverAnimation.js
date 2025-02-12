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