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

## Configuración del sitio

- `PUBLIC_SITE_URL` en `.env` define el dominio canónico y el sitemap. Sin valor se usa `https://example.com`.
- `BASE_PATH` define la subruta de despliegue. Para GitHub Pages de proyecto usa `/nombre-del-repositorio`.
- `robots.txt` se genera en el build desde `src/pages/robots.txt.ts` y apunta al sitemap correcto.
- El sitemap se genera en el build con `@astrojs/sitemap` (`sitemap-index.xml`).

## Backend

El starter es estático. Si el proyecto necesita API, cuentas, pagos o datos, `web-backend` añade el adapter/SSR, el esquema, los endpoints y las migraciones. El contrato y las variables se documentan en `docs/web/backend.md`.

## Equipo de agentes

El proyecto está pensado para trabajarse con el combo de agentes web:

- **web-lead**: orquesta el proyecto.
- **web-architect**: sitemap, stack y estructura.
- **web-designer**: dirección visual y sistema de diseño.
- **web-copywriter**: textos, CTAs y SEO on-page.
- **web-backend**: API, datos, auth, permisos, pagos y seguridad.
- **web-builder**: implementación de UI.
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
- `backend.md`
- `qa.md`
- `deploy.md`

## Estructura

```text
src/
├── components/
├── layouts/
├── pages/
│   └── api/
├── actions/
├── server/
├── db/
├── types/
├── styles/
└── content/

public/
tests/
tests/backend/
docs/web/
```

## Calidad

Antes de dar una tarea por terminada:

```bash
npm run check
npm run lint
npm run build
npm test
npm audit
```

La checklist completa está en `AGENTS.md`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/pages.yml` ejecuta checks, tests, build y publica en GitHub Pages en cada push a `main`.

1. Crea un repositorio en GitHub.
2. Sube el proyecto a la rama `main`.
3. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**.
4. El workflow calcula `PUBLIC_SITE_URL` y `BASE_PATH` automáticamente:
   - Repo de proyecto: `https://<usuario>.github.io/<repo>/`, con `BASE_PATH=/<repo>`.
   - Repo `<usuario>.github.io`: `https://<usuario>.github.io/`, con `BASE_PATH=/`.
5. El primer despliegue puede tardar unos minutos. Revisa la pestaña **Actions**.

Para otros destinos (Vercel, Netlify o Cloudflare Pages), la checklist está en `docs/web/deploy.md`.
