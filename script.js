const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = event => {
  let iteractions = 0;
  
  const interval = setInterval(() => {    
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iteractions) {
      return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)]
  })
    
    .join("");
    
   if (iteractions >= event.target.dataset.value.lenght) clearInterval(interval);
    
  iteractions += 1 / 3;
  }, 30);
}