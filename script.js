function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  const textArray = ['an engineering student.', 'a tech enthusiast.', 'into Data Science.', 'planning to be a Data specialist.','in a web love-hate relationship.','a money spender.','a footballer.', 'a lover.'];
  let index = 0;
  
  function changeText() {
    const animatedText = document.getElementById('animated-text');
    animatedText.textContent = textArray[index];
    index = (index + 1) % textArray.length; 
  }
  
  setInterval(changeText, 2000);
