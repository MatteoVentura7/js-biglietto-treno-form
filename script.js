/* Scrivere un programma che chieda all’utente:
 - Il numero di chilometri da percorrere
 - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65. */

 const FormElm = document.getElementById("form");

 const FullNameElm = document.getElementById("full-name");
 const KmElm = document.getElementById("km");
 const ChoiceElm = document.getElementById("choice");
 

 const NameFullCard = document.getElementById("name-full");
 const NcCard = document.getElementById("n-c");
 const CpCard = document.getElementById("c-p");
 const CostoCard = document.getElementById("costo");
 const kmCard = document.getElementById("km-p")
 const ChoiceCard = document.getElementById("choice-s")

// funzione che calcola il costo del biglietto

 const KmPriceCalculator = (KmElm,ChoiceElm) => {
    const kmCo = Number(KmElm.value) * 0.21;
    let discount = 0;
    let finalPrice = kmCo;
    
    if (ChoiceElm.value == "op1") {
        discount = kmCo * 0.20;
        finalPrice = kmCo - discount;
    } else if (ChoiceElm.value == "op3") {
        discount = kmCo * 0.40;
        finalPrice = kmCo - discount;
    } 
    return finalPrice;
    }
    
    FormElm.addEventListener("submit",function(event) {
        event.preventDefault();
        NameFullCard.innerHTML = FullNameElm.value;
        NcCard.innerHTML = NumberNc = Math.ceil(Math.random() * 12);
        CpCard.innerHTML = NumberCp = Math.ceil(Math.random() * 10000);
        const price = KmPriceCalculator(KmElm, ChoiceElm).toFixed(2); 
        CostoCard.innerHTML = `${price} €`;
    })
    

   



  



