const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        entry.target.classList.add('show');
        console.log(true);
      }else {
        entry.target.classList.remove('show');
      }
    })
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));