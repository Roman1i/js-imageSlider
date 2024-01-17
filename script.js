const images = [
    'https://www.fonstola.ru/pic/202212/800x600/www.fonstola.ru.1671066243.4159.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png',
    'https://wallpapersmug.com/download/800x600/3ff1f0/colorful-galaxy-digital-art.jpg'
]

let currentImageId = 0

const pageImage = document.querySelector('.image')
const navPoints = document.querySelector('.navigationPoints')
const prevBtn = document.querySelector('.previosImage')
const nextBtn = document.querySelector('.nextImage')

for (let i = 0; i < images.length; i++) {
    const newPoint = document.createElement('div')
    newPoint.classList.add('point')
    newPoint.setAttribute('data-id', i)
    newPoint.addEventListener('click', () => {
        setActive(newPoint.getAttribute('data-id'))
    })
    navPoints.appendChild(newPoint)
}

loadImage(currentImageId)
navPoints.children[0].classList.add('active')

prevBtn.addEventListener('click', () => {
    currentImageId--
    if (currentImageId < 0) {
        currentImageId = navPoints.children.length - 1
    }
    setActive(currentImageId.toString())
})

nextBtn.addEventListener('click', () => {
    currentImageId++
    if (currentImageId === navPoints.children.length) {
        currentImageId = 0
    }
    setActive(currentImageId.toString())
})

function loadImage(id) {
    pageImage.innerHTML = `
        <img class="picture" src="${images[id]}" alt="">
    `
}

function setActive(id) {
    currentImageId = id
    for (let i = 0; i < navPoints.children.length; i++) {
        item = navPoints.children[i]
        item.classList.remove('active')
        if (item.getAttribute('data-id') === currentImageId) {
            item.classList.add('active')
            loadImage(currentImageId)
        }
    }
}
