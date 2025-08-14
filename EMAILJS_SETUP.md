# 📧 Configuración EmailJS - Guía Rápida (5 minutos)

## 🚀 EmailJS es GRATIS y permite 200 emails/mes

### **Paso 1: Crear cuenta en EmailJS**
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" 
3. Regístrate con tu email

### **Paso 2: Configurar servicio de email**
1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. **Para tu email personalizado**, selecciona:
   - **"Other (SMTP)"** si usas cPanel/hosting
   - **"Outlook"** si tu email está en Microsoft
   - **"Gmail"** solo si tienes Gmail configurado para recibir de tu dominio

#### **Si usas cPanel/Hosting (más común):**
4. Configura SMTP:
   - **Host**: `mail.institutosancayetanosalta.com` (o el que te dé DonWeb)
   - **Port**: `587` (TLS) o `465` (SSL)
   - **Username**: `tecnico@institutosancayetanosalta.com`
   - **Password**: Tu contraseña de email
   - **Security**: TLS/SSL

#### **Si usas Outlook/Microsoft:**
4. Conecta tu cuenta Microsoft que maneja el email

5. **Anota el SERVICE_ID** (ej: `service_xyz123`)

### **Paso 3: Crear template de email**
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este template:

```
Para: tecnico@institutosancayetanosalta.com
Asunto: III Congreso - Inscripción de {{email}}

Contenido:
{{message}}
```

4. **Anota el TEMPLATE_ID** (ej: `template_abc456`)

### **Paso 4: Obtener Public Key**
1. Ve a **Account** → **General**
2. Busca **Public Key**
3. **Anota la PUBLIC_KEY** (ej: `user_def789`)

### **Paso 5: Actualizar el código**
Abre `js/inscripcion.js` y cambia las líneas 8-10:

```javascript
const EMAILJS_SERVICE_ID = 'service_xyz123';    // Tu SERVICE_ID
const EMAILJS_TEMPLATE_ID = 'template_abc456';  // Tu TEMPLATE_ID  
const EMAILJS_PUBLIC_KEY = 'user_def789';       // Tu PUBLIC_KEY
```

### **Paso 6: ¡Probar!**
1. Guarda los cambios
2. Haz commit y push
3. Prueba el formulario en tu página

---

## 🎯 **Ventajas de EmailJS:**
- ✅ **200 emails gratis/mes**
- ✅ **Sin servidor necesario**
- ✅ **Funciona desde cualquier hosting**
- ✅ **Setup en 5 minutos**
- ✅ **Emails van directamente a tu Gmail**

## 🔧 **Si tienes problemas:**
1. Verifica que los IDs estén correctos
2. Revisa la consola del navegador (F12)
3. Asegúrate que el template tenga las variables `{{email}}` y `{{message}}`

## 💡 **Plan Paid (opcional):**
- $15/mes = 10,000 emails
- Ideal para alto volumen
