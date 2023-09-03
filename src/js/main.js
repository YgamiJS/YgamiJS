const images = document.querySelectorAll(".image img");

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight + 300;

  let bottomVisible = coords.bottom < windowHeight + 300 && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let img of images) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = "";
    }
  }
}

showVisible();
window.addEventListener("scroll", showVisible);
