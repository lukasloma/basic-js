const slideList = [
  {
    img: "photo1.jpg",
  },
  {
    img: "photo2.jpg",
  },
  {
    img: "photo3.jpg",
  },
];

const image = document.querySelector("img.slider");
const dots = [...document.querySelectorAll(".dots span")];
const time = 2000;
let active = 0;
const changeDots = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};
const work = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  changeDots();
};
setInterval(work, time);
