async function fetchDataAndDisplay() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const postsContainer = document.getElementById('posts-container');
      data.forEach((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  fetchDataAndDisplay();