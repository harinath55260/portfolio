// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll("nav a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==============================
// PROJECT POPUP
// ==============================

function showProject(name) {

    alert(
        "🚀 " +
        name +
        "\n\nProject details coming soon!"
    );

}


// ==============================
// CONTACT FORM
// ==============================

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name")
        .value
        .trim();

    const email =
        document.getElementById("email")
        .value
        .trim();

    const message =
        document.getElementById("message")
        .value
        .trim();

    const formMessage =
        document.getElementById("formMessage");


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "⚠️ Please fill all fields.";

        return;
    }


    formMessage.textContent =
        "✅ Thank you " +
        name +
        "! Message received.";

    form.reset();

});


// ==============================
// 3D MOUSE EFFECT
// ==============================

const cards =
    document.querySelectorAll(
        ".about-card, .skill-card, .project-card"
    );


cards.forEach(card => {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -8;

        const rotateY =
            ((x - centerX) / centerX) * 8;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});


// ==============================
// HERO PARALLAX
// ==============================

const hero =
    document.querySelector(".hero");

const cube =
    document.querySelector(".cube");


hero.addEventListener("mousemove", function(event) {

    const x =
        (window.innerWidth / 2 - event.clientX) / 35;

    const y =
        (window.innerHeight / 2 - event.clientY) / 35;


    cube.style.marginLeft =
        `${x}px`;

    cube.style.marginTop =
        `${y}px`;

});


// ==============================
// SCROLL REVEAL
// ==============================

const elements =
    document.querySelectorAll(
        ".about-card, .skill-card, .project-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elements.forEach(element => {

    observer.observe(element);

});