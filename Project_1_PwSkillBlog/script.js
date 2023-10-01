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