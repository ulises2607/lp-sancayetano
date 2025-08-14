// JavaScript para el formulario de inscripción

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inscripcion-form");
  const submitBtn = document.getElementById("submit-btn");
  const submitText = document.querySelector(".submit-text");
  const loadingSpinner = document.querySelector(".loading-spinner");
  const successMessage = document.getElementById("success-message");

  // Configurar Getform.io - Mejor para hosting tradicional como DonWeb
  const FORM_ENDPOINT = "https://getform.io/f/agdjdvnb"; // Lo configuramos en 2 minutos

  // Manejar envío del formulario
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Mostrar estado de carga
    setLoadingState(true);

    try {
      const formData = new FormData(form);

      // Crear el mensaje de email
      const emailData = {
        to: "tecnico@institutosancayetanosalta.com",
        subject: `III Congreso - Inscripción de ${formData.get("email")}`,
        message: createEmailMessage(formData),
      };

      // Enviar con FormSpree o método alternativo
      const response = await sendEmail(formData);

      if (response.ok) {
        showSuccessMessage();
        form.reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorMessage(
        "Hubo un error al enviar tu inscripción. Por favor, intenta nuevamente o contacta directamente por teléfono."
      );
    } finally {
      setLoadingState(false);
    }
  });

  // Validar formulario
  function validateForm() {
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;

    // Limpiar errores previos
    clearErrors();

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        showFieldError(field, "Este campo es obligatorio");
        isValid = false;
      }
    });

    // Validar email
    const emailField = document.getElementById("email");
    if (emailField.value && !isValidEmail(emailField.value)) {
      showFieldError(emailField, "Ingresa un email válido");
      isValid = false;
    }

    // Validar DNI
    const dniField = document.getElementById("dni");
    if (
      dniField.value &&
      (dniField.value.length < 7 || dniField.value.length > 8)
    ) {
      showFieldError(dniField, "El DNI debe tener entre 7 y 8 dígitos");
      isValid = false;
    }

    // Validar teléfono
    const telefonoField = document.getElementById("telefono");
    if (telefonoField.value && telefonoField.value.length < 8) {
      showFieldError(telefonoField, "Ingresa un número de teléfono válido");
      isValid = false;
    }

    return isValid;
  }

  // Mostrar error en campo específico
  function showFieldError(field, message) {
    field.style.borderColor = "#ef4444";
    field.style.backgroundColor = "#fef2f2";

    // Crear mensaje de error si no existe
    let errorMsg = field.parentNode.querySelector(".error-message");
    if (!errorMsg) {
      errorMsg = document.createElement("div");
      errorMsg.className = "error-message";
      errorMsg.style.color = "#ef4444";
      errorMsg.style.fontSize = "0.875rem";
      errorMsg.style.marginTop = "0.25rem";
      field.parentNode.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
  }

  // Limpiar errores
  function clearErrors() {
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => msg.remove());

    const inputs = form.querySelectorAll(".form-input");
    inputs.forEach((input) => {
      input.style.borderColor = "";
      input.style.backgroundColor = "";
    });
  }

  // Validar email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Estado de carga
  function setLoadingState(loading) {
    if (loading) {
      submitBtn.disabled = true;
      submitText.style.display = "none";
      loadingSpinner.style.display = "flex";
    } else {
      submitBtn.disabled = false;
      submitText.style.display = "block";
      loadingSpinner.style.display = "none";
    }
  }

  // Crear mensaje de email
  function createEmailMessage(formData) {
    return `
NUEVA INSCRIPCIÓN - III CONGRESO DE TÉCNICOS EN LABORATORIO

Datos del participante:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre y Apellido: ${formData.get("fullname")}
Fecha de Nacimiento: ${formData.get("bornDate")}
D.N.I.: ${formData.get("dni")}
Domicilio: ${formData.get("domicilio")}
Teléfono: ${formData.get("telefono")}
Email: ${formData.get("email")}
Profesión: ${formData.get("profesion")}
Estudiante: ${formData.get("estudiante")}
Tipo de Participación: ${formData.get("tipoAsistente")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fecha de inscripción: ${new Date().toLocaleString("es-AR")}
        `;
  }

  // Enviar email usando Getform.io (mejor para DonWeb/Ferozo)
  async function sendEmail(formData) {
    try {
      console.log("Enviando formulario con Getform...");

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      console.log("Getform Response:", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return { ok: true, response };
    } catch (error) {
      console.error("Getform Error:", error);
      throw error;
    }
  }

  // Mostrar mensaje de éxito
  function showSuccessMessage() {
    successMessage.style.display = "flex";

    // Auto-cerrar después de 10 segundos
    setTimeout(() => {
      closeSuccessMessage();
    }, 10000);
  }

  // Mostrar mensaje de error
  function showErrorMessage(message) {
    alert(message); // Puedes crear un modal más elegante
  }

  // Mejorar UX de los campos
  const inputs = form.querySelectorAll(".form-input");
  inputs.forEach((input) => {
    // Limpiar errores al escribir
    input.addEventListener("input", function () {
      if (this.style.borderColor === "rgb(239, 68, 68)") {
        this.style.borderColor = "";
        this.style.backgroundColor = "";
        const errorMsg = this.parentNode.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }
      }
    });

    // Efectos de focus
    input.addEventListener("focus", function () {
      this.style.transform = "translateY(-1px)";
    });

    input.addEventListener("blur", function () {
      this.style.transform = "";
    });
  });

  // Validación en tiempo real para DNI
  const dniInput = document.getElementById("dni");
  dniInput.addEventListener("input", function () {
    // Solo permitir números
    this.value = this.value.replace(/\D/g, "");

    // Limitar a 8 dígitos
    if (this.value.length > 8) {
      this.value = this.value.slice(0, 8);
    }
  });

  // Validación en tiempo real para teléfono
  const telefonoInput = document.getElementById("telefono");
  telefonoInput.addEventListener("input", function () {
    // Permitir números, espacios, guiones y paréntesis
    this.value = this.value.replace(/[^\d\s\-\(\)]/g, "");
  });

  // Formato automático para fecha de nacimiento
  const fechaInput = document.getElementById("bornDate");
  fechaInput.addEventListener("change", function () {
    const today = new Date();
    const birthDate = new Date(this.value);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 16 || age > 100) {
      showFieldError(this, "Por favor, verifica la fecha de nacimiento");
    }
  });
});

// Función global para cerrar mensaje de éxito
function closeSuccessMessage() {
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "none";
}

// Funciones de utilidad para integración con servicios de email

// Configuración para EmailJS (alternativa)
function setupEmailJS() {
  // Descomenta y configura si usas EmailJS
  /*
    emailjs.init("YOUR_PUBLIC_KEY");
    
    return {
        send: async function(formData) {
            const templateParams = {
                fullname: formData.get('fullname'),
                email: formData.get('email'),
                bornDate: formData.get('bornDate'),
                dni: formData.get('dni'),
                domicilio: formData.get('domicilio'),
                telefono: formData.get('telefono'),
                profesion: formData.get('profesion'),
                estudiante: formData.get('estudiante'),
                tipoAsistente: formData.get('tipoAsistente'),
                message: createEmailMessage(formData)
            };
            
            return await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
        }
    };
    */
}

// Configuración para Netlify Forms (si usas Netlify)
function setupNetlifyForms() {
  // Agregar atributo netlify al form en el HTML
  // <form netlify name="inscripcion-congreso">
}

// Analytics - tracking de conversiones
function trackFormSubmission() {
  // Google Analytics
  if (typeof gtag !== "undefined") {
    gtag("event", "form_submit", {
      event_category: "inscripcion",
      event_label: "congreso_laboratorio",
    });
  }

  // Facebook Pixel
  if (typeof fbq !== "undefined") {
    fbq("track", "Lead");
  }
}
