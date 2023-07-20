const cardElement = document.getElementById("city-card");

 

async function loadCity() {

  const res = await fetch("https://mrkot92.github.io/fake-api/kiev.json");

  const obj = await res.json();

  console.log(obj);

  const { name, settled, image } = obj;

  // console.log(name);    // Kiev

  // console.log(settled); // 6-7 век

  // console.log(image);   // ссылка на фото 

  const nameElement = document.createElement("span"); // <span></span>

  nameElement.textContent = name;                     // <span>Kiev</span>

 

  const settledElement = document.createElement("span");

  settledElement.textContent = settled;

  

  cardElement.append(nameElement, settledElement);

}

 

loadCity();