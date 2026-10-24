# AGENTS.md — Proyecto web

## Stack

- **Astro 7** + TypeScript
- **Tailwind CSS 4**
- **Playwright** para tests E2E
- **ESLint + Prettier** para calidad de código

## Herramientas

- **Playwright MCP** (`playwright_*`) para QA visual y pruebas en navegador.
- Skills globales: `frontend-design`, `seo-aeo-best-practices`, `accessibility-scan`, `tdd`, `systematic-debugging` y `verification-before-completion`.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Preview del build |
| `npm run check` | Type-check de Astro |
| `npm run lint` | ESLint |
| `npm run format` | Formatea con Prettier |
| `npm test` | Playwright en escritorio y móvil |
| `npm run test:ui` | Playwright en modo UI |

## Estructura

```text
src/
├── components/      Componentes reutilizables
├── layouts/         Layouts de página
├── pages/           Rutas del sitio
├── styles/          Estilos globales y tokens
└── content/         Contenido estructurado, si se usa

public/              Assets estáticos
tests/               Tests E2E de Playwright
docs/web/            Brief, plan, arquitectura, diseño, copy y QA
```

## Convenciones

- Mobile-first y responsive en 360, 768, 1024 y 1440 px.
- HTML semántico: `header`, `nav`, `main`, `section`, `footer`.
- Un solo `h1` por página y jerarquía de headings correcta.
- Componentes pequeños y reutilizables.
- Tailwind para estilos; tokens en `src/styles/global.css`.
- Nada de `lorem ipsum` en la entrega final.
- Imágenes con `width`, `height`, formato moderno y `loading="lazy"` cuando corresponda.
- JavaScript solo cuando aporte valor.

## Flujo con agentes

1. **web-lead**: aclara el brief, crea `docs/web/brief.md` y `docs/web/plan.md`.
2. **web-architect**: define sitemap, stack, estructura y riesgos en `docs/web/architecture.md`.
3. **web-designer**: define tokens, tipografía, componentes y responsive en `docs/web/design.md`.
4. **web-copywriter**: escribe textos, CTAs y metadatos en `docs/web/copy.md`.
5. **web-builder**: implementa páginas y componentes; ejecuta build, lint y tests.
6. **web-qa**: prueba en navegador y escribe tests en `tests/`; reporta en `docs/web/qa.md`.
7. **web-reviewer**: revisa código, seguridad, SEO y mantenibilidad.
8. **web-deployer**: prepara el despliegue, ejecuta preview y hace smoke test.

No se despliega a producción sin confirmación explícita del usuario.

## Definition of Done

Una tarea termina cuando:

- [ ] `npm run build` pasa.
- [ ] `npm run check` pasa.
- [ ] `npm run lint` pasa.
- [ ] `npm test` pasa.
- [ ] La página se ve bien en 360, 768, 1024 y 1440 px.
- [ ] Se puede navegar con teclado y el foco es visible.
- [ ] Los formularios validan y muestran errores claros.
- [ ] Cada página tiene `title`, meta description y canonical.
- [ ] Open Graph y Twitter Card están configurados.
- [ ] `sitemap.xml` y `robots.txt` existen si el sitio es público.
- [ ] No hay errores en la consola del navegador.
- [ ] Lighthouse >= 90 en rendimiento, accesibilidad, SEO y buenas prácticas, o hay una excepción documentada.
- [ ] El preview de despliegue fue revisado y aprobado.

## Accesibilidad

- Objetivo: WCAG 2.2 AA.
- Contraste mínimo 4.5:1 para texto normal.
- Foco visible en todos los elementos interactivos.
- Labels asociados a inputs.
- Texto alternativo útil, no decorativo.
- Respetar `prefers-reduced-motion`.
- Tamaño táctil mínimo de 44x44 px.

## SEO

- Un `title` único por página.
- Meta description única y útil.
- URLs limpias y enlaces internos descriptivos.
- Datos estructurados cuando aporten valor.
- Sitemap y robots generados en el build.
- No bloquear el renderizado con JS innecesario.

## Rendimiento

- LCP < 2.5 s.
- INP < 200 ms.
- CLS < 0.1.
- Imágenes optimizadas y con dimensiones explícitas.
- Fuentes con `font-display: swap`.
- Evitar dependencias grandes sin justificación.

## Seguridad

- Nunca subir secretos al repositorio.
- Variables locales en `.env`; documentar en `.env.example`.
- Validar formularios también en servidor si hay backend.
- No usar HTML sin sanitizar.
- Revisar dependencias antes de añadirlas.

## Git

- Commits pequeños y descriptivos.
- No commitear `node_modules/`, `dist/`, `.env` ni artefactos de Playwright.
- Usar ramas para cambios grandes.

## Documentos

- `docs/web/brief.md`: objetivo, audiencia, alcance y criterios de éxito.
- `docs/web/plan.md`: fases, tareas y estado.
- `docs/web/architecture.md`: sitemap, stack, estructura y riesgos.
- `docs/web/design.md`: dirección visual y sistema de diseño.
- `docs/web/copy.md`: textos, CTAs y metadatos.
- `docs/web/qa.md`: pruebas, hallazgos y evidencias.

## Cómo empezar

1. Selecciona **web-lead** como agente primario.
2. Cuéntale el proyecto en lenguaje normal.
3. Revisa y aprueba el brief y el plan.
4. Deja que el equipo construya, pruebe y revise.
5. Autoriza el despliegue solo cuando el preview esté aprobado.
