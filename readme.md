## This repository contains three exciting projects.

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

## Project 2: Project Name

Description: 

[Link to Project 2 Directory]

## Project 3: Project Name

Description: 

[Link to Project 3 Directory]

# html file
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
    <!-- link for adding icons from w3schools fontawesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

    <div id="homePage">
        <header>
            <nav>
                <h1>PwSkill Blog</h1>
            </nav>
        </header>
    
        <i id="addIcon" class="fa fa-plus-square-o" style="font-size:36px"></i>
    
        <div id="container">
            <div id="blogs">
                <div id="blog">
                    <img id="blogImg" src="./assets/blog.PNG" alt="blogImg">
                    <h1 id="blogTitle">Blog Title: Demo Article</h1>
                    <p id="blogDescription">Blog Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quam.</p>
                    <button id="readBlogBtn">Read</button>
                    <!-- <a id="readBlogBtn" href="./blogPage.html">Read</a> -->
                </div>
                <div id="blog"></div>
                <div id="blog"></div>
            </div>
            <div id="addBlog">
                <i id="closeBlog" class="fa fa-close" style="font-size:20px"></i>
                <input id="userUrl" type="text" placeholder="Enter Blog Post URL: " />
                <input id="userTitle" type="text" placeholder="Enter Blog Title: " />
                <input id="userDescription" type="text" placeholder="Enter Blog Description: " />
                <textarea id="userTextarea" name="" placeholder="Write..." id="" cols="30" rows="10"></textarea>
                <button id="addBlogBtn">Add Blog</button>
            </div>
        </div>
    </div>
    
   

    <div id="blog-page">
        <div class="topper">
            <h1>PWSkills Blog</h1>
        <i id="backArrow" class="fa fa-arrow-left" style="font-size:36px"></i>
        </div>
        
        <div class="container">
            <div class="blogPage">
                <div class="top">
                    <div class="topContent">
                        <h1 id="title">Lorem ipsum dolor sit amet.</h1>
                    <h2 id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, maxime.</h2>
                    </div>
                    <img src="./assets/blog.PNG" alt="">
                </div>
                <div class="bottom">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officia nihil voluptates sunt facilis, cupiditate maiores. Voluptate, at, maxime sit excepturi nesciunt ipsa consectetur perspiciatis nihil nisi non, eaque inventore facere. Autem soluta sint nemo, laborum aspernatur doloribus at exercitationem?</p>
                </div>
            </div>
        </div>
    </div>

    <script src="./script.js"></script>
</body>
</html>
```
