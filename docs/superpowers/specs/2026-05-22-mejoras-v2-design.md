# Spec: Mejoras V2 — Portafolio Adesign

**Fecha:** 2026-05-22  
**Proyecto:** Test Antigravity 2.0 — Portafolio de Alexander Rojas (Adesign)  
**Alcance:** 5 cambios: badge, hero card, zoom modal, título sección, footer logo  

---

## Contexto

Segunda ronda de mejoras al portafolio. Los cambios 1, 4 y 5 son ediciones de texto/HTML simples. Los cambios 2 y 3 son los más significativos: rediseño de la tarjeta hero y nueva funcionalidad de lupa en el modal de proyectos.

---

## Cambio 1 — Eliminar emoji rayo del badge Hero

**Archivo:** `index.html` línea 84  

```html
<!-- ANTES -->
<div class="badge" id="hero-badge">⚡ Disponible para nuevos proyectos</div>

<!-- DESPUÉS -->
<div class="badge" id="hero-badge">Disponible para nuevos proyectos</div>
```

---

## Cambio 2 — Nueva tarjeta Hero: Proceso Creativo

**Archivos:** `index.html`, `css/style.css`

### HTML — Reemplazar contenido de `.hero-card`

El bloque `<div class="glass-card hero-card" id="hero-interactive-card">` actualmente muestra una tarjeta simulando una terminal de código JavaScript. Se reemplaza por una tarjeta de proceso creativo con 4 pasos numerados.

```html
<div class="glass-card hero-card" id="hero-interactive-card">
    <div class="hero-card-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="terminal-title">proceso_creativo.flow</span>
    </div>
    <div class="hero-card-body">
        <div class="process-step">
            <div class="process-step-num">01</div>
            <div class="process-step-content">
                <span class="process-step-label">Concepto & Brief</span>
                <span class="process-step-desc">Investigación y definición estratégica</span>
            </div>
        </div>
        <div class="process-connector"></div>
        <div class="process-step">
            <div class="process-step-num">02</div>
            <div class="process-step-content">
                <span class="process-step-label">Boceto & Dirección</span>
                <span class="process-step-desc">Exploración visual y selección de ruta</span>
            </div>
        </div>
        <div class="process-connector"></div>
        <div class="process-step">
            <div class="process-step-num">03</div>
            <div class="process-step-content">
                <span class="process-step-label">Producción Digital</span>
                <span class="process-step-desc">Vectorización, 3D y composición final</span>
            </div>
        </div>
        <div class="process-connector"></div>
        <div class="process-step">
            <div class="process-step-num">04</div>
            <div class="process-step-content">
                <span class="process-step-label">Entrega & Manual</span>
                <span class="process-step-desc">Archivos maestros y guía de aplicación</span>
            </div>
        </div>
    </div>
</div>
```

### CSS — Nuevas clases al final de `style.css`

```css
/* -------------------------------------------------------------
   HERO CARD: PROCESO CREATIVO
------------------------------------------------------------- */
.process-step {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.process-step-num {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--grad-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 800;
    color: #050508;
    flex-shrink: 0;
    font-family: var(--font-heading);
    letter-spacing: 0;
}

.process-step-content {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
}

.process-step-label {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-primary);
    font-family: var(--font-heading);
}

.process-step-desc {
    font-size: 0.72rem;
    color: var(--text-muted);
    line-height: 1.3;
}

.process-connector {
    width: 2px;
    height: 14px;
    background: var(--border-glass);
    margin-left: 15px;
    margin: 4px 0 4px 15px;
}
```

**Nota:** Las clases `.hero-card-body`, `.hero-card-header`, `.dot`, `.terminal-title` ya existen y se reutilizan sin cambios.

---

## Cambio 3 — Lupa Magnifier en modal de proyectos

**Archivos:** `css/style.css`, `js/app.js`

### Comportamiento

- Visible **solo en desktop** (se activa con `mousemove` sobre `.modal-visual`)
- Al pasar el cursor sobre la imagen del modal aparece una lupa circular de 130px
- La lupa muestra la zona bajo el cursor a **2.5× zoom**
- Al salir del área de la imagen la lupa se oculta
- No afecta el comportamiento de flechas o dots del carrusel existente
- En móvil no se activa (los eventos touch no disparan `mousemove` de esta forma)

### CSS — Agregar al final de `style.css`

```css
/* -------------------------------------------------------------
   LUPA MAGNIFIER — MODAL DE PROYECTOS
------------------------------------------------------------- */
.img-lens {
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 2px solid var(--color-accent-1);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5),
                0 8px 24px rgba(0, 0, 0, 0.6),
                0 0 15px rgba(255, 184, 0, 0.3);
    display: none;
    pointer-events: none;
    z-index: 20;
    background-repeat: no-repeat;
    cursor: none;
}

.modal-visual.lens-active {
    cursor: none;
}
```

### JS — Agregar al final de `app.js`, dentro del `DOMContentLoaded`

```js
/* ==========================================
   10. LUPA MAGNIFIER EN MODAL
   ========================================== */
const lens = document.createElement('div');
lens.className = 'img-lens';
lens.id = 'img-lens';
document.querySelector('.modal-visual').appendChild(lens);

const modalVisualEl = document.querySelector('.modal-visual');

modalVisualEl.addEventListener('mousemove', (e) => {
    const img = document.getElementById('modal-project-img');
    if (!img || !img.src || img.style.opacity === '0') {
        lens.style.display = 'none';
        return;
    }

    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        lens.style.display = 'none';
        modalVisualEl.classList.remove('lens-active');
        return;
    }

    const lensSize = 130;
    const zoomFactor = 2.5;

    lens.style.display = 'block';
    modalVisualEl.classList.add('lens-active');

    // Posición de la lupa relativa al contenedor .modal-visual
    const containerRect = modalVisualEl.getBoundingClientRect();
    lens.style.left = (e.clientX - containerRect.left - lensSize / 2) + 'px';
    lens.style.top  = (e.clientY - containerRect.top  - lensSize / 2) + 'px';

    // Zoom: background-image cubre rect.width*zoomFactor × rect.height*zoomFactor
    // y se desplaza para que el punto bajo el cursor quede centrado en la lupa
    lens.style.backgroundImage    = `url('${img.src}')`;
    lens.style.backgroundSize     = `${rect.width * zoomFactor}px ${rect.height * zoomFactor}px`;
    lens.style.backgroundPosition =
        `-${x * zoomFactor - lensSize / 2}px -${y * zoomFactor - lensSize / 2}px`;
});

modalVisualEl.addEventListener('mouseleave', () => {
    lens.style.display = 'none';
    modalVisualEl.classList.remove('lens-active');
});
```

---

## Cambio 4 — Renombrar sección Trayectoria

**Archivo:** `index.html`

```html
<!-- ANTES -->
<h2 class="section-title">Hitos y Evolución</h2>
<p class="section-subtitle">Mi trayectoria profesional en diseño gráfico, identidad visual, gestión de marca y comunicaciones.</p>

<!-- DESPUÉS -->
<h2 class="section-title">Experiencia</h2>
<p class="section-subtitle">Empresas, proyectos y formación que han marcado mi camino.</p>
```

---

## Cambio 5 — Footer logo

**Archivos:** `index.html`, `css/style.css`

### HTML — Eliminar span duplicado

```html
<!-- ANTES -->
<div class="footer-brand">
    <img src="assets/logo.png" alt="Adesign Logo" class="footer-logo-img">
    <span class="logo-text">Adesign</span>
    <p>Estética impecable y rigor visual...</p>
</div>

<!-- DESPUÉS -->
<div class="footer-brand">
    <img src="assets/logo.png" alt="Adesign Logo" class="footer-logo-img">
    <p>Estética impecable y rigor visual...</p>
</div>
```

### CSS — Aumentar tamaño del logo en footer

```css
/* ANTES */
.footer-logo-img {
    height: 48px !important;
    max-height: 48px !important;
    max-width: 200px !important;
    ...
}

/* DESPUÉS */
.footer-logo-img {
    height: 60px !important;
    max-height: 60px !important;
    max-width: 260px !important;
    ...
}
```

---

## Archivos afectados

| Archivo | Cambios |
|---|---|
| `index.html` | Cambios 1, 2 (HTML card), 4, 5 (HTML) |
| `css/style.css` | Cambios 2 (CSS clases), 3 (CSS lens), 5 (CSS footer) |
| `js/app.js` | Cambio 3 (JS magnifier) |

---

## Fuera de alcance

- Zoom en la vista de tarjetas (grid de proyectos) — solo en modal
- Animación de entrada de los pasos del proceso creativo
- Cambios en cualquier otra sección
