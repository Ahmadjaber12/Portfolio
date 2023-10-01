let nav=document.getElementById('navbar')
let links=document.querySelectorAll("nav a")
let aboutSec=document.getElementById('about').offsetTop
let topbtn=document.querySelector('.top')

window.addEventListener('scroll',()=>{
if(window.scrollY > 50)
   { nav.classList.add('new-bg')
    nav.style.transition='1s'}

else{    nav.classList.remove('new-bg')
    nav.style.transition='1s'}
})

links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
        let currentid=e.target.attributes.href.value
        let sectionname=document.querySelector(currentid).offsetTop
        window.scroll({
            top:sectionname,
            behavior:"smooth"
        })

    })
})
document.querySelector('.top').style.opacity='0'
window.addEventListener('scroll',()=>{
    if(window.scrollY>=aboutSec){
        document.querySelector('.top').style.opacity='1'
        document.querySelector('.top').style.transition='1s'

    }
    else{
        document.querySelector('.top').style.opacity='0'
        document.querySelector('.top').style.transition='1s'

    }
})
topbtn.addEventListener('click',()=>{
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
let body=document.body
body.style.overflow='hidden'
document.querySelector('.loading').style.opacity='1'
document.querySelector('.loading').style.visibility='visible'
document.querySelector('.loading').style.transition='1s'

window.addEventListener('load',function(){
    this.setTimeout(function(){
        document.querySelector('.loading').style.opacity='0'
        document.querySelector('.loading').style.visibility='hidden'
        document.querySelector('.loading').style.transition='1s'
        body.style.overflow='auto'


    },2000)
})
let x={
    age:20,
    name:"ahmad"
}
let {name,age}=x
console.log(name,age);
