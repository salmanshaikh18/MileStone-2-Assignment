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
