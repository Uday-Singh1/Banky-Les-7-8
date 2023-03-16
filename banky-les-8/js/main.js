class GetDataFromApi {
    url = "";
    data = null;

    constructor(newURL) {
        this.url = newURL;
    }

    async getData() {
        console.log("Ik haal de data op");
        await fetch(this.url)
            .then(function (response) {     // vanaf async tot en met this.data = data; gebeurt  in de achtergrond 
                return response.json();
            }).then((data) => {
                this.data = data;       //this.data = data; zorgt er voor dat pending kans wordt verlaagt en of dat er geen "pending" komt 
            });
        return this.data;
    }
}

//const uday = new GetDataFromApi("/data/transactions.json");
//uday.getData().then(function(data){ console.log(data)})

class Header {
    headerElement;
    figureelement;
    logoIElement;
    logoHeadingElement;
    avatarWrapperElement;
    avatarBodyElement;
    avatarHeadElement;
    avatarElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__figure";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-money-bill-transfer";

        this.logoHeading = document.createElement("h1");
        this.logoHeading.classList = "header__banky";

        this.avatarWrapperElement = document.createElement("div");
        this.avatarWrapperElement.classList = "avatarWrapper";

        this.avatarElement = document.createElement("figure");
        this.avatarElement.classList = "avatar";

        this.avatarHeadElement = document.createElement("div");
        this.avatarHeadElement.classList = "avatar__head";

        this.avatarBodyElement = document.createElement("div");
        this.avatarBodyElement.classList = "avatar__body";
    }

    render() {

        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);
        this.headerElement.appendChild(this.avatarWrapperElement);
        this.avatarWrapperElement.appendChild(this.avatarElement);
        this.avatarElement.appendChild(this.avatarHeadElement);
        this.avatarElement.appendChild(this.avatarBodyElement);
    }
}