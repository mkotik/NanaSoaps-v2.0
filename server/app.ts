import dotenv from 'dotenv';
import express from 'express';
import productsRouter from './routes/products/products-router';
import ordersRouter from './routes/orders/orders-router';
import db from './models';
dotenv.config();

const {
  sequelize,
  Image,
  Category,
  Product,
  Order,
  OrdersProducts,
  ShippingOption,
} = db;

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.get('/', (req, res) => {
  const response: string = 'server is workings';
  res.send(response);
});

app.post('/categories', async (req, res) => {
  const { categoryName } = req.body;
  try {
    console.log('hi');
    console.log(categoryName);
    console.log(Category.create);
    const newCategory = await Category.create({
      category_name: categoryName,
    });
    console.log(newCategory);
    return res.status(200).json(newCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.post('/images', async (req, res) => {
  const { imageUrl, productId } = req.body;
  try {
    const newImage = await Image.create({
      image_url: imageUrl,
      product_id: productId,
    });
    console.log(newImage);
    return res.status(200).json(newImage);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.post('/products', async (req, res) => {
  const {
    name,
    description,
    price,
    featured,
    smellsLike,
    exfoliation,
    inventory,
    category,
  } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      price,
      featured,
      smells_like: smellsLike,
      exfoliation,
      inventory,
      category,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/orders', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    shippingCity,
    shippingState,
    shippingAddress,
    shippingZip,
    shippingApartment,
    shippingCountry,
    shippingId,
    status,
    taxRate,
    notes,
  } = req.body;
  console.log(
    firstName,
    lastName,
    email,
    shippingCity,
    shippingState,
    shippingAddress,
    shippingZip,
    shippingApartment,
    shippingCountry,
    shippingId,
    status,
    taxRate,
    notes
  );
  try {
    const newOrder = await Order.create({
      first_name: firstName,
      last_name: lastName,
      email,
      shipping_city: shippingCity,
      shipping_state: shippingState,
      shipping_address: shippingAddress,
      shipping_zip: shippingZip,
      shipping_apartment: shippingApartment,
      shipping_country: shippingCountry,
      shipping_id: shippingId,
      status,
      tax_rate: taxRate,
      notes,
    });
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/orders_products', async (req, res) => {
  const { orderId, productId, quantity, soldFor } = req.body;
  console.log(orderId, productId, quantity, soldFor);
  try {
    const response = await OrdersProducts.create({
      order_id: orderId,
      product_id: productId,
      quantity,
      soldFor,
    });
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/shipping_options', async (req, res) => {
  const { shippingName, shippingDescription, cost } = req.body;
  try {
    const newShippingOption = await ShippingOption.create({
      shipping_name: shippingName,
      shipping_description: shippingDescription,
      cost,
    });
    res.status(200).json(newShippingOption);
  } catch (err) {
    res.status(500).json(err);
  }
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Postgres DB successfully connected');

    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
