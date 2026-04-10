var arr = ["yash", "rohit", "shreshtha", "sudhanshu", "omkar", "sumit"];

const output = document.getElementById("output");
const selection = document.getElementById("students");

// Populate dropdown
for (var i = 0; i < arr.length; i++) {
    const choice = document.createElement('option');
    choice.value = arr[i];
    choice.textContent = arr[i];
    selection.appendChild(choice);
}

// Event listener
selection.addEventListener('change', (e) => {
    const selected = e.target.value;
    if (selected) {
        const message = "Welcome, " + selected + "! Have a great day 🎉";
        output.innerHTML += `<p>${message}</p>`;
    } else {
        output.innerHTML = "<p>Please select a student first.</p>";
    }
});