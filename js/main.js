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
console.log(imgsArray);
let imgEl;

for (let i = 0; i <= imgsArray.length - 1; i++) {
  imgEl = document.createElement("img");
  imgEl.src = imgsArray[i];
  if (i === 0) {
    imgEl.classList.add("d-block");
  }
  imgsContainerEl.append(imgEl);
}
let imgIndex = 0;
btnNext.addEventListener("click", function () {
  const oldImgEl = document.querySelector(
    `.imgs-container :nth-child(${imgIndex + 1})`
  );
  oldImgEl.classList.remove("d-block");
  imgIndex++;
  if (imgIndex > imgsArray.length - 1) {
    imgIndex = 0;
  }
  const newImg = document.querySelector(
    `.imgs-container :nth-child(${imgIndex + 1})`
  );
  newImg.classList.add("d-block");
});

btnPrev.addEventListener("click", function () {
  const oldImgEl = document.querySelector(
    `.imgs-container :nth-child(${imgIndex + 1})`
  );
  oldImgEl.classList.remove("d-block");

  imgIndex--;

  if (imgIndex < 0) {
    imgIndex = imgsArray.length - 1;
  }
  const newImg = document.querySelector(
    `.imgs-container :nth-child(${imgIndex + 1})`
  );
  newImg.classList.add("d-block");
});
