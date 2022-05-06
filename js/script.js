window.onload = function () {
    const anchors = document.querySelectorAll('a.scroll-to')
    let burg = document.getElementById('burger')
    let menu = document.getElementById('ref')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            burg.classList.remove('active');
            menu.classList.remove('open')
            
        })
        window.scrollBy(0, -40);    
    }
    // плавное перемещение по странице по якорям
    if (screen.width > 768) {
        let logo = document.getElementById("logo");
        logo.innerHTML = "<img src='img/logo.jpg' alt=''>"
    }
    if (screen.width <= 768) {
        let logo = document.getElementById("logo");
        logo.innerHTML = "<img src='img/logo1.jpg' alt=''>"
        burg.addEventListener('click', function () {
            burg.classList.toggle('active')
            menu.classList.toggle('open')
        })
            
        
    }
}