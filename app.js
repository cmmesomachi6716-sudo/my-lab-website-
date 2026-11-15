document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Hello! Your lab website JavaScript is working.");
        });
    }
});
