const slides = [
    `<article class="about-us__carousel-card carousel-card">
        <div class="carousel-card__icon">
            <img src="img/pot-one-img.svg" alt="Plant in a pot">
        </div>
        <h5>Plants for Home</h5>
        <p>We offer a huge selection of flowers and evergreens that will be a joy to see for many years. A charming plant will be a great addition to the interior.</p>
        <a href="#" class="carousel-card__button">Learn more</a>
    </article>`,

    `<article class="about-us__carousel-card carousel-card">
        <div class="carousel-card__icon">
            <img src="img/pot-two-img.svg" alt="Cactus in a pot">
        </div>
        <h5>Plants for Garden</h5>
        <p>Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, both in the form of seeds, and already sprouted.</p>
        <a href="#" class="carousel-card__button">Learn more</a>
    </article>`,

    `<article class="about-us__carousel-card carousel-card">
        <div class="carousel-card__icon">
            <img src="img/pot-three-img.svg" alt="Houseplant in a decorative pot">
        </div>
        <h5>Sale of Flowerpots</h5>
        <p>Purchase flowerpots for plants of any type, from small flowers to huge palm trees. Our store offers only quality flowerpots from trusted manufacturers.</p>
        <a href="#" class="carousel-card__button">Learn more</a>
    </article>`,

    `<article class="about-us__carousel-card carousel-card">
        <div class="carousel-card__icon">
            <img src="img/pot-four-img.svg" alt="Plant in a pot with buds on it">
        </div>
        <h5>Soil for Plants</h5>
        <p>It's not easy to find quality soil in New York. We offer the best options for your plants. The soil we sell is decontaminated and enriched with nutrients.</p>
        <a href="#" class="carousel-card__button">Learn more</a>
    </article>`,

    `<article class="about-us__carousel-card carousel-card">
        <div class="carousel-card__icon">
            <img src="img/pot-five-img.svg" alt="Cactus in a pot with thorns">
        </div>
        <h5>Plant Food</h5>
        <p>We offer everything you need to care for plants. Here you'll find a wide selection of fertilizers and medicinal products to combat flower diseases.</p>
        <a href="#" class="carousel-card__button">Learn more</a>
    </article>`,

    `<article class="about-us__carousel-card carousel-card">
        <div class="carousel-card__icon">
            <img src="img/pot-six-img.svg" alt="Small plant in a pot ">
        </div>
        <h5>Consultations</h5>
        <p>We not only sell plants and everything related to them but are also ready to answer any of your questions! Contact us to select the best plant!</p>
        <a href="#" class="carousel-card__button">Learn more</a>
    </article>`,
];
let currentSlideIndex = 0;
function renderSlides() {
    const slideContainer = document.querySelector('.about-us__carousel-slide');
    slideContainer.innerHTML = slides[currentSlideIndex];
}
renderSlides();

function nextSlide() {
    currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    renderSlides();
}
function prevSlide() {
    currentSlideIndex = currentSlideIndex - 1 < 0 ? 5 : currentSlideIndex - 1;
    renderSlides();
}
//setInterval(nextSlide, 1000);