const productsArray = [
    {
        id: "1",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "2",
        title: "Bread",
        price: 1.99
    },
    {
        id: "3",
        title: "Butter",
        price: 2.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    
    if (productData == undefined) {
        console.log("product not found");
    } else {
        return productData;
    }
}

export { productsArray };