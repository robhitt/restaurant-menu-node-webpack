const header = () => {

  let headerContainer = document.createElement('header');
  let headerContent = document.createElement('div');
  headerContent.textContent = 'Restaurant Menu and Landing Page';

  headerContainer.style.width = "80%";
  headerContainer.style.margin = "0 auto";
  headerContainer.style.backgroundColor = "pink";
  headerContainer.style.padding = "25px 10px";
  headerContainer.style.textAlign = "center";
  headerContainer.style.fontWeight = "400";
  headerContainer.style.fontSize = "24px";
  headerContainer.style.color = "#574951";

  headerContainer.appendChild(headerContent);

  return headerContainer;
}

export default header;