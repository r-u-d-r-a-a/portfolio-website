const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    console.log(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            //console.log(toggle)
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link')
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

function confetti()
{
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
}

document.getElementById('confettiButton').addEventListener('click', confetti);

