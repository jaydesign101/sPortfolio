document.addEventListener("DOMContentLoaded", function() {
  const headerItem = document.querySelector("header");
  const homeSection = document.querySelector("#home");
  let homeSectionHeight = homeSection.offsetHeight;
  
  window.addEventListener('resize', function(){
    homeSectionHeight = homeSection.offsetHeight;
  })
  
  // header
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

  // scroll move
  var menuLinks = document.querySelectorAll("header ul.mega-menu li a");

  menuLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      

      // 부드럽게 스크롤
      e.preventDefault();
      let linkLocation = this.getAttribute('href');
      var targetElement = document.querySelector(linkLocation);
      
      if (linkLocation) {
        var targetOffsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

})