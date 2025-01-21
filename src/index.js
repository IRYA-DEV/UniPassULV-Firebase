import express from 'express';
import notificationRoutes from './routes/notification.routes.js';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// Asegúrate de que el prefijo de la ruta aquí coincida con lo que intentas en Postman
app.use(notificationRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
