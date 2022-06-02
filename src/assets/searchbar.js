var input = document.getElementById("searchbar");
input.addEventListener('input', filterList)
function filterList(){
    filter = input.value.toLowerCase()
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        //Permet de récupérer les éléments situés dans le contact header
        // puis le premier élément <p> de cette liste qui contient le nom de client
        let name = card.firstElementChild.firstElementChild.textContent
        // Obtenir les actif/non actif
        // console.log(card.firstElementChild.childNodes[3].textContent)
        if(name.toLowerCase().includes(filter)){
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
}

// TRI PAR ACTIVITE
//
// const searchByActivity = document.querySelectorAll(".sorting-link");
//   searchByActivity.forEach(link => {
//     console.log(link.textContent)
//     link.addEventListener('click', activList)
//
//   })
//
// function activList(){
//     let cards = document.querySelectorAll(".card");
//     cards.forEach(card => {
//         let name = card.firstElementChild.childNodes[1].textContent
//         // Obtenir les actif/non actif
//         console.log(name)
//       if(name.includes("Payé")){
//             card.style.display = "block"
//         }  else {
//             card.style.display = "none"
//         }
//
//       if(name.includes("Impayé")){
//         card.style.display = "block"
//       }  else {
//         card.style.display = "none"
//       }
//
//
//     })
// }
