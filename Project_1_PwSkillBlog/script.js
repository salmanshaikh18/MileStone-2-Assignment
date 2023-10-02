const addIcon = document.getElementById('addIcon')
const addBlog = document.getElementById('addBlog')
const closeBlog = document.getElementById('closeBlog')

addIcon.addEventListener('click', () => {
    addBlog.style.display = 'block'
    addBlog.style.display = 'flex'
})

closeBlog.addEventListener('click', () => {
    addBlog.style.display = 'none'
})

// read blog

const readBlogBtn = document.getElementById('readBlogBtn')
const imgSrc = document.getElementById('blogImg')
const blogTitle = document.getElementById('blogTitle')
const blogDescription = document.getElementById('blogDescription')

readBlogBtn.addEventListener('click', () => {
    const title = document.getElementById('title')
    title.innerHTML = 'salman'
    document.body.style.background = 'red'
})