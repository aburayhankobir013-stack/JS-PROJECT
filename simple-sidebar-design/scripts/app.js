const hamburgerBtn=document.querySelector('.hamburger-btn');
const crossBtn=document.querySelector('.cross-icon button');
const sideBar=document.querySelector('.sidebar-section');

hamburgerBtn.addEventListener('click',function(){
  sideBar.classList.remove('sidebar-section-hidden');
},false);

crossBtn.addEventListener('click',function(){
  sideBar.classList.add('sidebar-section-hidden');
},false);