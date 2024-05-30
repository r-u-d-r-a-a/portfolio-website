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
