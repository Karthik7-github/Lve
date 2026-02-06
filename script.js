
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;

noBtn.addEventListener("click", () => {
    scale += 0.4;
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
    alert("Yay! 💖 I Love Youuuuuuuuuuuuuuuuu");
});
