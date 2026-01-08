
const photos = [
    { id: 1, name: "Praia Ensolarada", src: "./img/foto1.avif" },
    { id: 2, name: "Montanha Nevada", src: "./img/foto2.jpg" },
    { id: 3, name: "Floresta Tropical", src: "./img/foto3.webp" },
    { id: 4, name: "Cidade Noturna", src: "./img/foto4.jpg" },
    { id: 5, name: "Cachorro Feliz", src: "./img/foto5.webp" },
    { id: 6, name: "Gato Curioso", src: "./img/foto6.jpeg" },
    { id: 7, name: "Carro Esportivo", src: "./img/foto7.webp" },
    { id: 8, name: "Café da Manhã", src: "./img/foto8.webp" },
    { id: 9, name: "Pôr do Sol", src: "./img/foto9.avif" },
    { id: 10, name: "Jardim Florido", src: "./img/foto10.jpg" }
];

const galleryGrid = document.getElementById('gallery-grid');
const searchInput = document.getElementById('search-input');
const noResultsMsg = document.getElementById('no-results');


function renderGallery(items) {
    galleryGrid.innerHTML = ''; 

    if (items.length === 0) {
        noResultsMsg.style.display = 'block'; 
    } else {
        noResultsMsg.style.display = 'none';
        
        items.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    
    
    card.innerHTML = `
        <img src="${photo.src}" alt="${photo.name}" onclick="openModal('${photo.src}', '${photo.name}')">
        <h3>${photo.name}</h3>
    `;
    galleryGrid.appendChild(card);
});
    }
}


renderGallery(photos);


searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    
    const filteredPhotos = photos.filter(photo => 
        photo.name.toLowerCase().includes(searchTerm)
    );
    
    renderGallery(filteredPhotos);
});
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];


function openModal(src, name) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = name;
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}


modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }

}
