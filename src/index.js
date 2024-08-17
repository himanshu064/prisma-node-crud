const express = require('express');
require("dotenv").config()
const productRoutes = require('./routes/productRoutes');
const app = express();
app.use(express.json());

app.use('/', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
