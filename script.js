let products = {
    data: [
        {
            productNam: "Regular White Topwear tshirt",
            category: "Topwear",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular White Topwear tshirt",
            category: "Topwear",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular White Jacket",
            category: "Jacket",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular White Jacket",
            category: "Jacket",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular White Bottomwear tshirt",
            category: "Bottomwear",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular White Bottomwear tshirt",
            category: "Bottomwear",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular Watch tshirt",
            category: "Watch",
            price: "30",
            image: "Nile Perch Fish.jpg",
        },
        {
            productNam: "Regular Watch tshirt",
            category: "Watch",
            price: "30",
            image: "Nile Perch Fish.jpg",
        }, 
    ]
};

for (let i of products.data) {
    // create card
    let card = document.createElement("div");
    // Card should have category
    card.classList.add("card", "i.catergory");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // Product name
    let name = document.createElement("h5");
    name.classList.add("Product-name");
    name.innerText = i.productNam.toUpperCase();
    container.appendChild(name);
    // Price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}