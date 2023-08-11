const renderApp = () => {
    Header();

};


const Header = () => {
    const headerTag = document.createElement("header");
    const titleHeader = document.createElement("h1");
    titleHeader.innerText = ("Xplorer");

    headerTag.appendChild(titleHeader);

    const headerBtn = document.createElement("button");
    headerBtn.innerText = "☀ / ☾";
    headerBtn.id = "headerbtn";

    headerTag.appendChild(headerBtn);

    document.body.appendChild(headerTag);
}


renderApp();