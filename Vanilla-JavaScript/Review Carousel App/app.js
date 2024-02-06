const reviews = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque magna sit amet lorem sagittis, nec suscipit lectus fermentum. Nulla vel justo nec urna tristique vestibulum.",
        author: "John Doe"
    },
    {
        text: "Vivamus ullamcorper felis ac metus cursus, vel aliquam odio dignissim. Nam euismod nunc ut ipsum varius, vel luctus mauris accumsan.",
        author: "Jane Smith"
    },
    {
        text: "Integer auctor elit vel ex scelerisque, nec venenatis nulla gravida. Quisque ultrices, libero vitae fermentum ultricies, arcu velit laoreet nisl.",
        author: "Bob Johnson"
    }
];

const reviewContainer = document.getElementById("review");
const carouselContainer = document.getElementById("carousel-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function showReview(index) {
    reviewContainer.innerHTML = `
        <p class="text">${reviews[index].text}</p>
        <p class="author">${reviews[index].author}</p>
    `;
}

function updateCarousel() {
    const activeReview = document.querySelector(".review.active");
    if (activeReview) {
        activeReview.classList.remove("active");
    }
    carouselContainer.children[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
    updateCarousel();
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
    updateCarousel();
});

// Initial setup
showReview(currentIndex);
updateCarousel();
