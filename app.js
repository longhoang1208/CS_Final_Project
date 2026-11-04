const navSection = document.querySelectorAll(".nav-section");

navSection.forEach(link => {
    link.addEventListener("click", () => {
        navSection.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    })
})