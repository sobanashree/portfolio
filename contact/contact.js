document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    const formStatus = document.getElementById("formStatus");


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