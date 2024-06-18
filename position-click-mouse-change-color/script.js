document.body.addEventListener("click", function (event) {
  console.log(event.clientX, event.clientY);

  if ((event.clientX && event.clientY) % 2 === 0) {
    document.body.style.backgroundColor = "orange";
  } else if ((event.clientX && event.clientY) % 2 !== 0) {
    document.body.style.backgroundColor = "violet";
  } else if ((event.clientX || event.clientY) % 2 === 0) {
    document.body.style.backgroundColor = "green";
  }
});
