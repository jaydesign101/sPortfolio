const headerItem = document.querySelector("header");
const homeSection = document.querySelector("section.home");
let homeSectionHeight = homeSection.offsetHeight;

window.addEventListener('resize', function(){
  homeSectionHeight = homeSection.offsetHeight;
})

window.addEventListener('scroll', function(){
  if(this.window.scrollY > homeSectionHeight/3){
    headerItem.style.backgroundColor = '#fff',
    headerItem.style.width = '100%',
    headerItem.style.margin = '0'
    headerItem.style.borderTop = '1px solid #000'
  }else(
    headerItem.style.backgroundColor = 'transparent',
    headerItem.style.width = 'calc(100% - 40px)',
    headerItem.style.margin = '20px',
    headerItem.style.borderTop = '2px solid #000'
  )
})

