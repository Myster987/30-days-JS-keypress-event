window.addEventListener("keypress", (e) => {
    const label = document.getElementById("pressLabel");
    const result = document.getElementById("result");
    result.style.display = "block";

    label.innerHTML = `You pressed ${e.key}`;
    result.innerHTML = `${e.charCode}`;
});