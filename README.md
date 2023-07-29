# vegnux-blogjs

Este es un proyecto llamado "vegnux-blogjs" que consiste en un blog desarrollado en JavaScript. A continuación, se presenta una descripción de los archivos y directorios que conforman este proyecto:

## Estructura del Proyecto

El proyecto "vegnux-blogjs" es un blog desarrollado en JavaScript que permite mostrar y leer publicaciones. Contiene los siguientes archivos y directorios:

- **posts**: Este directorio contiene los archivos de texto que representan las publicaciones del blog. Cada archivo tiene una estructura especial con información como el título, fecha, autor, categoría, etiquetas, imagen destacada y el contenido del post.

- **index.html**: Este es el archivo principal del blog, donde se muestra una lista resumida de las publicaciones. Cada publicación se muestra con su título, fecha, autor, categoría y etiquetas, junto con una imagen destacada y un resumen del contenido. Los usuarios pueden hacer clic en "Leer más" para acceder al contenido completo de una publicación.

- **post.html**: Este archivo muestra el contenido completo de una publicación individual. Cuando los usuarios hacen clic en "Leer más" en la página de inicio, son redirigidos aquí para leer la publicación completa.

- **main.js**: Es un archivo JavaScript que carga las publicaciones dinámicamente desde los archivos de texto y muestra la lista resumida en la página de inicio.

- **post.js**: Este archivo se encarga de cargar y mostrar el contenido completo de una publicación individual cuando se accede a la página de un post específico.

- **styles.css**: Un archivo CSS que contiene los estilos de diseño para el blog, asegurando una presentación visual agradable y consistente.

## Cómo Funciona

El proyecto utiliza JavaScript para cargar dinámicamente las publicaciones desde los archivos de texto ubicados en el directorio "posts". Cada publicación tiene su propia estructura especial con metadatos como título, fecha, autor, categoría, etiquetas, imagen destacada y el contenido del post. Los archivos de texto siguen una sintaxis especial definida en la sección "[sintáxis de los archivos .post]".

El archivo "index.html" muestra una lista de las publicaciones disponibles con resúmenes de sus contenidos. Cuando los usuarios hacen clic en "Leer más", se redirigen a "post.html" donde pueden leer la publicación completa.

## Cómo Usar el Proyecto

1. Clona el repositorio de GitHub.

2. Abre "index.html" en tu navegador para ver la lista de publicaciones resumidas.

3. Al hacer clic en "Leer más" de una publicación, se abrirá "post.html" con el contenido completo de esa publicación.

## Notas

Este proyecto es solo una estructura de ejemplo y se asume que hay más publicaciones en los archivos de texto dentro del directorio "posts". En una implementación real, podrías agregar más publicaciones o mejorar la funcionalidad según tus necesidades.

## Cómo Probar el Proyecto Localmente

Si deseas probar el proyecto "vegnux-blogjs" en tu computadora local, sigue estos pasos:

1. **Instalar XAMPP o Herramienta Similar**: Asegúrate de tener XAMPP (o una herramienta similar) instalada en tu computadora. XAMPP es un paquete de software gratuito que proporciona un servidor web Apache, MySQL y PHP. Puedes descargar XAMPP desde su sitio web oficial: [https://www.apachefriends.org/](https://www.apachefriends.org/).

2. **Clonar el Repositorio**: Clona el repositorio de GitHub del proyecto "vegnux-blogjs" en el directorio web raíz de XAMPP (por lo general, se encuentra en la carpeta "htdocs").

3. **Iniciar XAMPP**: Inicia el panel de control de XAMPP y asegúrate de que los servicios de Apache y MySQL estén en ejecución.

4. **Acceder al Proyecto**: Abre tu navegador web y accede al proyecto "vegnux-blogjs" local visitando la URL "http://localhost/vegnux-blogjs/" (o la ruta correspondiente si has clonado el repositorio con un nombre diferente).

5. **Explorar el Blog**: Ahora puedes explorar el blog y leer las publicaciones. Haz clic en "Leer más" para ver el contenido completo de una publicación individual.

**Nota**: *Recuerda que este README.md es generado automáticamente, y si el proyecto ha cambiado significativamente, asegúrate de mantenerlo actualizado con la información más reciente.*

