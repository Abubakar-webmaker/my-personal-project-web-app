document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    const buttons = document.querySelectorAll(".butt button");

    function filterProducts(category) {
        products.forEach(product => {
            if (category === "all" || product.classList.contains(category)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Page load par sirf towels show
    filterProducts("towels");

    // Buttons ke liye event listeners
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("onclick").match(/'(.+)'/)[1];
            filterProducts(category);
        });
    });
});