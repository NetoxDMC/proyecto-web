# Proyecto web

Base para construir sitios web con **Astro 7**, **Tailwind CSS 4**, **Playwright**, **ESLint** y **Prettier**.

## Requisitos

- Node.js 22 o superior.
- Git.
- npm.

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor local en http://localhost:4321
npm run build     # Build de producción
npm run preview   # Preview del build
npm run check     # Type-check de Astro
npm run lint      # ESLint
npm run format    # Prettier
npm test          # Playwright
npm run test:ui   # Playwright en modo UI
```

## Equipo de agentes

El proyecto está pensado para trabajarse con el combo de agentes web:

- **web-lead**: orquesta el proyecto.
- **web-architect**: sitemap, stack y estructura.
- **web-designer**: dirección visual y sistema de diseño.
- **web-copywriter**: textos, CTAs y SEO on-page.
- **web-builder**: implementación.
- **web-qa**: pruebas en navegador y tests.
- **web-reviewer**: revisión de código y seguridad.
- **web-deployer**: despliegue y smoke test.

Selecciona **web-lead** como agente primario y cuéntale el proyecto.

## Documentación

Las decisiones del proyecto se guardan en `docs/web/`:

- `brief.md`
- `plan.md`
- `architecture.md`
- `design.md`
- `copy.md`
- `qa.md`

## Estructura

```text
src/
├── components/
├── layouts/
├── pages/
├── styles/
└── content/

public/
tests/
docs/web/
```

## Calidad

Antes de dar una tarea por terminada:

```bash
npm run check
npm run lint
npm run build
npm test
```

La checklist completa está en `AGENTS.md`.

## Despliegue

El proyecto puede desplegarse en Vercel, Netlify o Cloudflare Pages. Antes de producción:

1. Ejecutar build y tests.
2. Revisar el preview.
3. Comprobar formularios, enlaces, HTTPS y metadatos.
4. Autorizar el despliegue.
