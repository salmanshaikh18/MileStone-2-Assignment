const readBlogBtn = document.getElementById("readBlogBtn");
const blogPage = document.getElementById("blog-page");
const homePage = document.getElementById("homePage");
const backArrow = document.getElementById("backArrow");
const addIcon = document.getElementById("addIcon");
const addBlog = document.getElementById("addBlog");
const closeBlog = document.getElementById("closeBlog");
const addBlogBtn = document.getElementById("addBlogBtn");

readBlogBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  blogPage.style.display = "block";
});

backArrow.addEventListener("click", () => {
  blogPage.style.display = "none";
  homePage.style.display = "block";
});

addIcon.addEventListener("click", () => {
  addBlog.style.display = "flex";
});

closeBlog.addEventListener("click", () => {
  addBlog.style.display = "none";
});

// Load the saved blog data when the page laods
window.addEventListener("load", () => {
  // Retrieve the saved blod from Local Storage
  const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Iterate through the saved blogs and recreate the elements
  for (const savedBlog of savedBlogs) {
    createBlogElement(savedBlog);
  }
});

const userUrl = document.getElementById("userUrl");
const userTitle = document.getElementById("userTitle");
const userDescription = document.getElementById("userDescription");
const userTextarea = document.getElementById("userTextarea");

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
  console.log(savedBlogs);

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
  (userTextarea.value = ""), (addBlog.style.display = "none");
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
  deleteBlog.setAttribute("id", "deleteBlogBtn");
  deleteBlog.innerHTML = "Delete Blog";
  blog.appendChild(deleteBlog);

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
    imgSrc.src = blogData.url; // Update the image src
    textarea.innerHTML = blogData.textarea;
  });
};

const blogImg = document.getElementById("blogImg");

readBlogBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  blogPage.style.display = "block";
  title.innerText = blogTitle.innerText; // Set the title to the specific blog's title
  description.innerText = blogDescription.innerText; // Set the blog description to the specific blog's description
  imgSrc.src = blogImg.src; // Update the image src
});
