const openham = document.querySelector ('.open-menu');
const closeHam = document.querySelector ('.close-menu');
const items = document.querySelector ('#items');

openham.addEventListener ('click', x => {
  document.getElementById ('close').style.display = 'block';
  document.getElementById ('open').style.display = 'none';
  document.getElementById ('items').style.transform = 'translateX(0%)';
  document.getElementById ('items').style.transition = 'transform 0.6s';
});
closeHam.addEventListener ('click', () => {
  document.getElementById ('open').style.display = 'none';
  document.getElementById ('open').style.display = 'block';
  document.getElementById ('close').style.display = 'none';
  document.getElementById ('items').style.transform = 'translateX(-149%)';
  document.getElementById ('items').style.transition = 'transform 0.6s';
});
