
/*
 LISTA DELLA SPESA CON CILO WHILE 
 1) CREARE UN ARRY 
 2) CREARE UN CILO WHILE 
        1) CREARE UNA VARIABILE INDEX
        2) CREARE LA CONDIZIONE, FINCHE' INDEX < DI LIST.LEIGHT.
        3) AGGIUNGERE +1 A INDEX 
        4) CODICE DA ESEGUIRE --> STAMPARE in console LIST[INDEX]
 3) CREARE HTML 
 4) AGGIUNGERE LA STANPA NELL'HTML 
        - USARE APPEND 
*/

const list = [
    'latte',
    'pane',
    'zucchine',
    'acqua',
    'cocacola'
];

let index = 0

const shoppingList = document.getElementById('shopping-list')


while (index < list.length){

    console.log ('lista spesa', index, list[index])

    // shoppingList.append(myLi + list[index])
    const myLi = document.createElement('li') 
    // myLi.innerHTML = list[index];
    // 
    shoppingList.append(myLi)
    myLi.append(list[index])

    index++

};







