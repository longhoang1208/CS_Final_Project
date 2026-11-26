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


document.querySelectorAll(".job-dscrpt").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll(".job-section > ul").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll(".skill-card").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll(".uni-card").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll(".job-card").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll(".career-group-nav-section .info").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll("#about-me > .paragraphs").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});


document.querySelectorAll(".project-card").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();

    element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  element.addEventListener("pointerleave", () => {
    element.style.removeProperty("--mouse-x");
    element.style.removeProperty("--mouse-y");
  });
});