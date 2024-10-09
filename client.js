const axios = require("axios");

const api = axios.create({
    baseURL: "http://localhost:3000",
});

const run = async () => {
    try {
        // Create a new item
        let response = await api.post('/items', { id: 1, name: 'Item 1' });
        console.log('Created:', response.data);

        // Read all items
        response = await api.get('/items');
        console.log('All items:', response.data);

        // Read one item
        response = await api.get('/items/1');
        console.log('Read one item:', response.data);

    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
    }
};

run();