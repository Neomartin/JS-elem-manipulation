// Referencia al elemento padre
const articleHTMLElement = document.querySelector('#articleEdit');

console.log(articleHTMLElement.innerHTML)

//*************  ARMADO DEL NODO (ELEMENTO) *********** */

//Creo un elemento DIV
const elementItem = document.createElement('div')

console.log(elementItem.className);
//Al nodo DIV creado le sumo la clase 'element-item'
elementItem.className = 'element-item';

//Añadir más clases
elementItem.classList.add('active');

//Le podemos anadir text
// elementItem.innerText = 'Un texto';

//Le podemos anadir otros atributos a mi nodo
elementItem.setAttribute('id', `set-from-JS`);

elementItem.setAttribute('data-custom-info', 'Algo especial descripcion que necesito anadir');

console.log(elementItem.dataset.customInfo)

// const title = elementItem.getAttribute('title')

//************* FIN DEL ARMADO DEL NODO (ELEMENTO) *********** */

//*************  ARMADO DEL NODO (ELEMENTO 2 - TITLE) *********** */
//Creo el titulo
const titleELement =  document.createElement('h2');
titleELement.className = 'element-title';
titleELement.innerText = `Title JS`

//Cambiar estilos
titleELement.style.color = 'greenyellow';
titleELement.style.fontWeight = 'normal';

//Creo el parrafp
const pElement = document.createElement('p');
pElement.className = `element-text`;
pElement.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing.`
//Forma 1
elementItem.appendChild(titleELement)
elementItem.appendChild(pElement)
//Forma 2
elementItem.append(titleELement, pElement)

console.log(elementItem);
//Al elemento padre le añado un nodo (elemento) creado
articleHTMLElement.appendChild(elementItem)


//Remover un nodo hijo del elemento Padre (article en nuestro caso)
const node2 =  document.getElementById('2');

articleHTMLElement.removeChild(node2);
