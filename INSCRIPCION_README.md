# Configuración del Formulario de Inscripción

## 📧 Configuración de Email

### Opción 1: FormSpree (Recomendado - Gratuito)

1. Ve a [https://formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Copia el endpoint que te dan (ejemplo: `https://formspree.io/f/xpzgkdvw`)
5. Reemplaza en `js/inscripcion.js` línea 11:
   ```javascript
   const FORM_ENDPOINT = 'https://formspree.io/f/TU_FORM_ID_AQUI';
   ```

### Opción 2: EmailJS (Alternativa)

1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Crea una cuenta y configura un servicio de email
3. Crea un template de email
4. Descomenta la sección EmailJS en `js/inscripcion.js`
5. Configura tus IDs de servicio y template

### Opción 3: Netlify Forms (Si usas Netlify)

1. Agrega `netlify` al form tag en `inscripcion.html`
2. Los datos se enviarán automáticamente a tu panel de Netlify

## 🚀 Funcionalidades Implementadas

✅ **Formulario completo** con todos los campos del original
✅ **Validación en tiempo real** de campos
✅ **Estados de loading** y confirmación
✅ **Diseño responsive** idéntico al original
✅ **Integración perfecta** con la landing page
✅ **Manejo de errores** y UX mejorada
✅ **Información de pago** incluida
✅ **Navegación fluida** desde la landing

## 📱 Responsive Design

El formulario se adapta perfectamente a:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

## 🎨 Diseño Visual

- Mantiene los colores institucionales (#297e93)
- Efectos de hover y focus
- Animaciones suaves
- Modal de confirmación elegante

## 🔧 Próximos Pasos

1. **Configurar FormSpree** (5 minutos)
2. **Subir cambios al repositorio**
3. **Probar el formulario** en producción
4. **Opcional**: Configurar Google Analytics para tracking

## 📝 Notas Técnicas

- El formulario funciona sin JavaScript adicional
- Fallback para navegadores antiguos
- Accesibilidad completa (labels, ARIA)
- SEO optimizado

## 🚨 Importante

Recuerda actualizar el email de destino en FormSpree a:
`tecnico@institutosancayetanosalta.com`
