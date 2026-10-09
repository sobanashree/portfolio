document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");


    /* ================= SCROLLSPY ================= */

    window.addEventListener("scroll", () => {

        let currentId = "";


        sections.forEach((section) => {

            const sectionTop = section.offsetTop;


            if (window.scrollY >= sectionTop - 180) {

                currentId = section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") === `#${currentId}`
            ) {

                link.classList.add("active");

            }

        });

    });



    /* ================= CONTACT FORM ================= */

    const contactForm =
        document.getElementById("contactForm");


    const formStatus =
        document.getElementById("formStatus");


    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();


            formStatus.style.color = "#38bdf8";


            formStatus.textContent =
                "Thank you! Your message has been sent successfully.";


            contactForm.reset();


            setTimeout(() => {

                formStatus.textContent = "";

            }, 5000);

        });

    }

});