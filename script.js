const cardElement = document.getElementById("city-card");

 

async function loadCity() {
  const res = await fetch("https://mrkot92.github.io/fake-api/kiev.json");
  const obj = await res.json();
  console.log(obj);

  const { name, settled, image } = obj;

  const nameElement = document.createElement("span");
  nameElement.textContent = name;

  const settledElement = document.createElement("span");
  settledElement.textContent = settled;

  const imageElement = document.createElement("img"); // Adăugați un element img pentru a afișa imaginea
  imageElement.src = image; // Setează atributul src cu linkul imaginii

  cardElement.append(nameElement, settledElement, imageElement);
}

loadCity();