// Filter courses
function filterCourses() {
    const filter = document.getElementById("filter").value;
    document.querySelectorAll(".card").forEach(card => {
        card.style.display = (filter === "all" || card.classList.contains(filter)) ? "block" : "none";
    });
}

// Register + Login -> Backend
document.addEventListener("DOMContentLoaded", () => {
    const regForm = document.getElementById("registerForm");
    if (regForm) {
        regForm.addEventListener("submit", async e => {
            e.preventDefault();
            const email = regForm.email.value;
            const password = regForm.password.value;
            const res = await fetch("http://localhost:3000/register", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({email,password})
            });
            const data = await res.json();
            alert(data.message || data.error);
        });
    }

    const logForm = document.getElementById("loginForm");
    if (logForm) {
        logForm.addEventListener("submit", async e => {
            e.preventDefault();
            const email = logForm.email.value;
            const password = logForm.password.value;
            const res = await fetch("http://localhost:3000/login", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({email,password})
            });
            const data = await res.json();
            alert(data.message || data.error);
        });
    }
});