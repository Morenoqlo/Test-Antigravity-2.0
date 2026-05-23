# Spec: Mejoras Portafolio Web Adesign

**Fecha:** 2026-05-20  
**Proyecto:** Test Antigravity 2.0 — Portafolio de Alexander Rojas (Adesign)  
**Alcance:** Opción B — Fixes prioritarios + limpieza de colores de marca  

---

## Contexto

Portafolio web de una sola página (`index.html`) con CSS propio (`css/style.css`) y JavaScript vanilla (`js/app.js`). Diseño glassmorphic con tema oscuro/claro, paleta oficial Adesign: amarillo `#ffb800` y naranja `#f97316`. El sitio fue construido previamente con asistencia de Gemini.

Se identificaron tres categorías de mejoras durante la revisión de código:
1. Logo de navegación demasiado pequeño para ser visible
2. Bug de alineación vertical en la sección "Contacto Directo"
3. Residuos de paleta vieja (violeta y teal) en 10 declaraciones CSS (7 selectores) que no pertenecen a la marca Adesign

---

## Cambio 1 — Logo más grande

**Archivo:** `css/style.css`  
**Selectores afectados:** `.logo-img, .nav-logo img` y `.glass-nav.scrolled`

### Antes
```css
.logo-img, .nav-logo img {
    height: 46px !important;
    max-height: 46px !important;
    max-width: 200px !important;
}

.glass-nav.scrolled {
    height: 70px;
}
```

### Después
```css
.logo-img, .nav-logo img {
    height: 70px !important;
    max-height: 70px !important;
    max-width: 270px !important;
}

.glass-nav.scrolled {
    height: 76px;
}
```

**Razón del ajuste en `.glass-nav.scrolled`:** Si el logo es 70px y el nav al hacer scroll también colapsa a 70px, el logo queda sin margen vertical. Subir a 76px da 3px de padding arriba y abajo con el logo centrado por flexbox.

---

## Cambio 2 — Alineación contacto

**Archivo:** `css/style.css`  
**Selector afectado:** `.method-item`

### Antes
```css
.method-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}
```

### Después
```css
.method-item {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
}
```

**Causa del bug:** El texto de ubicación "Antofagasta, Chile (Servicios remotos a todo el mundo)" ocupa 2 líneas. Con `align-items: center`, el ícono circular de 48px se centra verticalmente con el bloque de texto completo, quedando desalineado respecto a los items de WhatsApp y Email (texto de una línea). Con `flex-start`, todos los íconos se anclan al tope del texto, logrando consistencia visual.

---

## Cambio 3 — Limpieza de colores de marca

**Archivo:** `css/style.css`  
**Problema:** 8 declaraciones CSS usan colores violeta (`rgba(139, 92, 246, x)`) y teal (`rgba(6, 182, 212, x)`) que son residuos de un tema anterior. La paleta oficial de Adesign es exclusivamente amarillo `#ffb800` y naranja `#f97316`.

### Mapa de reemplazos

| Selector | Propiedad | Valor viejo | Valor nuevo |
|---|---|---|---|
| `.badge` | `background` | `rgba(139, 92, 246, 0.1)` | `rgba(255, 184, 0, 0.1)` |
| `.badge` | `border` | `1px solid rgba(139, 92, 246, 0.2)` | `1px solid rgba(255, 184, 0, 0.2)` |
| `.image-overlay-glow` | `background` | `radial-gradient(circle, rgba(139, 92, 246, 0.15) ...)` | `radial-gradient(circle, rgba(249, 115, 22, 0.08) ...)` |
| `.hero-card:hover .glowing-icon` | `text-shadow` | `0 0 10px rgba(139, 92, 246, 0.5)` | `0 0 10px rgba(255, 184, 0, 0.5)` |
| `.timeline-dot` | `box-shadow` | `0 0 10px rgba(139, 92, 246, 0.5)` | `0 0 10px rgba(255, 184, 0, 0.5)` |
| `.feature-icon` | `background` | `rgba(6, 182, 212, 0.1)` | `rgba(249, 115, 22, 0.1)` |
| `.feature-icon` | `border` | `1px solid rgba(6, 182, 212, 0.2)` | `1px solid rgba(249, 115, 22, 0.2)` |
| `.method-item i` | `background` | `rgba(6, 182, 212, 0.1)` | `rgba(249, 115, 22, 0.1)` |
| `.method-item i` | `border` | `1px solid rgba(6, 182, 212, 0.2)` | `1px solid rgba(249, 115, 22, 0.2)` |
| `input:focus, textarea:focus` | `box-shadow` | `0 0 12px rgba(6, 182, 212, 0.15)` | `0 0 12px rgba(249, 115, 22, 0.15)` |

---

## Archivos afectados

| Archivo | Tipo de cambio |
|---|---|
| `css/style.css` | 14 líneas modificadas |
| `index.html` | Sin cambios |
| `js/app.js` | Sin cambios |

---

## Fuera de alcance (esta sesión)

- Mover inline styles del timeline a clases CSS (Opción C)
- Conectar formulario a servicio real de envío de email (Opción C)
- Cambios visuales o de layout (el usuario está conforme con el diseño actual)
