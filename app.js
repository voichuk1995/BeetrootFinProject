const express = require('express');
// const { v4 } = require("uuid");
const cors = require("cors");

const PORT = 3000;

const PRODUCTS = [
    {
        id: 1,
        image: "1.png",
        title: "1450 Cloudcroft Drop",
        subtitle: "Illinois / Chicago",
        price: 250,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 2,
        image: "2.png",
        title: "140 Small Village",
        subtitle: "Missouri / Kansas City",
        price: 200,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 3,
        image: "3.png",
        title: "1250 Lake House",
        subtitle: "Colorado / Denver",
        price: 339,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 4,
        image: "1.png",
        title: "1450 Cloudcroft Drop",
        subtitle: "Illinois / Chicago",
        price: 250,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 5,
        image: "2.png",
        title: "140 Small Village",
        subtitle: "Missouri / Kansas City",
        price: 200,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 6,
        image: "3.png",
        title: "1250 Lake House",
        subtitle: "Colorado / Denver",
        price: 339,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 7,
        image: "1.png",
        title: "1450 Cloudcroft Drop",
        subtitle: "Illinois / Chicago",
        price: 250,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 8,
        image: "2.png",
        title: "140 Small Village",
        subtitle: "Missouri / Kansas City",
        price: 200,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 9,
        image: "3.png",
        title: "1250 Lake House",
        subtitle: "Colorado / Denver",
        price: 339,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 10,
        image: "1.png",
        title: "1450 Cloudcroft Drop",
        subtitle: "Illinois / Chicago",
        price: 250,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 11,
        image: "2.png",
        title: "140 Small Village",
        subtitle: "Missouri / Kansas City",
        price: 200,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
    {
        id: 12,
        image: "3.png",
        title: "1250 Lake House",
        subtitle: "Colorado / Denver",
        price: 339,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
]; 


const CART = [];

const BASE_URL = "/api/";

const app = express();
app.use(cors())
app.use(express.json());

//GET
app.get(`${BASE_URL}products`, (req, res) => {
    res.status(200).json(PRODUCTS);
});

// app.get(`${BASE_URL}cart`, (req, res) => {
//     res.status(200).json(CART);
// });

//POST
// app.post(`${BASE_URL}cart/`, (req, res) => {
//     const product = { ...req.body };

//     product.id = v4();

//     CART.push(product);
//     res.status(200).json(product);
// });

//PUT
// app.put(`${BASE_URL}cart/:id`, (req, res) => {
//     const productIndex = getProductIndex(req.params.id);

//     CART[productIndex] = req.body;
//     res.status(202).json(CART[productIndex]);
// });

//DELETE
// app.delete(`${BASE_URL}cart/:id`, (req, res) => {
//     const productIndex = getProductIndex(req.params.id);

//     CART.splice(productIndex, 1);

//     res.status(200).json(1);
// });

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});

// function getProductIndex(productId) {
//     return CART.findIndex((cartProduct) => {
//         return cartProduct.id === productId;
//     });
// }
