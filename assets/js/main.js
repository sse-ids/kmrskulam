document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  // Hero slideshow
  const slides=[...document.querySelectorAll('.slide')],dotsBox=document.querySelector('.slider-dots');let current=0,timer;
  function showSlide(i){if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));if(dotsBox)[...dotsBox.children].forEach((d,n)=>d.classList.toggle('active',n===current));}
  if(slides.length&&dotsBox){slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Go to slide '+(i+1));b.addEventListener('click',()=>{showSlide(i);restart();});dotsBox.appendChild(b);});document.querySelector('.slider-arrow.prev')?.addEventListener('click',()=>{showSlide(current-1);restart();});document.querySelector('.slider-arrow.next')?.addEventListener('click',()=>{showSlide(current+1);restart();});function restart(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),5000);}showSlide(0);restart();}
  // Teacher carousel
  const track=document.getElementById('teacherTrack'),page=document.getElementById('teacherPage');let offset=0;
  function visibleCount(){return window.innerWidth<=420?1:window.innerWidth<=700?2:window.innerWidth<=1000?3:4;}
  function updateTeachers(){if(!track)return;const cards=[...track.children],max=Math.max(0,cards.length-visibleCount());offset=Math.min(offset,max);const card=cards[0];if(card){const gap=18;track.style.transform=`translateX(-${offset*(card.getBoundingClientRect().width+gap)}px)`;}if(page)page.textContent=String(offset+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');}
  document.getElementById('teacherPrev')?.addEventListener('click',()=>{offset=Math.max(0,offset-1);updateTeachers();});document.getElementById('teacherNext')?.addEventListener('click',()=>{const cards=track?.children.length||0;offset=Math.min(Math.max(0,cards-visibleCount()),offset+1);updateTeachers();});window.addEventListener('resize',updateTeachers);updateTeachers();
});