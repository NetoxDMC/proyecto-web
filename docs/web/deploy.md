# Despliegue

## Estado

- Build de producción: OK.
- `check`, `lint` y tests: OK.
- Smoke test local del build: OK (home, `robots.txt` y `sitemap-index.xml` responden 200).
- Build con `BASE_PATH=/proyecto-web`: OK (canonical, `robots.txt` y sitemap bajo la subruta).
- Plataforma: **GitHub Pages**.
- Repositorio: https://github.com/NetoxDMC/proyecto-web
- URL publicada: https://netoxdmc.github.io/proyecto-web/
- Workflow de Pages: correcto.
- Smoke test publicado: home 200, canonical, CSS, `robots.txt` y sitemap correctos; consola sin errores.
- Producción: desplegada en GitHub Pages.

## Antes de desplegar

- [ ] `npm run check`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `npm audit --audit-level=high`
- [ ] `PUBLIC_SITE_URL` con el dominio real.
- [ ] `BASE_PATH` con la subruta real si aplica.
- [ ] `robots.txt` generado con el sitemap correcto.
- [ ] Preview revisado y aprobado.
- [ ] Autorización explícita para producción.

## Variables de entorno

| Variable | Ejemplo | Entorno |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | `https://usuario.github.io` | Producción y preview |
| `BASE_PATH` | `/proyecto-web` | GitHub Pages de proyecto |

No subas `.env` al repositorio. Los secretos de backend van solo en el panel de la plataforma.

## Opciones de plataforma

### Vercel

1. Importar el repositorio en `vercel.com/new`.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Añadir `PUBLIC_SITE_URL`.
6. Desplegar primero un preview.
7. CLI opcional: `npx vercel` para preview; `npx vercel --prod` solo tras aprobación.

### Netlify

1. Importar el repositorio en Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Añadir `PUBLIC_SITE_URL`.
5. CLI opcional: `npx netlify deploy --build` para preview; `npx netlify deploy --build --prod` solo tras aprobación.

### Cloudflare Pages

1. Conectar el repositorio en Cloudflare Pages.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Añadir `PUBLIC_SITE_URL`.
6. CLI opcional: `npx wrangler pages deploy dist` solo tras aprobación.

### GitHub Pages

El workflow `.github/workflows/pages.yml` está preparado para publicar en cada push a `main`.

1. Crear el repositorio remoto y subir la rama `main`.
2. En **Settings → Pages**, usar **GitHub Actions** como fuente.
3. El workflow ejecuta `check`, `lint`, tests, build y despliegue.
4. Calcula automáticamente:
   - `PUBLIC_SITE_URL=https://<owner>.github.io`
   - `BASE_PATH=/<repo>` para un repo de proyecto, o `/` para `<owner>.github.io`.
5. `robots.txt` se genera desde `src/pages/robots.txt.ts` con la URL correcta del sitemap.
6. Comprobar la URL publicada y el estado del workflow en **Actions**.

URL esperada para un repo de proyecto:

```text
https://<owner>.github.io/<repo>/
```

## Smoke test después del despliegue

- [ ] Home responde 200 por HTTPS.
- [ ] Título, canonical, Open Graph y Twitter Card correctos.
- [ ] `robots.txt` y `sitemap-index.xml` accesibles.
- [ ] Enlaces internos y externos funcionan.
- [ ] Formularios y flujos críticos funcionan.
- [ ] Consola sin errores.
- [ ] Página 404 correcta.
- [ ] La versión desplegada corresponde al commit esperado.

## Rollback

- Vercel, Netlify o Cloudflare: promover el despliegue anterior desde el panel.
- Git: revertir el commit problemático y volver a desplegar.
- Si hay backend: revertir también la migración correspondiente si es seguro.

## Autorización

No se despliega a producción sin confirmación explícita del usuario. El preview puede desplegarse antes para revisión.
