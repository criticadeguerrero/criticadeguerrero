# Crítica de Guerrero

Proyecto de reconstrucción de Crítica de Guerrero, un medio de noticias con enfoque principal en Guerrero, México.

## Estado actual

- Existe una base estática para la portada, desplegada con Netlify.
- `old_index.html` conserva una captura de la portada anterior; es archivo histórico y no es el sitio activo.
- La planeación del proyecto está en `docs/`.
- El siguiente objetivo principal es crear un sistema seguro y sencillo para que una persona sin conocimientos de programación pueda publicar notas y fotografías.

## Principios de trabajo

- El español es el idioma editorial principal.
- El inglés será una edición complementaria y revisada; no sustituirá automáticamente el periodismo en español.
- Las imágenes públicas se optimizan para que el sitio cargue rápido; los originales de alta resolución se conservan por separado en un archivo privado.
- Las cuentas de dominio, recuperación, facturación y publicación deben estar bajo control del medio, no depender de una sola cuenta personal.
- Nunca se guardan contraseñas, códigos de recuperación, llaves API, tokens, datos de pago ni configuraciones privadas en este repositorio.

## Documentación

- [Roadmap](docs/ROADMAP.md)
- [Resumen del producto](docs/PRODUCT_BRIEF.md)
- [Arquitectura de información](docs/INFORMATION_ARCHITECTURE.md)
- [Sistema de diseño](docs/DESIGN_SYSTEM.md)
- [Modelo de contenido](docs/CONTENT_MODEL.md)
- [Arquitectura técnica](docs/TECHNICAL_ARCHITECTURE.md)
- [Operación y propiedad](docs/OPERATIONS_AND_OWNERSHIP.md)
- [Estrategia de medios](docs/MEDIA_STRATEGY.md)
- [Plan de internacionalización](docs/INTERNATIONALIZATION_PLAN.md)
- [Plan de recuperación desde Wayback](docs/WAYBACK_CONTENT_RECOVERY_PLAN.md)
- [Plan de hosting y crecimiento](docs/HOSTING_AND_GROWTH_PLAN.md)

## Prioridades inmediatas

1. Verificar el dominio de producción y el despliegue en Netlify.
2. Integrar autenticación y un panel de publicación en español.
3. Crear plantillas para notas, secciones y archivos.
4. Implementar el flujo de imágenes públicas y archivo privado de originales.
5. Publicar y probar varias notas reales antes de ampliar la recuperación histórica.
