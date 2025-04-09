const hamburger = document.getElementById('hamburger');
const menubar = document.getElementById('menubar');
const hamIcon = document.getElementById('ham-icon');
const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); 
  menubar.classList.toggle('ham-active');
  hamIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

document.body.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !menubar.contains(e.target)) {
    menubar.classList.remove('ham-active');
    hamIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}); 
