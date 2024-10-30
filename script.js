const apiKey = '46798381-eb8e62f908a3ca7ec6780dd10';

async function searchImages() {
  const query = document.getElementById('searchInput').value;
  if (!query) {
    alert("Por favor, escribe algo para buscar imágenes.");
    return;
  }

  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayImages(data.hits);
  } catch (error) {
    console.error("Error al obtener las imágenes:", error);
  }
}

function displayImages(images) {
  const imagesContainer = document.getElementById('imagesContainer');
  imagesContainer.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    imagesContainer.appendChild(imgElement);
  });
}
