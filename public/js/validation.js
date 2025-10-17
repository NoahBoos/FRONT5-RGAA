document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const emailInput = document.getElementById("email");
  const sujetSelect = document.getElementById("sujet");
  const messageTextarea = document.getElementById("message");

  const globalError = document.getElementById("form-error-global");

  const fields = [
    {
      element: emailInput,
      errorElement: document.getElementById("email-error"),
      validate: () => {
        const value = emailInput.value.trim();
        if (!value) return "L'email est requis.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Veuillez entrer un email valide.";
        return "";
      }
    },
    {
      element: sujetSelect,
      errorElement: document.getElementById("sujet-error"),
      validate: () => {
        return sujetSelect.value ? "" : "Veuillez choisir un sujet.";
      }
    },
    {
      element: messageTextarea,
      errorElement: document.getElementById("message-error"),
      validate: () => {
        return messageTextarea.value.trim() ? "" : "Le message est requis.";
      }
    }
  ];

  // Validation au blur
  fields.forEach(({ element, errorElement, validate }) => {
    element.addEventListener("blur", () => {
      const errorMsg = validate();
      errorElement.textContent = errorMsg;
      if (errorMsg) {
        element.setAttribute("aria-invalid", "true");
      } else {
        element.removeAttribute("aria-invalid");
      }
    });
  });

  // Validation à la soumission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Bloquer la soumission

    const errorMessages = [];

    fields.forEach(({ element, errorElement, validate }) => {
      const errorMsg = validate();
      errorElement.textContent = errorMsg;

      if (errorMsg) {
        element.setAttribute("aria-invalid", "true");
        errorMessages.push(errorMsg);
      } else {
        element.removeAttribute("aria-invalid");
      }
    });

    if (errorMessages.length > 0) {
      globalError.innerHTML = `
        <p id="error-summary" aria-live="assertive">${errorMessages.length} erreur${errorMessages.length > 1 ? "s" : ""} détectée${errorMessages.length > 1 ? "s" : ""} :</p>
        <ul class="list-disc pl-5 mt-1" aria-labelledby="error-summary">
            ${errorMessages.map(msg => `<li>${msg}</li>`).join("")}
        </ul>`;
      globalError.focus();
    } else {
      globalError.textContent = "";
      window.location.href = "envoi-formulaire.html";
    }
  });
});
