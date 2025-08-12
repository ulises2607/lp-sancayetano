// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Destacar sección activa en navegación
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(this);
    const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        telefono: formData.get('telefono'),
        carrera: formData.get('carrera'),
        mensaje: formData.get('mensaje')
    };
    
    // Simulación de envío (aquí puedes integrar con un servicio real)
    console.log('Datos del formulario:', data);
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    // Limpiar formulario
    this.reset();
    
    // Aquí puedes agregar la lógica para enviar el email
    // Por ejemplo, usando EmailJS, Formspree, o tu propio backend
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a las tarjetas y elementos
document.querySelectorAll('.carrera-card, .feature, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animación especial para el evento destacado
const eventoBanner = document.querySelector('.evento-banner');
if (eventoBanner) {
    const eventoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, 200);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    eventoObserver.observe(eventoBanner);
}

// Efecto parallax suave para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.backgroundPosition = `center ${rate}px`;
    }
});

// Contador animado para estadísticas (opcional)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Validación mejorada del formulario
function validateForm() {
    const nombre = document.querySelector('input[name="nombre"]');
    const email = document.querySelector('input[name="email"]');
    const carrera = document.querySelector('select[name="carrera"]');
    const mensaje = document.querySelector('textarea[name="mensaje"]');
    
    let isValid = true;
    
    // Limpiar errores previos
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Validar nombre
    if (nombre.value.trim().length < 2) {
        showError(nombre, 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Ingrese un email válido');
        isValid = false;
    }
    
    // Validar carrera
    if (!carrera.value) {
        showError(carrera, 'Seleccione una carrera');
        isValid = false;
    }
    
    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
        showError(mensaje, 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

function showError(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    element.parentNode.insertBefore(errorDiv, element.nextSibling);
}

// Mejorar el submit del formulario con validación
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Aquí va la lógica de envío
        const formData = new FormData(this);
        
        // Simulación de loading
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular envío (reemplazar con tu lógica real)
        setTimeout(() => {
            alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
});

// Prevenir spam del formulario
let lastSubmission = 0;
contactForm.addEventListener('submit', function(e) {
    const now = Date.now();
    if (now - lastSubmission < 5000) { // 5 segundos entre envíos
        e.preventDefault();
        alert('Por favor espere unos segundos antes de enviar otro mensaje.');
        return;
    }
    lastSubmission = now;
});
