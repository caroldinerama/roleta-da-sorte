// Application data - exact data from the official source
const giftCardsData = [
    {"name": "Zift", "category": "Multimarcas", "description": "Plataforma de gift cards multimarcas", "usage": "Loja Física e Online", "icon": "🎁"},
    {"name": "Zift Food", "category": "Gastronomia", "description": "Gift cards para alimentação e delivery", "usage": "Loja Física e Online", "icon": "🍽️"},
    {"name": "Rappi", "category": "Delivery", "description": "Delivery de comida e produtos", "usage": "Online", "icon": "🚚"},
    {"name": "Madero", "category": "Gastronomia", "description": "Hambúrgueres gourmet", "usage": "Loja Física e Online", "icon": "🍔"},
    {"name": "Outback Steakhouse", "category": "Gastronomia", "description": "Restaurante australiano", "usage": "Loja Física", "icon": "🥩"},
    {"name": "Coco Bambu", "category": "Gastronomia", "description": "Restaurante de frutos do mar", "usage": "Loja Física e Online", "icon": "🦐"},
    {"name": "Applebee's", "category": "Gastronomia", "description": "Restaurante americano", "usage": "Loja Física", "icon": "🇺🇸"},
    {"name": "Fogo de Chão", "category": "Gastronomia", "description": "Churrascaria premium", "usage": "Loja Física", "icon": "🔥"},
    {"name": "Pobre Juan", "category": "Gastronomia", "description": "Restaurante argentino", "usage": "Loja Física", "icon": "🇦🇷"},
    {"name": "Bráz Pizzaria", "category": "Gastronomia", "description": "Pizzaria artesanal", "usage": "Loja Física", "icon": "🍕"},
    {"name": "Abbraccio", "category": "Gastronomia", "description": "Restaurante italiano", "usage": "Loja Física", "icon": "🇮🇹"},
    {"name": "Camarada Camarão", "category": "Gastronomia", "description": "Restaurante de frutos do mar", "usage": "Loja Física", "icon": "🦐"},
    {"name": "Sushito", "category": "Gastronomia", "description": "Restaurante japonês", "usage": "Loja Física", "icon": "🍣"},
    {"name": "Jeronimo", "category": "Gastronomia", "description": "Hamburgueria premium", "usage": "Loja Física e Online", "icon": "🍔"},
    {"name": "Johnny Joy", "category": "Gastronomia", "description": "Sorveteria artesanal", "usage": "Loja Física", "icon": "🍨"},
    {"name": "Ao Gosto", "category": "Gastronomia", "description": "Restaurante contemporâneo", "usage": "Loja Física e Online", "icon": "🍽️"},
    {"name": "Di Paolo", "category": "Gastronomia", "description": "Cafeteria especializada", "usage": "Loja Física", "icon": "☕"},
    {"name": "Gurumê", "category": "Gastronomia", "description": "Restaurante gourmet", "usage": "Loja Física", "icon": "👨‍🍳"},
    {"name": "We Coffee", "category": "Café", "description": "Cafeteria especializada", "usage": "Loja Física", "icon": "☕"},
    {"name": "Café Orfeu", "category": "Café", "description": "Cafés especiais premium", "usage": "Online", "icon": "☕"},
    {"name": "Dengo", "category": "Doces", "description": "Chocolates artesanais", "usage": "Online", "icon": "🍫"},
    {"name": "Bacio di Latte", "category": "Sobremesas", "description": "Gelatos artesanais italianos", "usage": "Loja Física", "icon": "🍨"},
    {"name": "Kopenhagen", "category": "Doces", "description": "Chocolates premium", "usage": "Online", "icon": "🍫"},
    {"name": "Brasil Cacau", "category": "Doces", "description": "Chocolates brasileiros", "usage": "Online", "icon": "🍫"},
    {"name": "C&A", "category": "Moda", "description": "Moda para toda família", "usage": "Loja Física e Online", "icon": "👕"},
    {"name": "Riachuelo", "category": "Moda", "description": "Moda e casa", "usage": "Loja Física e Online", "icon": "👗"},
    {"name": "Nike", "category": "Esportes", "description": "Artigos esportivos", "usage": "Loja Física e Online", "icon": "👟"},
    {"name": "Vans", "category": "Streetwear", "description": "Calçados e streetwear", "usage": "Online", "icon": "👟"},
    {"name": "Loungerie", "category": "Moda", "description": "Moda íntima feminina", "usage": "Loja Física e Online", "icon": "👙"},
    {"name": "Anacapri", "category": "Calçados", "description": "Calçados femininos", "usage": "Online", "icon": "👠"},
    {"name": "Arezzo", "category": "Calçados", "description": "Calçados femininos", "usage": "Online", "icon": "👠"},
    {"name": "Schutz", "category": "Calçados", "description": "Calçados femininos de luxo", "usage": "Online", "icon": "👠"},
    {"name": "Oscar Calçados", "category": "Calçados", "description": "Calçados confortáveis", "usage": "Loja Física e Online", "icon": "👞"},
    {"name": "Havaianas", "category": "Calçados", "description": "Sandálias brasileiras", "usage": "Loja Física", "icon": "🩴"},
    {"name": "Vila Romana", "category": "Moda", "description": "Moda masculina", "usage": "Loja Física e Online", "icon": "👔"},
    {"name": "Democrata", "category": "Calçados", "description": "Calçados masculinos", "usage": "Online", "icon": "👞"},
    {"name": "Reserva", "category": "Moda", "description": "Moda masculina lifestyle", "usage": "Online", "icon": "👔"},
    {"name": "Santa Lolla", "category": "Calçados", "description": "Calçados femininos", "usage": "Loja Física", "icon": "👠"},
    {"name": "Crocs", "category": "Calçados", "description": "Calçados confortáveis", "usage": "Loja Física e Online", "icon": "👡"},
    {"name": "Centauro", "category": "Esportes", "description": "Artigos esportivos e lifestyle", "usage": "Loja Física e Online", "icon": "⚽"},
    {"name": "Fuel", "category": "Esportes", "description": "Moda fitness", "usage": "Loja Física", "icon": "🏃"},
    {"name": "Tok&Stok", "category": "Casa", "description": "Móveis e decoração", "usage": "Loja Física e Online", "icon": "🛋️"},
    {"name": "Casas Bahia", "category": "Casa", "description": "Eletrodomésticos e móveis", "usage": "Online", "icon": "🏠"},
    {"name": "Granado", "category": "Beleza", "description": "Cosméticos e perfumaria", "usage": "Loja Física e Online", "icon": "💄"},
    {"name": "Eudora", "category": "Beleza", "description": "Cosméticos e perfumes", "usage": "Online", "icon": "💄"},
    {"name": "Chilli Beans", "category": "Acessórios", "description": "Óculos e acessórios", "usage": "Online", "icon": "🕶️"},
    {"name": "Netshoes", "category": "Calçados", "description": "Calçados e artigos esportivos", "usage": "Online", "icon": "👟"},
    {"name": "Estrela", "category": "Brinquedos", "description": "Brinquedos e jogos", "usage": "Online", "icon": "🧸"},
    {"name": "Imaginarium", "category": "Brinquedos", "description": "Brinquedos educativos", "usage": "Online", "icon": "🎓"},
    {"name": "Monte Carlo", "category": "Doces", "description": "Biscoitos e doces", "usage": "Online", "icon": "🍪"},
    {"name": "Besni", "category": "Doces", "description": "Doces árabes", "usage": "Loja Física", "icon": "🧁"},
    {"name": "Aussie", "category": "Gastronomia", "description": "Restaurante australiano", "usage": "Loja Física", "icon": "🇦🇺"},
    {"name": "PetLove", "category": "Pets", "description": "Produtos para pets", "usage": "Online", "icon": "🐕"},
    {"name": "ZZ MALL", "category": "Shopping", "description": "Shopping online", "usage": "Online", "icon": "🛒"},
    {"name": "Santa Luzia", "category": "Varejo", "description": "Produtos diversos", "usage": "Loja Física e Online", "icon": "🛍️"},
    {"name": "Lojas MM", "category": "Varejo", "description": "Moda e acessórios", "usage": "Online", "icon": "👗"},
    {"name": "Tip Top", "category": "Padaria", "description": "Padaria e confeitaria", "usage": "Loja Física", "icon": "🥖"},
    {"name": "Dufry", "category": "Viagem", "description": "Duty free shops", "usage": "Loja Física", "icon": "✈️"},
    {"name": "Airbnb", "category": "Viagem", "description": "Hospedagem alternativa", "usage": "Online", "icon": "🏨"},
    {"name": "GNC Cinemas", "category": "Entertainment", "description": "Rede de cinemas", "usage": "Loja Física", "icon": "🎬"},
    {"name": "Spotify", "category": "Música", "description": "Streaming de música digital", "usage": "Online", "icon": "🎵"},
    {"name": "Uber", "category": "Transporte", "description": "Transporte e delivery", "usage": "Online", "icon": "🚗"},
    {"name": "XBox Live Credits", "category": "Gaming", "description": "Créditos para Xbox Live", "usage": "Online", "icon": "🎮"},
    {"name": "Nintendo", "category": "Gaming", "description": "Jogos e créditos Nintendo", "usage": "Online", "icon": "🎮"},
    {"name": "Pokemon", "category": "Gaming", "description": "Jogos Pokemon", "usage": "Online", "icon": "⚡"},
    {"name": "Xbox Game Pass", "category": "Gaming", "description": "Assinatura de jogos Xbox", "usage": "Online", "icon": "🎮"},
    {"name": "PlayStation", "category": "Gaming", "description": "Créditos PlayStation", "usage": "Online", "icon": "🎮"},
    {"name": "Minecraft", "category": "Gaming", "description": "Jogo Minecraft", "usage": "Online", "icon": "⛏️"},
    {"name": "Roblox", "category": "Gaming", "description": "Plataforma de jogos Roblox", "usage": "Online", "icon": "🎮"},
    {"name": "Google Play", "category": "Gaming", "description": "Créditos Google Play", "usage": "Online", "icon": "📱"},
    {"name": "EA Sports FC 25", "category": "Gaming", "description": "Jogo de futebol", "usage": "Online", "icon": "⚽"},
    {"name": "Ifood", "category": "Delivery", "description": "Plataforma de delivery", "usage": "Online", "icon": "🛵"},
    {"name": "Cacau Show", "category": "Doces", "description": "Chocolates finos", "usage": "Loja Física e Online", "icon": "🍫"},
    {"name": "Evino", "category": "Bebidas", "description": "Clube de vinhos", "usage": "Online", "icon": "🍷"}
];


const faqData = [
    {
        question: "Como funciona a promoção Roleta da Sorte?",
        answer: "A cada missão que você completa no aplicativo Dinerama, você acumula pontos. Com esses pontos, você pode girar a Roleta da Sorte para ter a chance de ganhar gift cards digitais nos valores de R$25, R$100 ou R$500."
    },
    {
        question: "Onde posso usar os gift cards?",
        answer: "Você pode usar os gift cards em uma vasta rede de parceiros, que inclui lojas físicas e online. Cada gift card tem sua especificação de uso, que pode ser consultada na descrição dele."
    },
    {
        question: "Como recebo meu gift card?",
        answer: "Após ganhar na Roleta da Sorte, o gift card digital é enviado diretamente para o seu e-mail cadastrado no aplicativo Dinerama. Você também poderá acessá-lo na seção 'Meus Prêmios' do app."
    },
    {
        question: "Os gift cards têm validade?",
        answer: "Sim, cada gift card tem um prazo de validade específico, que varia de acordo com o parceiro. A data de validade estará claramente indicada no e-mail e no aplicativo junto com o seu prêmio."
    }
];

// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Populate gift cards in the grid
function populateGiftCards(category = 'Todos') {
    const container = document.getElementById('gift-cards-container');
    container.innerHTML = ''; // Clear existing cards
    
    const filteredData = category === 'Todos'
        ? giftCardsData
        : giftCardsData.filter(card => card.category === category);

    filteredData.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'gift-card';
        
        const bgColorClass = `bg-${(index % 8) + 1}`;

        cardElement.innerHTML = `
            <div class="gift-card-icon ${bgColorClass}">${card.icon}</div>
            <h3 class="gift-card-name">${card.name}</h3>
            <p class="gift-card-description">${card.description}</p>
            <div class="gift-card-tags">
                <span class="gift-card-tag">${card.category}</span>
                <span class="gift-card-tag">${card.usage}</span>
            </div>
        `;
        container.appendChild(cardElement);
    });
}

// Populate FAQ items
function populateFAQ() {
    const container = document.getElementById('faq-container');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button class="faq-question">${item.question}</button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        container.appendChild(faqItem);
    });
}

// Populate category filter buttons
function populateCategoryFilters() {
    const container = document.getElementById('category-filters');
    const categories = ['Todos', ...new Set(giftCardsData.map(card => card.category))];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = category;
        button.dataset.category = category;
        if (category === 'Todos') {
            button.classList.add('active');
        }
        container.appendChild(button);
    });

    // Add event listener to filter buttons
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Remove active class from all buttons
            container.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            // Repopulate gift cards with the selected category
            populateGiftCards(e.target.dataset.category);
        }
    });
}

// Initialize the application
function initializeApp() {
    populateCategoryFilters();
    populateGiftCards();
    populateFAQ();

    // Setup FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
        });
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Expose scrollToSection function globally
window.scrollToSection = scrollToSection;
