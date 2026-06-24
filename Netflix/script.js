const faqs = document.querySelectorAll(".faq1");

faqs.forEach((faq) => {
    const plus = faq.querySelector(".plus");
    const ans = faq.querySelector(".answer");

    faq.addEventListener("click", () => {
        faqs.forEach((other) => {
            const pl = other.querySelector(".plus");
            const an = other.querySelector(".answer");

            if (faq != other) {
            an.style.display = "none";
            pl.textContent = "+";
        } 
        });

        if(ans.style.display === "block")
        {
            ans.style.display = "none";
            plus.textContent = "+";
        }
        else
        {
            ans.style.display = "block";
            plus.textContent = "-";
        }
        
    });
});
