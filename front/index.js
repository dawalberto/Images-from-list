let arrayResponses = []

function getArrayOfTextarea() {

    return document.getElementById('textareaId').value.split('\n')

}

function getImages() {

    document.getElementById('msgCargando').textContent = 'Cargando...'
    document.getElementById('btnDisplayImages').disabled = true
    arrayResponses = []

    // let arrayImages = [
    //     'los%20simpsons',
    //     'padre%20de%20familia',
    //     'american%20dad'
    // ]

    let arrayImages = getArrayOfTextarea()

    for (let i = 0; i < arrayImages.length; i++) {

        fetch(`http://localhost:3000/images/${arrayImages[i]}`)
        .then(res => res.json())
        .then(resJSON => {
            // resJSON.response.searchImage = arrayImages[i]
            resJSON.response.push(arrayImages[i])
            console.log(resJSON.response)
            arrayResponses.push(resJSON.response)
            if (i === arrayImages.length - 1) {
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

    console.log(arrayResponses)

    for (let i = 0; i < arrayResponses.length; i++) {
        for(let x = 0; x < arrayResponses[i].length; x++) {
            console.log('arrayResponses[i][x]', arrayResponses[i][x])
            if (typeof arrayResponses[i][x] === 'string') {
                console.log('palabra busqueda imagen', arrayResponses[i][x])
            }
        }
    }

}
