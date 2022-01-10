let accItem = document.getElementsByClassName('accordion__item');
for (var i = 0; i < accItem.length; i++) {
  accItem[i].className = 'accordion__item close';
}
let accTrigger = document.getElementsByClassName('accordion__button');
for (let i = 0; i < accTrigger.length; i++) {
  accTrigger[i].addEventListener('click', accToggle, false);
}
let accContent = document.querySelector('.accordion__collapse');

function accToggle() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordion__item close';
  }
  if (itemClass == 'accordion__item close') {
    this.parentNode.className = 'accordion__item open';
  }
}