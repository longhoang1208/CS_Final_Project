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


const navbar = document.querySelector("#navbar");
const navbarItems = [...document.querySelectorAll("#navbar .nav-section")];

const sections = navbarItems
  .map(item => {
    const href = item.querySelector("a")?.getAttribute("href");
    const section = href?.startsWith("#")
      ? document.getElementById(href.slice(1))
      : null;

    return section ? { item, section } : null;
  })
  .filter(Boolean);

function updateActiveNav() {
  const scrollPosition = window.scrollY + navbar.offsetHeight + 1;
  let current = sections[0];

  for (const candidate of sections) {
    if (candidate.section.offsetTop <= scrollPosition) {
      current = candidate;
    } else {
      break;
    }
  }

  // Đảm bảo mục cuối active khi cuộn đến đáy trang.
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = sections.at(-1);
  }

  navbarItems.forEach(item => {
    item.classList.toggle("active", item === current?.item);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateActiveNav();