let arrayResponses = []

function getArrayOfTextarea() {

    return document.getElementById('textareaId').value.split('\n')

}

function getImages() {

    let image, searchImage, div;
    let containerRes = document.getElementById('container-res')
    document.getElementById('container-res').textContent = ''
    document.getElementById('msgCargando').textContent = 'Cargando...'
    document.getElementById('btnGetImages').disabled = true
    arrayResponses = []

    let arraySearchImages = getArrayOfTextarea()

    while (arraySearchImages.indexOf('') >= 0) {
        arraySearchImages.splice(arraySearchImages.indexOf(''), 1)
    }

    for (let i = 0; i < arraySearchImages.length; i++) {

        fetch(`http://localhost:3000/images/${arraySearchImages[i]}`)
        // fetch(`https://images-from-list.herokuapp.com/images/${arraySearchImages[i]}`)
        .then(res => res.json())
        .then(resJSON => {
            arrayResponses.push(resJSON.response)
            console.log('resJSON.response ', resJSON.response)
            searchImage = document.createElement('h1')
            searchImage.classList.add('col-1-3')
            searchImage.classList.add('justify-self-center')
            searchImage.textContent = arraySearchImages[i]
            containerRes.appendChild(searchImage)

            resJSON.response.map(img => {
                image = document.createElement('img')
                image.src = img.url
                image.classList.add('w-100')
                div = document.createElement('div')
                div.classList.add('col')
                div.classList.add('justify-self-center')
                div.appendChild(image)
                containerRes.appendChild(div)
            })
            if (i === arraySearchImages.length - 1) {
                document.getElementById('msgCargando').textContent = 'Imagenes listas!'
                document.getElementById('btnGetImages').disabled = false
            }
        })
        .catch(err => {
            console.log(err)
        })

    }

}
