// Obtener el elemento donde se mostrarán los posts
const postContainer = document.getElementById('post-container');

// Función para cargar los posts dinámicamente
function loadPosts() {
  // Supongamos que tienes una lista de nombres de archivos de los posts
  const postFiles = [
    'post1.post',
    'post2.post',
    // Agrega aquí más nombres de archivos según necesites
  ];

  // Leer cada archivo de texto
  Promise.all(postFiles.map(filename => fetchPost(filename)))
    .then(posts => displayPosts(posts))
    .catch(error => console.error(error));
}

// Función para obtener el contenido de un post desde el archivo de texto
async function fetchPost(filename) {
  const response = await fetch(`posts/${filename}`);
  const text = await response.text();

  // Parsear el contenido del post
  const post = parsePost(text);

  // Agregar una propiedad "id" al post para identificarlo
  post.id = extractPostId(text);

  return post;
}

// Función para extraer el ID del post desde el contenido del archivo
function extractPostId(text) {
  const match = text.match(/#postID:\s*(\d+)/i);
  return match ? match[1] : null;
}

// Función para parsear el contenido de un post y extraer los campos
function parsePost(text) {
  const post = {
    title: '',
    date: '',
    author: '',
    category: [],
    tags: [],
    featuredimg: '',
    content: '',
  };

  const lines = text.trim().split('\n');
  let isContent = false; // Variable para determinar si estamos dentro del contenido del post

  lines.forEach(line => {
    if (line === '[blog_start]') {
      isContent = true;
    } else if (line === '[blog_end]') {
      isContent = false;
    } else if (!isContent) {
      const [key, value] = line.split(':').map(item => item.trim());
      if (key === '#title') {
        post.title = value;
      } else if (key === '#date') {
        post.date = value;
      } else if (key === '#author') {
        post.author = value;
      } else if (key === '#category') {
        post.category = value.split(',').map(item => item.trim());
      } else if (key === '#tags') {
        post.tags = value.split(',').map(item => item.trim());
      } else if (key === '#featuredimg') {
        post.featuredimg = value;
      }
    } else {
      post.content += line + '\n';
    }
  });

  return post;
}

// Función para mostrar los posts resumidos en el sitio web
function displayPosts(posts) {
  // Limpiar el contenedor antes de mostrar los nuevos posts
  postContainer.innerHTML = '';

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p class="meta">Fecha: ${post.date} | Autor: ${post.author} | Categoría: ${post.category.join(', ')} | Etiquetas: ${post.tags.join(', ')}</p>
      <img class="thumbnail" src="${post.featuredimg}" alt="Thumbnail">
      <p>${getSummary(post.content)}</p>
      <a href="post.html?id=${post.id}">Leer más</a>
    `;
    postContainer.appendChild(postElement);
  });
}

// Función para obtener un resumen del contenido del post (primeras 20 palabras)
function getSummary(content) {
  const words = content.split(' ');
  const summary = words.slice(0, 20).join(' ');
  const hasMoreContent = words.length > 20;
  return `${summary}${hasMoreContent ? '...' : ''}`;
}

// Cargar los posts cuando la página termine de cargar
window.onload = () => {
  loadPosts();
};
