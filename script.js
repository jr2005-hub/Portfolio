/* =========================
   MENU MOBILE
========================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
        });
    });
}

/* =========================
   TOAST
========================= */
function showToast(message, duration = 3000) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, duration);
}

/* =========================
   FORMULÁRIO - EMAILJS
========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        emailjs.send(
            "SEU_SERVICE_ID",     // ← coloque aqui
            "SEU_TEMPLATE_ID",    // ← coloque aqui
            {
                from_name: contactForm.name.value,
                from_email: contactForm.email.value,
                message: contactForm.message.value
            }
        )
        .then(() => {
            showToast("Mensagem enviada com sucesso!");
            contactForm.reset();
        })
        .catch(() => {
            showToast("Erro ao enviar. Tente novamente.");
        });
    });
}

/* =========================
   ANIMAÇÕES AO SCROLL
========================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    ".skill-card, .project-card, .stat-card"
).forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});

/* =========================
   NAVBAR SCROLL
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.style.background = "rgba(10,14,26,0.98)";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "rgba(10,14,26,0.9)";
        navbar.style.boxShadow = "none";
    }
});

/* =========================
   SCROLL SUAVE
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
