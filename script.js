
var click_count;


click_count = 0;


document.getElementById('button').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  event.target.innerText = click_count;
  event.target.style.backgroundColor = '#ffff33';
  event.target.style.color = '#ff0000';

});
