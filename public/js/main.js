const deleteBtn = document.querySelectorAll('.delete')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteCoffee)
})

async function deleteCoffee() {
    const coffeeId= this.parentNode.dataset.id
    try{
        const response = await fetch('/deleteCoffee', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'coffeeIdFromJsonFile': coffeeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}

// alert("hey")
// document.querySelector("#submit").addEventListener("click", toConsole)
// const brand = document.querySelectorAll('.brand')
// const origin = document.querySelectorAll('.origin')

//************** TEST **************** //
// function toConsole() {
//     let brand = document.querySelector('.brand').value
//     let origin = document.querySelector('.beanType').value
//     let rating = document.querySelector('.roastFlavor').value

//     console.log(`${brand}, ${origin}, ${rating}`)
//     document.querySelector('h2').innerText = `${brand}, ${origin}, ${rating}`
// }
