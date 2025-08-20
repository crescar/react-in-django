# React + Django Integration

Este proyecto integra una aplicación React moderna dentro de un backend Django clásico, permitiendo desarrollo fullstack eficiente.

## Estructura principal
- **Django** gestiona el backend, rutas, y sirve archivos estáticos.
- **React** se desarrolla en la carpeta `ui/` y se transpila a JavaScript en `static/js/` usando esbuild.
- **LiveReload** refresca el navegador automáticamente al detectar cambios en frontend o plantillas.

## Requisitos
- Python 3 y pip
- Node.js y npm
- Entorno virtual Python (recomendado)

## Instalación
1. Instala dependencias Python:
   ```sh
   python -m venv venv
   venv/Scripts/activate  # o source venv/bin/activate en Linux/Mac
   pip install -r requirements.txt
   ```
2. Instala dependencias Node:
   ```sh
   npm install
   ```

## Desarrollo
Para desarrollo con autorecarga de backend y frontend:
```sh
npm run dev
```
Esto ejecuta:
- Compilación y watch de React (`esbuild`)
- Servidor Django con autoreload (`nodemon`)
- LiveReload para refresco automático del navegador

Abre tu navegador en `http://localhost:8000/`.

## Estructura de carpetas
- `ui/` — Código fuente React (TypeScript/JSX)
- `static/js/` — Bundle generado para el navegador
- `templates/` — Plantillas Django (HTML)

## Notas
- El archivo principal de React es `ui/index.tsx`.
- El HTML base debe incluir `<div id="app"></div>` y el script generado en `static/js/index.js`.
- Puedes modificar los scripts de npm según tus necesidades.

## Uso de Jinja2 en la integración con React

En este proyecto, Jinja2 puede ser utilizado como motor de plantillas para renderizar el HTML base que carga la aplicación React. Sus ventajas principales son:

- Permite inyectar variables de Django (por ejemplo, rutas, datos iniciales, configuración) directamente en el HTML que usará React.
- Facilita la gestión de plantillas reutilizables y la extensión de layouts, útil si tu app React comparte estructura con otras vistas Django.
- Puedes usar lógica condicional y bucles en el HTML base antes de que React tome el control del frontend.

**Ejemplo de uso:**
```html
<!-- templates/index/index.html -->
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="/static/js/index.js"></script>
    {# Puedes inyectar variables así: #}
    <script>
      window.INITIAL_DATA = {{ initial_data|tojson }};
    </script>
  </body>
</html>
```

Así, Jinja2 ayuda a conectar el backend Django con el frontend React, permitiendo pasar datos y configurar el entorno inicial de la SPA.

---
¡Listo para desarrollar React dentro de Django con autorecarga y build moderno!
