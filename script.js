let body = document.body;
let toggle = document.querySelector('.toggle');
let navBar = document.querySelector("nav");
let name = document.querySelector('.name');
let favIcon = document.querySelector(".favicon");
let infoContainer = document.querySelector(".info_container");
let darkIcon = document.getElementById('dark_icon');
let lightIcon = document.getElementById('light_icon');
let darkToggle = document.getElementById("dark_toggle");
let lightToggle = document.getElementById("light_toggle");
let storedTheme = localStorage.getItem('theme');
let isSystemModeDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

let rotation=0;
let setTheme = (theme) => {
   if (theme === 'dark'){
       body.classList.remove("light")
       body.classList.add("dark")
       darkIcon.classList.remove('hide');
       lightIcon.classList.add('hide');
       darkToggle.classList.remove('hide');
       lightToggle.classList.add("hide");
    } else{
        body.classList.remove("dark")
        body.classList.add("light")
        darkIcon.classList.add('hide');
        lightIcon.classList.remove('hide');
        darkToggle.classList.add('hide');
        lightToggle.classList.remove("hide");
    }
    rotation += 360;
    toggle.style.transform = `rotate(${rotation}deg)`;
}

if (storedTheme){
    setTheme(storedTheme);
} else if(isSystemModeDark){
    setTheme('dark');
} else {
    setTheme('light');
}

favIcon.addEventListener('click', () => {
    let newTheme=body.classList.contains('dark') ? 'light' : 'dark' ;
    setTheme(newTheme);
    localStorage.setItem('theme' , newTheme) ;
});

toggle.addEventListener('click' , () => {
    let newTheme=body.classList.contains('dark') ? 'light' : 'dark' ;
    setTheme(newTheme);
    localStorage.setItem('theme' , newTheme);
});

let object;

let callBack= (entries) => {
    if (!(entries[0].isIntersecting)){
        navBar.style.transform='translateY(0%)';
        }else{
        navBar.style.transform='translateY(-100%)'}
}

let obj= new IntersectionObserver(callBack,object);
obj.observe(infoContainer);

let label=document.querySelectorAll('.label');
let sign=document.querySelectorAll('.sign')
let content=document.querySelectorAll(".content");
let title=document.querySelectorAll(".title")
let border=document.querySelectorAll(".border")
label.forEach((ele,idx) =>{
    ele.addEventListener("click", ()=>{
    if(sign[idx].innerText==='+'){
        content[idx].style.maxHeight=content[idx].scrollHeight+"px";
        sign[idx].innerText='-';
        border[idx].classList.add('cent');
   }else {content[idx].style.maxHeight='0px';
    border[idx].classList.remove('cent');
        sign[idx].innerText='+';
    }})
})


let booksSolutions=document.querySelector(".Books_Solutions");
booksSolutions.addEventListener("click",scrollToTop);
function scrollToTop(){
    function step(){
        window.scrollBy(0,-30);
        if(window.scrollY>0){ requestAnimationFrame(step)}
    } requestAnimationFrame(step)
};
