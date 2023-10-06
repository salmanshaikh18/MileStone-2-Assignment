// document.addEventListener("DOMContentLoaded", function () {

// });

const addIcon = document.getElementById("addIcon");
const addBlog = document.getElementById("addBlog");
const closeBlog = document.getElementById("closeBlog");
const readBlogBtn = document.getElementById("readBlogBtn");

addIcon.addEventListener("click", () => {
  addBlog.style.display = "block";
  addBlog.style.display = "flex";
});

closeBlog.addEventListener("click", () => {
  addBlog.style.display = "none";
});


readBlogBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  blogPage.style.display = "block";
  title.innerText = blogTitle.innerText;
});

const backArrow = document.getElementById("backArrow");
backArrow.addEventListener("click", () => {
  homePage.style.display = "block";
  blogPage.style.display = "none";
});


const imgSrc = document.getElementById("blogImg");
const blogTitle = document.getElementById("blogTitle");
const blogDescription = document.getElementById("blogDescription");
const title = document.getElementById("title");
console.log(title);
const homePage = document.getElementById("homePage");
const blogPage = document.getElementById("blog-page");

const addBlogBtn = document.getElementById("addBlogBtn");
const blogs = document.getElementById("blogs");

const userUrl = document.getElementById("userUrl");
const userTitle = document.getElementById("userTitle");
const userDescription = document.getElementById("userDescription");
const userTextarea = document.getElementById("userTextarea");

addBlogBtn.addEventListener("click", () => {
  const blog = document.createElement("div");
  blog.setAttribute("id", "blog");
  blogs.appendChild(blog);
  const imgBox = document.createElement("div")
  imgBox.setAttribute('id', 'imgBox');
  blog.appendChild(imgBox)
  const img = document.createElement("img");
  img.src = userUrl.value;
  img.setAttribute("id", "blogImg");
  imgBox.appendChild(img);
  const h1 = document.createElement("h1");
  h1.innerHTML = userTitle.value;
  h1.setAttribute("id", "blogTitle");
  blog.appendChild(h1);
  const p = document.createElement("p");
  p.setAttribute("id", "blogDescription");
  p.innerHTML = userDescription.value;
  blog.appendChild(p);
  const button = document.createElement("button");
  button.setAttribute("id", "readBlogBtn");
  button.innerHTML = "Read";
  blog.appendChild(button);

  addBlog.style.display = "none";
 userUrl.value =''
 userTitle.value =''
 userDescription.value = ''

});
