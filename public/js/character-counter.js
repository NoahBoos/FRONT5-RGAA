document.addEventListener("DOMContentLoaded", () => {
    const fields = [
        {
        input: document.getElementById("email"),
        max: 255,
        counter: document.getElementById("email-remaining"),
        progress: document.getElementById("email-progress")
        },
        {
            input: document.getElementById("message"),
            max: 1000,
            counter: document.getElementById("message-remaining"),
            progress: document.getElementById("message-progress")
        }
    ];

    const updateField = ({ input, max, counter, progress }) => {
        const length = input.value.length;
        const remaining = max - length;
        const percent = Math.min((length / max) * 100, 100);

        counter.textContent = `${remaining} caractères restants`;
        progress.style.width = `${percent}%`;
    };

    fields.forEach(field => {
    // Initial update
    updateField(field);
        // On input
        field.input.addEventListener("input", () => {
            updateField(field);
        });
    });
});
