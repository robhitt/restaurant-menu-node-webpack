import header from './header';
import tabs from './tabs';
import { contentContainer, about, order, menu, contact } from './content';

const app = document.querySelector("#content");
app.appendChild(header());
app.appendChild(tabs());
app.appendChild(contentContainer()); 

let buttons = document.querySelectorAll('button');
buttons.forEach( button => {
  button.addEventListener('click', changeContent);
})

function changeContent(event) {
 let clickedButtonId = event.target.dataset.id;
 let contentItems = document.querySelectorAll('.contentItem');

 contentItems.forEach ( contentItem => {
    contentItem.dataset.id === clickedButtonId ? contentItem.classList.remove('hidden') : contentItem.classList.add('hidden');
  });
}

