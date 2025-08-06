// Looping Typing Animation with Neon Colors
document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    { text: "Elite Free Fire Player", color: "#00d9ff" },  // neon cyan
    { text: "Heroic Rank Slayer", color: "#ff0077" },      // neon pink
    { text: "Headshot King", color: "#00ff88" },           // neon green
    { text: "Squad Wiper", color: "#ffd700" }              // neon gold
  ];

  const typingElement = document.getElementById("typing-text");
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const current = titles[titleIndex];
    const displayedText = current.text.substring(0, charIndex);

    typingElement.innerHTML = displayedText;
    typingElement.style.color = current.color;
    typingElement.style.textShadow = `0 0 10px ${current.color}, 0 0 20px ${current.color}`;

    if (!isDeleting && charIndex < current.text.length) {
      charIndex++;
      setTimeout(typeLoop, 100); // typing speed
    } 
    else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 50); // deleting speed
    } 
    else if (!isDeleting && charIndex === current.text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // pause before deleting
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeLoop, 500); // pause before typing next title
    }
  }

  typeLoop();
});

// Counter Animation for Stats
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 50;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
