const carouselCards = [
    {
        id: "1",
        img: "img/pot-one-img.svg",
        title: "Plants for Home",
        alt: "Plant in a pot",
        description: "We offer a huge selection of flowers and evergreens that will be a joy to see for many years. A charming plant will be a great addition to the interior.",
    },
    {
        id: "2",
        img: "img/pot-two-img.svg",
        title: "Plants for Garden",
        alt: "Cactus in a pot",
        description: "Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, both in the form of seeds, and already sprouted.",
    },
    {
        id: "3",
        img: "img/pot-three-img.svg",
        title: "Sale of Flowerpots",
        alt: "Houseplant in a decorative pot",
        description: "Purchase flowerpots for plants of any type, from small flowers to huge palm trees. Our store offers only quality flowerpots from trusted manufacturers.",
    },
    {
        id: "4",
        img: "img/pot-four-img.svg",
        title: "Soil for Plants",
        alt: "Plant in a pot with buds on it",
        description: "It's not easy to find quality soil in New York. We offer the best options for your plants. The soil we sell is decontaminated and enriched with nutrients.",
    },
    {
        id: "5",
        img: "img/pot-five-img.svg",
        title: "Plant Food",
        alt: "Cactus in a pot with thorns",
        description: "We offer everything you need to care for plants. Here you'll find a wide selection of fertilizers and medicinal products to combat flower diseases.",
    },
    {
        id: "6",
        img: "img/pot-six-img.svg",
        title: "Consultations",
        alt: "Small plant in a pot",
        description: "We not only sell plants and everything related to them but are also ready to answer any of your questions! Contact us to select the best plant!",
    },
];
renderCarouselCards(carouselCards);
function renderCarouselCards(carouselCards) {
    let carouselCardsString = '';
    for (const card of carouselCards) {
        carouselCardsString += `
            <article class="about-us__carousel-card carousel-card">
                <div class="carousel-card__icon">
                    <img src="${card.img}" alt="${card.alt}">
                </div>
                <h5>${card.title}</h5>
                <p>${card.description}</p>
                <a href="#" class="carousel-card__button">Learn more</a>
            </article>
        `;
    }
    const aboutCarouselContainer = document.querySelector(".about-us__carousel");
    aboutCarouselContainer.innerHTML = carouselCardsString;
};