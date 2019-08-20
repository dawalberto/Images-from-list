console.log('hello')
let arrayResponses = []

function getImages() {

    
    document.getElementById('msgCargando').textContent = 'Cargando...'
    arrayResponses = []

    let arrayImages = [
        'los%20simpsons',
        'padre%20de%20familia',
        'american%20dad'
    ]

    for (let i = 0; i < arrayImages.length; i++) {

        fetch(`http://localhost:3000/images/${arrayImages[i]}`)
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON.response)
            arrayResponses.push(resJSON.response)
            if (i === arrayImages.length - 1) {
                document.getElementById('msgCargando').textContent = 'Imagenes listas!'
            }
        })
        .catch(err => {
            console.log(err)
        })

    }

}

function displayImages() {

    console.log(arrayResponses)

}
