console.log('hello')

function getImages() {

    fetch('http://localhost:3000/images/los%20simpsons')
    .then(res => res.json())
    .then(resJSON => console.log(resJSON.response))
    .catch(err => {
        console.log(err)
    })

}