# Spec: Mejoras V3 — Portafolio Adesign

**Fecha:** 2026-05-22  
**Proyecto:** Test Antigravity 2.0  
**Alcance:** 3 ajustes: lupa rectangular + más grande, ícono ubicación equilibrado, footer logo más grande y sin frase.

---

## Cambio 1 — Lupa rectangular, más grande y más zoom

**Archivos:** `css/style.css`, `js/app.js`

### CSS — Modificar `.img-lens`

```css
/* ANTES */
.img-lens {
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    ...
}

/* DESPUÉS */
.img-lens {
    position: absolute;
    width: 220px;
    height: 160px;
    border-radius: 12px;
    ...
}
```
Solo cambian `width`, `height` y `border-radius`. Todas las demás propiedades (`border`, `box-shadow`, `display`, `pointer-events`, `z-index`, `background-repeat`) permanecen igual.

### JS — Modificar `zoomFactor` y `lensSize` en el listener `mousemove`

En `js/app.js`, dentro del listener `mousemove` de `modalVisualEl`, cambiar:

```js
// ANTES
const lensSize = 130;
const zoomFactor = 2.5;

// DESPUÉS
const lensSize = 220;  // debe coincidir con el width del CSS (la dimensión mayor)
const zoomFactor = 3.5;
```

**Nota importante:** `lensSize` se usa para centrar la lupa bajo el cursor. Como la lupa ahora es rectangular (220×160), se usa `220` para el cálculo horizontal (left) y se necesita un valor separado para el cálculo vertical (top). Actualizar el JS así:

```js
const lensW = 220;
const lensH = 160;
const zoomFactor = 3.5;

lens.style.display = 'block';
modalVisualEl.classList.add('lens-active');

const containerRect = modalVisualEl.getBoundingClientRect();
lens.style.left = (e.clientX - containerRect.left - lensW / 2) + 'px';
lens.style.top  = (e.clientY - containerRect.top  - lensH / 2) + 'px';

lens.style.backgroundImage    = `url('${img.src}')`;
lens.style.backgroundSize     = `${rect.width * zoomFactor}px ${rect.height * zoomFactor}px`;
lens.style.backgroundPosition =
    `-${x * zoomFactor - lensW / 2}px -${y * zoomFactor - lensH / 2}px`;
```

---

## Cambio 2 — Ícono ubicación más prominente

**Archivo:** `css/style.css`

Agregar al final de `style.css`, después del bloque de la lupa:

```css
/* Equilibrar visualmente el ícono de ubicación con WhatsApp y Email */
.method-item .fa-location-dot {
    font-size: 1.8rem;
}
```

---

## Cambio 3 — Footer logo más grande + eliminar frase

### CSS — `css/style.css`

```css
/* ANTES */
.footer-logo-img {
    height: 60px !important;
    max-height: 60px !important;
    max-width: 260px !important;
    ...
}

/* DESPUÉS */
.footer-logo-img {
    height: 80px !important;
    max-height: 80px !important;
    max-width: 320px !important;
    ...
}
```

### HTML — `index.html`

Eliminar el `<p>` de `.footer-brand`:

```html
<!-- ANTES -->
<div class="footer-brand">
    <img src="assets/logo.png" alt="Adesign Logo" class="footer-logo-img">
    <p>Estética impecable y rigor visual, diseñando marcas y empaques memorables con visión innovadora.</p>
</div>

<!-- DESPUÉS -->
<div class="footer-brand">
    <img src="assets/logo.png" alt="Adesign Logo" class="footer-logo-img">
</div>
```

---

## Archivos afectados

| Archivo | Cambios |
|---|---|
| `css/style.css` | `.img-lens` (width/height/border-radius), `.fa-location-dot` (nuevo), `.footer-logo-img` (height/max-width) |
| `js/app.js` | `lensW`, `lensH`, `zoomFactor` + cálculos de posición/background |
| `index.html` | Eliminar `<p>` de `.footer-brand` |
