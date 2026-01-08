
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

// 2. Função para renderizar as fotos na tela
function renderGallery(items) {
    galleryGrid.innerHTML = ''; // Limpa a galeria atual

    if (items.length === 0) {
        noResultsMsg.style.display = 'block'; // Mostra mensagem se vazio [cite: 44]
    } else {
        noResultsMsg.style.display = 'none';
        
        items.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    
    // Adicionamos o "onclick" na imagem para chamar a função de abrir
    card.innerHTML = `
        <img src="${photo.src}" alt="${photo.name}" onclick="openModal('${photo.src}', '${photo.name}')">
        <h3>${photo.name}</h3>
    `;
    galleryGrid.appendChild(card);
});
    }
}

// 3. Renderização inicial
renderGallery(photos);

// 4. Lógica de Busca em Tempo Real [cite: 24, 43]
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Filtra considerando apenas o nome da foto [cite: 25]
    const filteredPhotos = photos.filter(photo => 
        photo.name.toLowerCase().includes(searchTerm)
    );
    
    renderGallery(filteredPhotos);
});
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Função que abre o modal (chamada ao clicar na foto)
function openModal(src, name) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = name;
}

// Quando clicar no X, fecha o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// (Opcional) Fechar se clicar fora da imagem
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}