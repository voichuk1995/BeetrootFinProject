const express = require('express');
const cors = require("cors");

const PORT = 3000;

const PRODUCTS = [
    {
        id: 1,
        image: "1.png",
        title: "1450 Cloudcroft Drop",
        category: "Illinois / Chicago",
        categories: "Art Direction",
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
        category: "Missouri / Kansas City",
        categories: "Digital Photography",
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
        category: "Colorado / Denver",
        categories: "Information Architecture",
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
        category: "Illinois / Chicago",
        categories: "Interior Design",
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
        category: "Missouri / Kansas City",
        categories: "Motion Graphics",
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
        category: "Colorado / Denver",
        categories: "Photoshop Tools",
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
        category: "Illinois / Chicago",
        categories: "Art Direction",
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
        category: "Missouri / Kansas City",
        categories: "Digital Photography",
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
        category: "Colorado / Denver",
        categories: "Information Architecture",
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
        category: "Illinois / Chicago",
        categories: "Interior Design",
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
        category: "Missouri / Kansas City",
        categories: "Motion Graphics",
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
        category: "Colorado / Denver",
        categories: "Photoshop Tools",
        price: 339,
        description: {
            sqft: 3400,
            room: 2,
            bathroom: 1, 
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis perspiciatis quae suscipit aliquam illum nostrum, voluptatem, quasi totam deserunt autem. Mollitia laudantium id sint, doloribus, accusantium tempora iusto consectetur blanditiis earum, dicta unde in officiis nam ex ea voluptate inventore nulla architecto ratione quia molestias excepturi pariatur? Impedit, sed?",
    },
]; 

const BASE_URL = "/api/";

const app = express();
app.use(cors())
app.use(express.json());

//GET

app.get(`${BASE_URL}products`, (req, res) => {
    res.status(200).json(PRODUCTS);
});


app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
