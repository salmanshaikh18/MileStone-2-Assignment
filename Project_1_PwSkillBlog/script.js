document.addEventListener("DOMContentLoaded", function () {
  const addIcon = document.getElementById("addIcon");
  const addBlog = document.getElementById("addBlog");
  const closeBlog = document.getElementById("closeBlog");

  addIcon.addEventListener("click", () => {
    addBlog.style.display = "block";
    addBlog.style.display = "flex";
  });

  closeBlog.addEventListener("click", () => {
    addBlog.style.display = "none";
  });

  // read blog

  const readBlogBtn = document.getElementById("readBlogBtn");
  const imgSrc = document.getElementById("blogImg");
  const blogTitle = document.getElementById("blogTitle");
  const blogDescription = document.getElementById("blogDescription");
  const title = document.getElementById("title");
  console.log(title)
  const homePage = document.getElementById('homePage')
  const blogPage = document.getElementById('blog-page')

  readBlogBtn.addEventListener("click", () => {
    homePage.style.display = 'none'
    blogPage.style.display = 'block'
    title.innerText = blogTitle.innerText
    
  });

  const backArrow = document.getElementById('backArrow')
  backArrow.addEventListener('click', () => {
    homePage.style.display = 'block'
    blogPage.style.display = 'none'
  })
});

const addBlogBtn = document.getElementById('addBlogBtn')
const blogs = document.getElementById('blogs')

addBlogBtn.addEventListener('click', () => {
  const blog = document.createElement('div')
  blog.setAttribute('id', 'blog')
  blogs.appendChild(blog)
  const img = document.createElement('img')
  img.src = './assets/blog.PNG'
  img.setAttribute('id', 'blogImg')
  blog.appendChild(img)
  const h1 = document.createElement('h1')
  h1.innerHTML = 'Blog Title'
  h1.setAttribute('id', 'blogTitle')
  blog.appendChild(h1)
  const p = document.createElement('p')
  p.setAttribute('id', 'blogDescription')
  p.innerHTML = 'Blog Description'
  blog.appendChild(p)
  const button = document.createElement('button')
  button.setAttribute('id', 'readBlogBtn')
  button.innerHTML = 'Read'
  blog.appendChild(button)

  addBlog.style.display = 'none'
})