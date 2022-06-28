const shopping = document.getElementById('shopping');
const shopList = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'Formaggio', 'Verdura', 'Frutta'];

// let listItems = '';
// for (let i = 0; i < shopList.length; i++) {
//     listItems += `<li>${shopList[i]}</li>`;
// }

// let i = 0;
// while (i < shopList.length) {
//     listItems += `<li>${shopList[i]}</li>`;
//     i++;
// }
    
// shopping.innerHTML = listItems;


// * ____________________________________________________


// for (let i = 0; i < shopList.length; i++) {
//     const listItems = document.createElement('li');
//     shopping.appendChild(listItems);
//     listItems.innerHTML = shopList[i];
// }

let i = 0;
while (i < shopList.length) {
    const listItems = document.createElement('li');
    shopping.appendChild(listItems);
    listItems.innerHTML = shopList[i];
    i++;
}

