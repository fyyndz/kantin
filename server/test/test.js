const request = require('supertest');
const express = require('express');
const authRoute = require('../routes/auth.route');
const diskonRoute = require('../routes/diskon.route');
const menuRoute = require('../routes/menu.route');
const menuDiskonRoute = require('../routes/menu_diskon.route');
const siswaRoute = require('../routes/siswa.route');
const stanRoute = require('../routes/stan.route');
const transaksiRoute = require('../routes/transaksi.route');
const userRoute = require('../routes/user.route');

const app = express();
app.use(express.json());
app.use('/auth', authRoute);
app.use('/diskon', diskonRoute);
app.use('/menu', menuRoute);
app.use('/menu-diskon', menuDiskonRoute);
app.use('/siswa', siswaRoute);
app.use('/stan', stanRoute);
app.use('/transaksi', transaksiRoute);
app.use('/user', userRoute);

describe('Auth Route', () => {
  it('should login successfully', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'testuser', password: 'password' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});

describe('Diskon Route', () => {
  it('should get all discounts', async () => {
    const res = await request(app).get('/diskon');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get discount by ID or other key', async () => {
    const res = await request(app).get('/diskon/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new discount', async () => {
    const res = await request(app)
      .post('/diskon')
      .send({ nama_diskon: 'Test Diskon', persentase_diskon: 10 });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a discount', async () => {
    const res = await request(app)
      .put('/diskon/1')
      .send({ nama_diskon: 'Updated Diskon' });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a discount', async () => {
    const res = await request(app).delete('/diskon/1');
    expect(res.statusCode).toEqual(204);
  });
});

describe('Menu Route', () => {
  it('should get all menu items', async () => {
    const res = await request(app).get('/menu');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get menu item by ID or other key', async () => {
    const res = await request(app).get('/menu/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new menu item', async () => {
    const res = await request(app)
      .post('/menu')
      .send({ nama_makanan: 'Test Menu', harga: 5000 });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a menu item', async () => {
    const res = await request(app)
      .put('/menu/1')
      .send({ nama_makanan: 'Updated Menu' });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a menu item', async () => {
    const res = await request(app).delete('/menu/1');
    expect(res.statusCode).toEqual(204);
  });
});

describe('Menu Diskon Route', () => {
  it('should get all menu discounts', async () => {
    const res = await request(app).get('/menu-diskon');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get menu discount by ID or other key', async () => {
    const res = await request(app).get('/menu-diskon/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new menu discount', async () => {
    const res = await request(app)
      .post('/menu-diskon')
      .send({ menuID: 1, diskonID: 1 });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a menu discount', async () => {
    const res = await request(app)
      .put('/menu-diskon/1')
      .send({ menuID: 1 });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a menu discount', async () => {
    const res = await request(app).delete('/menu-diskon/1');
    expect(res.statusCode).toEqual(204);
  });
});

describe('Siswa Route', () => {
  it('should get all siswa', async () => {
    const res = await request(app).get('/siswa');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get siswa by ID or other key', async () => {
    const res = await request(app).get('/siswa/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new siswa', async () => {
    const res = await request(app)
      .post('/siswa')
      .send({ nama_siswa: 'Test Siswa', alamat: 'Test Alamat' });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a siswa', async () => {
    const res = await request(app)
      .put('/siswa/1')
      .send({ nama_siswa: 'Updated Siswa' });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a siswa', async () => {
    const res = await request(app).delete('/siswa/1');
    expect(res.statusCode).toEqual(204);
  });
});

describe('Stan Route', () => {
  it('should get all stan', async () => {
    const res = await request(app).get('/stan');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get stan by ID or other key', async () => {
    const res = await request(app).get('/stan/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new stan', async () => {
    const res = await request(app)
      .post('/stan')
      .send({ nama_stan: 'Test Stan', nama_pemilik: 'Test Pemilik' });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a stan', async () => {
    const res = await request(app)
      .put('/stan/1')
      .send({ nama_stan: 'Updated Stan' });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a stan', async () => {
    const res = await request(app).delete('/stan/1');
    expect(res.statusCode).toEqual(204);
  });
});

describe('Transaksi Route', () => {
  it('should get all transactions', async () => {
    const res = await request(app).get('/transaksi');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get transaction by ID or other key', async () => {
    const res = await request(app).get('/transaksi/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new transaction', async () => {
    const res = await request(app)
      .post('/transaksi')
      .send({ tanggal: '2025-03-14', stanID: 1, siswaID: 1, status: 'dimasak' });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a transaction', async () => {
    const res = await request(app)
      .put('/transaksi/1')
      .send({ status: 'diantar' });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a transaction', async () => {
    const res = await request(app).delete('/transaksi/1');
    expect(res.statusCode).toEqual(204);
  });
});

describe('User Route', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get user by ID or other key', async () => {
    const res = await request(app).get('/user/1');
    expect(res.statusCode).toEqual(200);
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/user')
      .send({ firstname: 'Test', lastname: 'User', email: 'test@example.com', password: 'password' });
    
    expect(res.statusCode).toEqual(201);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put('/user/1')
      .send({ firstname: 'Updated' });
    
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/user/1');
    expect(res.statusCode).toEqual(204);
  });
});
