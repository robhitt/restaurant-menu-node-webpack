const contentContainer = () => {
  let contentContainer = document.createElement('div');
  contentContainer.style.width = '80%';
  contentContainer.style.margin = '0 auto';
  contentContainer.style.border = "2px solid pink";
  contentContainer.style.borderTop = "0";
  contentContainer.style.padding = "10px";
  contentContainer.style.backgroundColor = "rgb(87, 73, 81)";
  contentContainer.style.color = "#fff";
  contentContainer.style.fontSize = "13px";
  contentContainer.style.fontWeight = "200";

  contentContainer.appendChild(about());
  contentContainer.appendChild(order());
  contentContainer.appendChild(menu());
  contentContainer.appendChild(contact());

  return contentContainer;
}

const about = () => {
  let aboutContainer = document.createElement('div');
  aboutContainer.innerHTML = `
    <p>We’re a family company with small town roots and we approach business the same way. 
    Our employees are our family and as a team we put the most care into every ounce of the menu. 
    We bring you the best fresh ingredients with mom’s special touch. Our commitment to honest foods 
    and serving fresh meals is what we’re all about.</p>

    <p>So stop in and feel free to eat your heart out. It will thank you later!</p>
  `;
  aboutContainer.dataset.id = 0;
  aboutContainer.classList.add('contentItem');

  return aboutContainer;
}

const order = () => {
  let orderContainer = document.createElement('div');
  orderContainer.innerHTML = `
    <ul>
      <li><a href="http://www.grubhub.com" target="_blank">Grubhub</a></li>
      <li><a href="http://www.delivery.com" target="_blank">Delivery.com</a></li>
      <li><a href="http://www.seemless.com" target="_blank">Seemless</a></li>
      <li><a href="http://www.doordash.com" target="_blank">Door Dash</a></li>
    </ul>
  `;
  orderContainer.classList.add('hidden');
  orderContainer.dataset.id = 1;
  orderContainer.classList.add('contentItem');

  return orderContainer;
}

const menu = () => {
  let menuContainer = document.createElement('div');
  menuContainer.innerHTML = `
    <ul>
      <li>Chickpea Tuna Melt</li>
      <li>Hummas & Avocado</li>
      <li>Kale Superfood</li>
      <li>Protein Bowl</li>
    </ul>
  `;
  menuContainer.classList.add('hidden');
  menuContainer.dataset.id = 2;
  menuContainer.classList.add('contentItem');

  return menuContainer;
}

const contact = () => {
  let contactContainer = document.createElement('div');
  contactContainer.innerHTML = `
    <p>Rob Hitt</p>
    <p>- <a href="http://www.github.com/robhitt" target="_blank">Github</a></p>
    <p>- <a href="http://www.robhitt.com" target="_blank">Website</a></p>
    <p>- <a href="mailto:robhitt@gmail.com" target="_blank">Email</a></p>
    <p>- <a href="http://www.instagram.com/bodegacatsofinstagram" target="_blank">Bodega Cats</a></p>

  `;
  contactContainer.classList.add('hidden');
  contactContainer.dataset.id = 3;
  contactContainer.classList.add('contentItem');

  return contactContainer;
}

export { contentContainer, about, order, menu, contact };
