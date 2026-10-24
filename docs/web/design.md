# Diseño — Nébula Café

## Dirección visual

Editorial cálida con aire de revista independiente: crema, espresso y coral, titulares serif grandes y mucho espacio en blanco. Debe sentirse luminosa, cercana y tranquila; evitar el aspecto corporativo y las plantillas genéricas.

## Principios

- La tipografía hace el trabajo visual principal.
- El color coral se usa como acento, no como fondo dominante.
- La ilustración es geométrica y propia, sin fotos de stock.
- El contenido respira: secciones amplias y jerarquía clara.

## Tipografía

| Uso | Fuente | Tamaño | Peso | Line-height |
| --- | --- | --- | --- | --- |
| H1 | Serif editorial del sistema | 48–96 px | 400 | 0.94 |
| H2 | Serif editorial del sistema | 36–48 px | 400 | 1 |
| H3 | Serif editorial del sistema | 24–30 px | 400 | 1.1 |
| Body | Sans del sistema | 14–18 px | 400–500 | 1.5–1.75 |
| Eyebrow | Sans del sistema | 10–12 px | 600 | 1.4, tracking amplio |

## Color

| Token | Valor | Uso | Contraste |
| --- | --- | --- | --- |
| `--color-cream` | `#f7f1e7` | Fondo principal | Base |
| `--color-paper` | `#fffaf2` | Tarjetas y superficies | Base |
| `--color-ink` | `#241b17` | Texto principal y botones | Alto sobre crema |
| `--color-mocha` | `#6f4b3b` | Texto secundario | Alto sobre crema |
| `--color-coral` | `#e76f51` | Acento y CTA | Alto sobre ink |
| `--color-coral-dark` | `#b84a33` | Texto de acento | ≥ 4.5:1 sobre crema |
| `--color-sage` | `#5f6f54` | Etiquetas | ≥ 4.5:1 sobre papel |
| `--color-sand` | `#e6d7c3` | Superficies y badges | Base |
| `--color-line` | `#d8c7b3` | Bordes | Decorativo |

## Espaciado y grid

- Escala basada en 4 px.
- Contenedor máximo: `max-w-6xl` (72 rem).
- Grid principal: 1 columna en móvil, 2 en `lg`.
- Gutter: 20 px en móvil y 32 px desde `sm`.
- Secciones: 80 px en móvil y 112 px en escritorio.

## Breakpoints

| Nombre | Ancho | Uso |
| --- | --- | --- |
| sm | 640px | Más padding y tipografía |
| md | 768px | Navegación completa y grids de 2–3 columnas |
| lg | 1024px | Hero y secciones a 2 columnas |
| xl | 1280px | Contenedor amplio |

## Componentes y estados

| Componente | Default | Hover | Focus | Active | Disabled |
| --- | --- | --- | --- | --- | --- |
| Botón principal | Fondo ink, texto cream | Fondo mocha | Outline coral | Igual que hover | No aplica |
| Botón coral | Fondo coral, texto ink | Fondo coral-dark, texto cream | Outline coral-dark | Igual que hover | No aplica |
| Card de menú | Borde y fondo paper | Elevación suave | Outline global | No aplica | No aplica |
| Enlace de texto | Subrayado coral | Subrayado más marcado | Outline global | No aplica | No aplica |

## Accesibilidad

- Contraste mínimo 4.5:1 para texto normal.
- Foco visible global con `:focus-visible`.
- Objetivos táctiles de al menos 44 px en CTAs y enlaces principales.
- Skip link al contenido.
- `prefers-reduced-motion` desactiva transiciones y scroll suave.

## Motion

- Transiciones de color y elevación de 150–200 ms.
- Sin animaciones de entrada ni parallax.
- Movimiento reducido respetado.

## Do / Don't

| Do | Don't |
| --- | --- |
| Usar serif grande y expresivo | Mezclar muchas familias tipográficas |
| Dejar aire entre secciones | Llenar cada bloque de tarjetas |
| Usar coral como acento | Usar coral como fondo de páginas completas |
| Mantener textos ficticios marcados | Presentar la demo como negocio real |
