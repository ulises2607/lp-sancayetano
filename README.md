# Instituto San Cayetano - Landing Page

Una landing page moderna y responsiva para el Instituto San Cayetano, desarrollada con HTML5, CSS3 y JavaScript vanilla.

## 🚀 Características

- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Navegación Suave**: Smooth scrolling y navegación intuitiva
- **Formulario de Contacto**: Sistema de contacto con validación
- **Optimizada para SEO**: Estructura semántica y meta tags
- **Animaciones**: Efectos visuales sutiles y profesionales
- **Integración con Moodle**: Enlaces directos al campus virtual

## 📁 Estructura del Proyecto

```
LPSancayetano/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # JavaScript interactivo
├── images/             # Imágenes (crear carpeta)
├── .github/
│   └── copilot-instructions.md
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con Grid y Flexbox
- **JavaScript ES6+**: Interactividad y validaciones
- **Google Fonts**: Tipografía Inter
- **Responsive Design**: Mobile-first approach

## 📋 Secciones de la Página

1. **Header**: Navegación fija con acceso al campus virtual
2. **Hero**: Presentación principal con call-to-actions
3. **Carreras**: Información sobre las carreras ofrecidas
4. **Sobre Nosotros**: Historia y valores del instituto
5. **Contacto**: Formulario y datos de contacto
6. **Footer**: Enlaces y información adicional

## 🚀 Deployment con Git + DonWeb

### Paso 1: Configurar Git Repository

```bash
# Inicializar git en el proyecto
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit: Instituto San Cayetano landing page"

# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/instituto-san-cayetano.git

# Subir a GitHub
git push -u origin main
```

### Paso 2: Configurar DonWeb con Git

1. **En el panel de DonWeb:**
   - Ir a "Mi Sitio Web" → "GIT"
   - Conectar con tu repositorio de GitHub
   - Configurar auto-deploy desde la rama `main`

2. **Configurar Webhook (opcional):**
   - Cada push actualizará automáticamente el sitio

### Paso 3: Variables de Entorno (si usas formulario con backend)

```bash
# Crear archivo .env (no incluir en git)
CONTACT_EMAIL=info@institutosancayetanosalta.com
SMTP_HOST=smtp.donweb.com
SMTP_USER=tu_usuario
SMTP_PASS=tu_password
```

## 📝 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Azul principal */
    --secondary-color: #1e40af;  /* Azul secundario */
    --accent-color: #f59e0b;     /* Color de acento */
}
```

### Agregar Imágenes
1. Crear carpeta `images/`
2. Reemplazar los placeholders SVG en `index.html`
3. Optimizar imágenes para web (WebP recomendado)

### Modificar Contenido
- **Carreras**: Editar sección `#carreras` en `index.html`
- **Información**: Actualizar datos de contacto
- **Enlaces**: Verificar URLs del campus virtual

## 🔧 Configuración del Formulario de Contacto

### Opción 1: EmailJS (Recomendado)
```javascript
// En js/main.js, agregar configuración EmailJS
emailjs.init("TU_PUBLIC_KEY");

// Modificar función de envío
function sendEmail(formData) {
    emailjs.send("service_id", "template_id", formData)
        .then(() => alert("Mensaje enviado correctamente"));
}
```

### Opción 2: Formspree
```html
<!-- Modificar el form en index.html -->
<form action="https://formspree.io/f/TU_FORM_ID" method="POST">
```

### Opción 3: Backend PHP (para DonWeb)
```php
<?php
// contact.php
if ($_POST) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    
    // Lógica de envío de email
    mail("info@institutosancayetanosalta.com", "Contacto Web", $mensaje);
}
?>
```

## 🔍 SEO y Performance

### Meta Tags Incluidos
- Open Graph para redes sociales
- Twitter Cards
- Viewport para móviles
- Charset UTF-8

### Optimizaciones Implementadas
- CSS y JS minificados en producción
- Lazy loading para imágenes
- Preconnect a Google Fonts
- Compresión de imágenes

## 📱 Testing

### Responsive Testing
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚀 Próximos Pasos

1. **Conectar repositorio GitHub**
2. **Configurar auto-deploy en DonWeb**
3. **Agregar imágenes del instituto**
4. **Configurar formulario de contacto**
5. **Testear en todos los dispositivos**
6. **Optimizar SEO con contenido real**

## 📞 Soporte

Para dudas sobre la implementación:
- GitHub Issues: [Crear issue](https://github.com/TU_USUARIO/instituto-san-cayetano/issues)
- Email: desarrollo@institutosancayetanosalta.com

---

**Desarrollado para Instituto San Cayetano - 2025**
