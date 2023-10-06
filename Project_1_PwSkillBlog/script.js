// Load the saved blog data when the page laods
window.addEventListener("load", () => {
  // Retrieve the saved blod from Local Storage
  const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Iterate through the saved blogs and recreate the elements
  for (const savedBlog of savedBlogs) {
    createBlogElement(savedBlog);
  }
});

const imgSrc = document.getElementById("imgSrc");
console.log(imgSrc)
const blogTitle = document.getElementById("blogTitle");
const blogDescription = document.getElementById("blogDescription");
const title = document.getElementById("title");
const addBlogBtn = document.getElementById("addBlogBtn");
const blogs = document.getElementById("blogs");
const userUrl = document.getElementById("userUrl");
const userTitle = document.getElementById("userTitle");
const userDescription = document.getElementById("userDescription");
const userTextarea = document.getElementById("userTextarea");
const description = document.getElementById('description')
const textarea = document.getElementById('textarea')
const readBlogBtn = document.getElementById('readBlogBtn')

addBlogBtn.addEventListener("click", () => {
  // create a blog object to store the data
  const blogData = {
    url: userUrl.value,
    title: userTitle.value,
    description: userDescription.value,
    textarea: userTextarea.value,
  };

  // Retrieve the saved blogs from Local Storage
  const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Add the new blog to the array of saved blogs
  savedBlogs.push(blogData);

  // Add the updated list of blogs back to Local Storage
  localStorage.setItem("blogs", JSON.stringify(savedBlogs));

  // Create the blog element and append it to the DOM
  createBlogElement(blogData);

  // Clear the input fields
  userUrl.value = "";
  userTitle.value = "";
  userDescription.value = "";
  description.value = "",

  addBlog.style.display = "none";
});

const createBlogElement = (blogData) => {
  const blog = document.createElement("div");
  blog.setAttribute("id", "blog");
  blogs.appendChild(blog);

  const imgBox = document.createElement("div");
  imgBox.setAttribute("id", "imgBox");
  blog.appendChild(imgBox);

  const img = document.createElement("img");
  img.src = blogData.url;
  img.setAttribute("id", "blogImg");
  imgBox.appendChild(img);

  const h1 = document.createElement("h1");
  h1.innerHTML = blogData.title;
  h1.setAttribute("id", "blogTitle");
  blog.appendChild(h1);

  const p = document.createElement("p");
  p.setAttribute("id", "blogDescription");
  p.innerHTML = blogData.description;
  blog.appendChild(p);

  const button = document.createElement("button");
  button.setAttribute("id", "readBlogBtn");
  button.innerHTML = "Read Blog";
  blog.appendChild(button);

  const deleteBlog = document.createElement("button");
  deleteBlog.setAttribute("id", "deleteBlog");
  deleteBlog.innerHTML = "Delete Blog";
  blog.appendChild(deleteBlog);
  deleteBlog.style.background = "rgb(233, 85, 85)";
  deleteBlog.style.color = "#fff";

  // Add event listener to the delete button
  deleteBlog.addEventListener("click", () => {
    // Remove the blog from the Dom
    blogs.removeChild(blog);

    // Remove the blog from local storage
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = savedBlogs.filter((b) => b.title !== blogData.title);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  });

  button.addEventListener("click", () => {
    homePage.style.display = "none";
    blogPage.style.display = "block";
    title.innerText = blogData.title; // Set the title to the specific blog's title
    description.innerText = blogData.description; // Set the blog description to the specific blog's description
    imgSrc.src = blogData.url // Update the image src
    textarea.innerHTML = blogData.textarea
  });

  
};

const blogImg = document.getElementById('blogImg')
// const blogDescription = document.getElementById('blogDescription')
// const blogTitle = document.getElementById('blogTitle')

readBlogBtn.addEventListener('click', () => {
  homePage.style.display = "none";
    blogPage.style.display = "block";
    title.innerText = blogTitle.innerText // Set the title to the specific blog's title
    description.innerText = blogDescription.innerText // Set the blog description to the specific blog's description
    imgSrc.src = blogImg.src // Update the image src
    // textarea.innerHTML = 
})



const addIcon = document.getElementById("addIcon");
const addBlog = document.getElementById("addBlog");
const closeBlog = document.getElementById("closeBlog");

const homePage = document.getElementById("homePage");
const blogPage = document.getElementById("blog-page");

addIcon.addEventListener("click", () => {
  addBlog.style.display = "block";
  addBlog.style.display = "flex";
});

closeBlog.addEventListener("click", () => {
  addBlog.style.display = "none";
});

const backArrow = document.getElementById("backArrow");
backArrow.addEventListener("click", () => {
  homePage.style.display = "block";
  blogPage.style.display = "none";
});
