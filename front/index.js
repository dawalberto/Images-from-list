let arrayResponses = []

function getArrayOfTextarea() {

    return document.getElementById('textareaId').value.split('\n')

}

function getImages() {

    document.getElementById('container-res').textContent = ''
    document.getElementById('msgCargando').textContent = 'Cargando...'
    document.getElementById('btnDisplayImages').disabled = true
    arrayResponses = []

    // let arrayImages = [
    //     'los%20simpsons',
    //     'padre%20de%20familia',
    //     'american%20dad'
    // ]

    let arraySearchImages = getArrayOfTextarea()

    for (let i = 0; i < arraySearchImages.length; i++) {

        fetch(`http://localhost:3000/images/${arraySearchImages[i]}`)
        .then(res => res.json())
        .then(resJSON => {
            resJSON.response.push(arraySearchImages[i])
            console.log(resJSON.response)
            arrayResponses.push(resJSON.response)
            if (i === arraySearchImages.length - 1) {
                document.getElementById('msgCargando').textContent = 'Imagenes listas!'
                document.getElementById('btnDisplayImages').disabled = false
            }
        })
        .catch(err => {
            console.log(err)
        })

    }

}

function displayImages() {

    let searchImage;
    let image;
    let div;
    let col;
    let arrayDivs;
    let containerRes = document.getElementById('container-res')
    console.log(arrayResponses)

    for (let i = 0; i < arrayResponses.length; i++) {
        arrayDivs = []
        for(let x = 0; x < arrayResponses[i].length; x++) {
            console.log('arrayResponses[i][x]', arrayResponses[i][x])
            if (typeof arrayResponses[i][x] === 'string') {
                console.log('palabra busqueda imagen', arrayResponses[i][x])
                searchImage = document.createElement('h1')
                searchImage.classList.add('col-1-3')
                searchImage.classList.add('justify-self-center')
                searchImage.textContent = arrayResponses[i][x]
                containerRes.appendChild(searchImage)
            } else {
                image = document.createElement('img')
                image.src = arrayResponses[i][x].url
                image.classList.add('w-100')
                // image.width = 200
                div = document.createElement('div')
                col = `col-${x+1}`
                div.classList.add(col)
                div.classList.add('justify-self-center')
                div.appendChild(image)
                arrayDivs.push(div)
            }
            arrayDivs.map(div => containerRes.appendChild(div))
        }

    }

}
