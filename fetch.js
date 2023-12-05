function setImageSrc(url) {
  let img = document.getElementById("image");
  img.src = url;
}

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((json) => json.message)
  .then(setImageSrc)
  .catch((err) => console.error(err));
