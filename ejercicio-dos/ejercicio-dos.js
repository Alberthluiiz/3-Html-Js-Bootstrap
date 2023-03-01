// 2. Realice un script de nombre ejercicio-dos.js que realice las siguientes tareas:
// a) Cree e inserte con Javascript un párrafo en index2.html usando el DOM.
// b) Cree e inserte con Javascript un enlace en index2.html usando el DOM.

// crea un elemento p HTML
let parrafo = document.createElement("p");

//crea el texto del elemento p
let textoParrafo = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit ipsa quod repellat delectus laboriosam dolorem facere cupiditate eum labore sequi adipisci doloremque iste, quia et temporibus nam? Nam, dicta.Magni doloremque impedit quo unde rem ratione iste optio beatae provident incidunt inventore nulla animi suscipit, quod rerum qui, a voluptate veniam! Aliquam, eaque distinctio! Sapiente autem perspiciatis nam cum?Reiciendis cum dignissimos quibusdam saepe nemo tenetur quos incidunt obcaecati repellat repellendus maxime laboriosam corrupti quisquam fugit inventore reprehenderit mollitia quo, cumque veritatis atque necessitatibus, possimus facere exercitationem. Rem, fugit.");

//agrego texto al elemento p
parrafo.appendChild(textoParrafo);

//Agregamos el elemento p al body o sea al cuerpo de la pagina
document.getElementsByTagName("body")[0].appendChild(parrafo);

//crea un enlace y lo inserta
let enlace = document.createElement("a");
let textoEnlace = document.createTextNode(" Enlace ");
enlace.appendChild(textoEnlace);

// setAttribute crea un atributo con dos parametros 
// Este nos permite hacer un enlace para que nos 
// redireccione a el buscador de google
enlace.setAttribute("href", "https://www.google.com");
document.getElementsByTagName("body")[0].appendChild(enlace);