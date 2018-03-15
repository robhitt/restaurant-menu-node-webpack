const tabs = () => {

  let tabIndex = 0;

  const tabContainer = document.createElement("div");
  tabContainer.style.width = "80%";
  tabContainer.style.margin = "0 auto";
  tabContainer.style.backgroundColor = "pink  ";

  function newTab(tabName) {
    const tabButton = document.createElement("button");
    tabButton.textContent = tabName;
    tabButton.style.width = "100px";
    tabButton.style.padding = "10px 5px";
    tabButton.style.backgroundColor = "#574951";
    tabButton.style.color = "#fff";
    tabButton.style.border = "solid pink";
    tabButton.style.borderLeft = "0";
    tabButton.style.borderBottom = "0";
    tabButton.style.margin = "0px 1px 0px 2px";

    tabButton.dataset.id = tabIndex;
    
    tabIndex += 1;

    return tabButton;
  }

  let aboutTab = newTab("about");
  let order = newTab("order online");
  let menuTab = newTab("menu");
  let contactTab = newTab("contact");

  tabContainer.appendChild(aboutTab);
  tabContainer.appendChild(order);
  tabContainer.appendChild(menuTab);
  tabContainer.appendChild(contactTab);
  
  return tabContainer;
}

export default tabs;