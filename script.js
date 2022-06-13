let cpt = document.querySelector("h3");
let compteur = 0;

function bubbleMaker() {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";

  bubble.style.height = size;
  bubble.style.width = size;

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    compteur++;
    cpt.innerHTML = compteur;
    bubble.remove();
  });

  setInterval(() => {
    bubble.remove();
  }, 6000);
}

setInterval(bubbleMaker, 300);
