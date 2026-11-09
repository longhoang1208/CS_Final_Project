const navSection = document.querySelectorAll(".nav-section");

navSection.forEach(link => {
    link.addEventListener("click", () => {
        navSection.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    })
})


const careerGroupNavSection = document.querySelectorAll(".career-group-nav-section");

careerGroupNavSection.forEach(link => {
    link.addEventListener("click", () => {
        careerGroupNavSection.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    })
})