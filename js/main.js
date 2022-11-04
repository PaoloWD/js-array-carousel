const btnNext = document.querySelector(".btn-primary");
const btnPrev = document.querySelector(".btn-danger");
let imgsContainerEl = document.querySelector(".imgs-container");
const imgsArray = [
  "imgs/carosello_mono_array.png",
  "imgs/01.webp",
  "imgs/02.webp",
  "imgs/03.webp",
  "imgs/04.webp",
  "imgs/05.webp",
];
let imgEl;

let imgIndex = 0;

for (let i = 0; i < imgsArray.length - 1; i++) {
  imgEl = document.createElement("img");
  imgEl.src = imgsArray[imgIndex];
  if (i === 0) {
    imgEl.classList.add("d-block");
  }
  imgsContainerEl.append(imgEl);
  imgIndex++;
}

imgIndex = 0;
btnNext.addEventListener("click", function () {
  const oldImgEl = document.querySelector(
    `.imgs-container :nth-child(${imgIndex + 1})`
  );
  oldImgEl.classList.remove("d-block");
  imgIndex++;

  const lastIndex = imgsArray.length - 1;

  if (imgIndex > lastIndex) {
    imgIndex = 0;
  }
  imgEl.src = imgsArray[imgIndex];
  imgEl.classList.add("d-block");
});
