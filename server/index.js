/** load library express */
const express = require('express');

/** create object that instances of express */
const app = express();

/** define port of server */
const PORT = 8000;

/** load library cors */
const cors = require('cors');

/** open CORS policy */
app.use(cors());
/** allow to read 'request' with json type */
app.use(express.json());

/** define all routes */
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const siswaRoute = require('./routes/siswa.route');
const stanRoute = require('./routes/stan.route');
const menuRoute = require('./routes/menu.route');
const transaksiRoute = require('./routes/transaksi.route');
const diskonRoute = require('./routes/diskon.route');
const menuDiskonRoute = require('./routes/menu_diskon.route');

/** define prefix for each route */
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/siswa', siswaRoute);
app.use('/stan', stanRoute);
app.use('/menu', menuRoute);
app.use('/transaksi', transaksiRoute);
app.use('/diskon', diskonRoute);
app.use('/menu-diskon', menuDiskonRoute);

/** run server based on defined port */
app.listen(PORT, () => {
    console.log(`Server of Kantin runs on port ${PORT}`);
});
