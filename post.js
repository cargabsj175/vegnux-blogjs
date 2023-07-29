// Función para cargar el contenido completo del post
function loadPostContent(postId) {
  const postFile = `post${postId}.post`;

  // Leer el archivo de texto del post
  fetchPost(postFile)
    .then(post => displayPostContent(post))
    .catch(error => console.error(error));
}

// Función para obtener el contenido de un post desde el archivo de texto
async function fetchPost(filename) {
  const response = await fetch(`posts/${filename}`);
  const text = await response.text();

  // Parsear el contenido del post
  const post = parsePost(text);

  return post;
}

// Función para parsear el contenido de un post y extraer los campos
function parsePost(text) {
  const post = {
    id: '', // Nuevo campo para almacenar el ID del post
    title: '',
    date: '',
    author: '',
    category: [],
    tags: [],
    featuredimg: '',
    content: '',
  };

  const lines = text.trim().split('\n');
  lines.forEach(line => {
    const [key, value] = line.split(':').map(item => item.trim());
    if (key === '#postID') {
      post.id = value;
    } else if (key === '#title') {
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
    } else {
      post.content += line + '\n';
    }
  });

  return post;
}

// Función para mostrar el contenido completo del post en la página individual
function displayPostContent(post) {
  document.title = `Mi Blog - ${post.title}`;

  const postContentElement = document.createElement('div');
  postContentElement.classList.add('post-content');

  postContentElement.innerHTML = `
    <h2>${post.title}</h2>
    <p class="meta">Fecha: ${post.date} | Autor: ${post.author} | Categoría: ${post.category.join(', ')} | Etiquetas: ${post.tags.join(', ')}</p>
    <img class="featured-image" src="${post.featuredimg}" alt="Featured Image">
    <div id="post-content">${post.content}</div>
  `;

  // Asegurarse de que el elemento con el ID 'post-content' exista en la página antes de agregar el contenido
  const postContentContainer = document.getElementById('post-content');
  if (postContentContainer) {
    // Utilizar DOMParser para interpretar las etiquetas HTML en el contenido del post
    const parser = new DOMParser();
    const postContentHTML = parser.parseFromString(post.content, 'text/html').body.innerHTML;
    postContentContainer.innerHTML = postContentHTML;
  }

  // Agregar el contenido del post al documento
  document.body.appendChild(postContentElement);
}

// Obtener el ID del post desde la URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Cargar el contenido del post cuando la página termine de cargar
loadPostContent(postId);
