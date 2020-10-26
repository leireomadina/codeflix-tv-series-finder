![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Ejercicio de evaluación final módulo 2 - Buscador de series
## Leire Ordeñana Madina - alumna de Adalab

Hola :)

Soy Leire y este es mi proyecto de evaluación final del módulo 2 en Adalab, donde hemos trabajado especialmente con JavaScript.

El trabajo consiste en crear una aplicación web de búsqueda de series de TV, donde además se permite al usuario marcar y desmarcar series como favoritas a la vez que se guardan en su navegador.

Para poner en práctica este proyecto he utilizado HTML5 y CSS3 para maquetar la página, además del preprocesador SASS y tecnologías de automatización como Gulp, NodeJS, npm y el adalab web starter kit. Pero sobre todo se ha profundizado en Javascript para aportar interactividad a la página. De cara a obtener los datos de las series,se ha utilizado una API abierta llamada TVMaze.


## Pasos seguidos: fases y tareas

Estas son las fases y pasos que se seguido para completar el proyecto de manera organizada:

- [x] Configuración previa del proyecto
    - [x] Clonar repo
    - [x] Preparar adalab web starter kit
    - [x] Activar Github Pages
- [x] Estructura básica HTML
- [x] Conectar con API
  - [x] Fetch: obtener datos del server
  - [x] Parsear: adaptar/transformar los datos del server
  - [x] Buscar series por el nombre
- [x] Pintar series en HTML
    - [x] Crear HTML de guía (provisional)
    - [x] Contenido dinámico mediante JS: pintar varias series
    - [x] Imagen de error cuando no exista en la base de datos
- [X] Darle estilos mínimos en CSS
- [x] Añadir y quitar favoritos de series
    - [x] Escuchar el evento en cada serie de tv
    - [x] Identificar el elemento seleccionado
    - [x] Guardar los favoritos en un array
    - [x] Añadir la clase de favorito
    - [x] Quitar la clase de favorito
- [x] Sección favoritos: pintar
    - [x] HTML de la sección favoritos
    - [x] Maquetación mínima con CSS de la sección de favoritos
    - [x] Pintar series favoritas en nueva sección de manera dinámica (JS): añadir
    - [x] Crear array de ids de favoritos
    - [x] Quitar series de la lista de favoritas
- [x] Cachear las series favoritas en localStorage
    - [x] Guardar la lista de favoritos en local storage
    - [x] Recuperar la información
- [x] Estilos CSS
    - [x] Sección favoritos en parte izquierda pantalla
- [x] Bonus: borrar favoritos
    - [x] Botón de borrar favoritos
    - [ ] Serie con clase de favorita tras nueva búsqueda
    - [ ] Botón borrar todos los favoritos
- [x] Bonus: afinar la maquetación
- [x] Refractorizar código final
- [x] Limpiar código final
- [ ] Bonus: readme.md
    - [x] Información mínima: presentación y pasos seguidos
    - [ ] Mejorar y ampliar la info


### Pasos para arrancar el proyecto:

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Después de ejecutar `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.


## Estructura de carpetas

La estructura de carpetas que he seguido se asemeja a la siguiente:

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |  └─ events.js
 ├─ scss
 |  ├─ components
 |  ├─ core
 |  ├─ layout
 |  └─ pages
 └─ html
    └─ partials
```
