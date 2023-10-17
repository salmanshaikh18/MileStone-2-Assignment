## Project 1: Building PWSkills Blog using HTML, CSS, and JavaScript

Description: A Blog application called "PWSkills Blog" using HTML, CSS, and JavaScript. This application will allow users to add their own blogs and read any existing blog posts. To achieve this, all blog's data will be stored in the browser's LocalStorage.

-> The blog application should have two main pages: home page and blog page.

-> On the home page, users should be able to see a list of all existing blog posts with their titles and brief summaries.

-> Users should be able to click on a blog post to view its full content on a separate page.

-> On header there should be "+" icon to add new blog by clicking on that a modal should open.

-> The add blog modal should have a form with fields to input the blog title, blog poster, description and blog content.

-> Upon submitting the add blog form, the new blog post should be added to the list of existing blogs on the home page, and the data should be stored in the LocalStorage.

## 1.Home Page 👇
<img src="https://github.com/salmanshaikh18/MileStone-2-Assignment/blob/main/Project_1_PwSkillBlog/assets/1_HomePage.PNG" alt="HomePage"/>

## 2. Add Blog Model 👇
<img src="https://github.com/salmanshaikh18/MileStone-2-Assignment/blob/main/Project_1_PwSkillBlog/assets/2_AddABlogModel.PNG" alt="AddBlogModel" />


## 3. Read Blog Page 👇
<img src="https://github.com/salmanshaikh18/MileStone-2-Assignment/blob/main/Project_1_PwSkillBlog/assets/3_ReadBlogPage.PNG" alt="ReadBlogPage" />
[Link to Project 1 Directory]

# html file
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
    <!-- link for adding icons from w3schools fontawesome-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <body>
    <div id="homePage">
      <header>
        <nav>
          <h1>PwSkill Blog</h1>
        </nav>
      </header>

      <i id="addIcon" class="fa fa-plus-square-o" style="font-size: 40px"></i>

      <div id="container">
        <div id="blogs">
          <div id="blog">
            <div id="imgBox">
              <img
                id="blogImg"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                alt="blogImg"
              />
            </div>

            <h1 id="blogTitle">Blog Title: Demo Article</h1>
            <p id="blogDescription">
              Blog Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt, quam.
            </p>
            <button id="readBlogBtn">Read Blog</button>
          </div>
        </div>
        <div id="addBlog">
          <i id="closeBlog" class="fa fa-close" style="font-size: 30px"></i>
          <input id="userUrl" type="text" placeholder="Enter Blog Post URL: " />
          <input id="userTitle" type="text" placeholder="Enter Blog Title: " />
          <input
            id="userDescription"
            type="text"
            placeholder="Enter Blog Description: "
          />
          <textarea
            id="userTextarea"
            name=""
            placeholder="Write..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button id="addBlogBtn">Add Blog</button>
        </div>
      </div>
    </div>

    <div id="blog-page">
      <div class="topper">
        <h1>PWSkills Blog</h1>
        <i id="backArrow" class="fa fa-arrow-left" style="font-size: 36px"></i>
      </div>

      <div class="container">
        <div class="blogPage">
          <div class="top">
            <div class="topContent">
              <h1 id="title">Lorem ipsum dolor sit amet.</h1>
              <h2 id="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                maxime.
              </h2>
            </div>
            <img id="imgSrc" src="./assets/blog.PNG" alt="" />
          </div>
          <div class="bottom">
            <p id="textarea">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              officia nihil voluptates sunt facilis, cupiditate maiores.
              Voluptate, at, maxime sit excepturi nesciunt ipsa consectetur
              perspiciatis nihil nisi non, eaque inventore facere. Autem soluta
              sint nemo, laborum aspernatur doloribus at exercitationem?
            </p>
          </div>
        </div>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>

```
# CSS
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html , body{
    height: 100%;
    width: 100%;
}

body {
    background-color: black;
    color: #fff;
}

header nav a {
    color: blueviolet;
    padding: 5px 20px;
    text-decoration: none;
    text-align: center;
}

header nav a:hover {
    color: #fff;
    text-decoration: underline;
}

header {
    height: 10vh;
    background-color: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
}

#container {
    display: flex;
    align-items: center;
    height: 80vh;
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#blogs {
    height: 80vh;
    min-height: 80vh;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 5px;
}

#blog {
    border: 1px solid grey;
    height: 95%;
    width: 23%;
    min-width: 12rem;
    margin-left: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    gap: 10px;
    align-items: center;
    background-color: #fff;
    border: 2px solid grey;
    color: black;
    /* box-shadow: 2px 2px 2px grey, -2px -2px 2px grey; */
    box-shadow: 0 0 5px #fff;
    margin-bottom: 15px;
    overflow: hidden;
}

#blog h1 {
    font-size: 20px;
    margin: 2px 5px;
}

#blog p {
    font-size: 14px;
    margin: 2px 5px;
}

#imgBox {
    height: 50%;
    width: 95%;
    border-radius: 10px;
    overflow: hidden;
}

#blog img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    transition: 0.5s all ease;
}

#blog img:hover {
    scale: 1.2
}

#blog button {
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: salmon;
    background-color: rgb(245, 201, 196);
    cursor: pointer;
    font-size: 20px;
}

#blog button:hover {
    text-decoration: underline;
}

#addIcon {
    position: absolute;
    right: 0;
    cursor: pointer;
    margin: 10px 0;
    margin-right: 15px;
}

#addBlog {
    height: 50vh;
    position: absolute;
    width: 80vw;
    height: 80vh;
    border-radius: 20px;
    background-color: #dce4f1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    display: none;
}

#addBlog input {
    font-size: 16px;
    padding: 10px ;
    margin: 0 20px;
    border: none;
    outline: none;
}

#addBlog textarea {
    height: 40%;
    margin: 0 20px;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 10px;
}

#closeBlog {
    position: relative;
    display: flex;
    justify-content: end;
    color: blueviolet;
    cursor: pointer;
    padding-top: 10px;
    padding-right: 25px;
}

#addBlogBtn, #deleteBlogBtn {
    border-radius: 10px;
    padding: 10px;
    margin: 0 20px;
    background-color: blueviolet;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: none;
    outline: none;
}

#addBlogBtn:hover {
    text-decoration: underline;
}

/* blog page styling */

.blogPage {
    height: 80vh;
    width: 90vw;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#blog-page>h1 {
    text-align: center;
    margin: 10px;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.top {
    background-color: blueviolet;
    height: 50%;
    color: black;
    width: 97%;
    display: flex;
    /* width: 90%; */
    margin: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}

.top .topContent {
    margin: 15px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.top .topContent h1 {
    margin-bottom: 15px;
}

.top img {
    margin: 20px;
    border-radius: 10px;
}

.bottom {
    height: 50%;
    color: black;
    margin: 20px;
}

#blog-page {
    display: none;
}

#backArrow {
    position: relative;
    cursor: pointer;
}

.topper {
    display: flex;
    justify-content: space-between;
    margin: 10px 40px;
}

#deleteBlogBtn {
    position: absolute;
    bottom: 88px;
}

@media (max-width: 450px) {
    #blog {
        width: 80%;
        margin: 10px 0;
        display: flex;
        margin-top: 40px;
    }
    #blogs {
        justify-content: center;
        align-items: center;
    }
    #readBlogBtn {
        margin-top: 5px;
    }
}
```
# JavaScript
```
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

```