## Base URL AUTH

```
/api/auth
```

## Routes

### 1. Register User

**URL**: `/api/auth/register`

**Method**: `POST`

**Description**: Mendaftarkan pengguna baru.

**Request Body**:

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "user"
}
```

**Response**:

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "userID": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "role": "user"
  }
}
```

**Error Response**:

- Jika email sudah terdaftar:

```json
{
  "success": false,
  "message": "Email is already registered"
}
```

- Jika ada kesalahan pada server:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

### 2. Login User

**URL**: `/api/auth/login`

**Method**: `POST`

**Description**: Melakukan login dengan email dan password untuk mendapatkan token autentikasi.

**Request Body**:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here"
  }
}
```

**Error Response**:

- Jika email atau password salah:

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

- Jika ada kesalahan pada server:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Base URL DISKON

```
/api/diskon
```

## Routes

### 1. Get All Diskon

**URL**: `/api/diskon`

**Method**: `GET`

**Description**: Mengambil semua data diskon yang tersedia.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "diskonID": 1,
      "nama_diskon": "Diskon 10%",
      "persentase": 10,
      "deskripsi": "Diskon 10% untuk pembelian pertama"
    },
    {
      "diskonID": 2,
      "nama_diskon": "Diskon 20%",
      "persentase": 20,
      "deskripsi": "Diskon 20% untuk pembelian di atas 100k"
    }
  ]
}
```

---

### 2. Get Diskon by ID

**URL**: `/api/diskon/:id`

**Method**: `GET`

**Description**: Mengambil data diskon berdasarkan `diskonID`.

**Request Parameters**:
- `id`: ID diskon yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "diskonID": 1,
    "nama_diskon": "Diskon 10%",
    "persentase": 10,
    "deskripsi": "Diskon 10% untuk pembelian pertama"
  }
}
```

**Error Response**:

- Jika diskon tidak ditemukan:

```json
{
  "success": false,
  "message": "Diskon not found"
}
```

---

### 3. Add Diskon

**URL**: `/api/diskon`

**Method**: `POST`

**Description**: Menambahkan diskon baru.

**Request Body**:

```json
{
  "nama_diskon": "Diskon 15%",
  "persentase": 15,
  "deskripsi": "Diskon 15% untuk produk tertentu"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Diskon created successfully",
  "data": {
    "diskonID": 3,
    "nama_diskon": "Diskon 15%",
    "persentase": 15,
    "deskripsi": "Diskon 15% untuk produk tertentu"
  }
}
```

**Error Response**:

- Jika ada kesalahan dalam input:

```json
{
  "success": false,
  "message": "Error creating diskon"
}
```

---

### 4. Update Diskon

**URL**: `/api/diskon/:id`

**Method**: `PUT`

**Description**: Mengubah data diskon berdasarkan `diskonID`.

**Request Parameters**:
- `id`: ID diskon yang ingin diperbarui.

**Request Body**:

```json
{
  "nama_diskon": "Diskon 25%",
  "persentase": 25,
  "deskripsi": "Diskon 25% untuk pembelian di atas 500k"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Diskon updated successfully",
  "data": {
    "diskonID": 1,
    "nama_diskon": "Diskon 25%",
    "persentase": 25,
    "deskripsi": "Diskon 25% untuk pembelian di atas 500k"
  }
}
```

**Error Response**:

- Jika diskon tidak ditemukan:

```json
{
  "success": false,
  "message": "Diskon not found"
}
```

---

### 5. Delete Diskon

**URL**: `/api/diskon/:id`

**Method**: `DELETE`

**Description**: Menghapus diskon berdasarkan `diskonID`.

**Request Parameters**:
- `id`: ID diskon yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "Diskon deleted successfully"
}
```

**Error Response**:

- Jika diskon tidak ditemukan:

```json
{
  "success": false,
  "message": "Diskon not found"
}
```


## API Documentation: Menu

### Base URL
```
/api/menu
```

### Routes

#### 1. Get All Menu

**URL**: `/api/menu`

**Method**: `GET`

**Description**: Mengambil semua data menu yang tersedia.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "menuID": 1,
      "nama_makanan": "Nasi Goreng",
      "harga": 15000,
      "jenis": "Makanan",
      "foto": "nasi_goreng.jpg",
      "deskripsi": "Nasi goreng spesial dengan telur",
      "stanID": 1
    },
    {
      "menuID": 2,
      "nama_makanan": "Mie Goreng",
      "harga": 12000,
      "jenis": "Makanan",
      "foto": "mie_goreng.jpg",
      "deskripsi": "Mie goreng pedas",
      "stanID": 2
    }
  ]
}
```

---

#### 2. Get Menu by ID

**URL**: `/api/menu/:id`

**Method**: `GET`

**Description**: Mengambil data menu berdasarkan `menuID`.

**Request Parameters**:
- `id`: ID menu yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "menuID": 1,
    "nama_makanan": "Nasi Goreng",
    "harga": 15000,
    "jenis": "Makanan",
    "foto": "nasi_goreng.jpg",
    "deskripsi": "Nasi goreng spesial dengan telur",
    "stanID": 1
  }
}
```

**Error Response**:

- Jika menu tidak ditemukan:

```json
{
  "success": false,
  "message": "Menu not found"
}
```

---

#### 3. Add Menu

**URL**: `/api/menu`

**Method**: `POST`

**Description**: Menambahkan menu baru.

**Request Body**:

```json
{
  "nama_makanan": "Nasi Goreng",
  "harga": 15000,
  "jenis": "Makanan",
  "foto": "nasi_goreng.jpg",
  "deskripsi": "Nasi goreng spesial dengan telur",
  "stanID": 1
}
```

**Response**:

```json
{
  "success": true,
  "message": "Menu created successfully",
  "data": {
    "menuID": 1,
    "nama_makanan": "Nasi Goreng",
    "harga": 15000,
    "jenis": "Makanan",
    "foto": "nasi_goreng.jpg",
    "deskripsi": "Nasi goreng spesial dengan telur",
    "stanID": 1
  }
}
```

---

#### 4. Update Menu

**URL**: `/api/menu/:id`

**Method**: `PUT`

**Description**: Mengubah data menu berdasarkan `menuID`.

**Request Parameters**:
- `id`: ID menu yang ingin diperbarui.

**Request Body**:

```json
{
  "nama_makanan": "Nasi Goreng Spesial",
  "harga": 16000,
  "jenis": "Makanan",
  "foto": "nasi_goreng_spesial.jpg",
  "deskripsi": "Nasi goreng spesial dengan tambahan ayam",
  "stanID": 1
}
```

**Response**:

```json
{
  "success": true,
  "message": "Menu updated successfully",
  "data": {
    "menuID": 1,
    "nama_makanan": "Nasi Goreng Spesial",
    "harga": 16000,
    "jenis": "Makanan",
    "foto": "nasi_goreng_spesial.jpg",
    "deskripsi": "Nasi goreng spesial dengan tambahan ayam",
    "stanID": 1
  }
}
```

**Error Response**:

- Jika menu tidak ditemukan:

```json
{
  "success": false,
  "message": "Menu not found"
}
```

---

#### 5. Delete Menu

**URL**: `/api/menu/:id`

**Method**: `DELETE`

**Description**: Menghapus menu berdasarkan `menuID`.

**Request Parameters**:
- `id`: ID menu yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "Menu deleted successfully"
}
```

**Error Response**:

- Jika menu tidak ditemukan:

```json
{
  "success": false,
  "message": "Menu not found"
}
```

---

---

### Base URL MENU DISKON
```
/api/menu_diskon
```

### Routes

#### 1. Get All Menu Diskon

**URL**: `/api/menu_diskon`

**Method**: `GET`

**Description**: Mengambil semua data menu yang memiliki diskon.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "menuDiskonID": 1,
      "menuID": 1,
      "diskonID": 2,
      "diskonNama": "Diskon 10%",
      "diskonPersentase": 10
    },
    {
      "menuDiskonID": 2,
      "menuID": 2,
      "diskonID": 3,
      "diskonNama": "Diskon 15%",
      "diskonPersentase": 15
    }
  ]
}
```

---

#### 2. Get Menu Diskon by ID

**URL**: `/api/menu_diskon/:id`

**Method**: `GET`

**Description**: Mengambil data menu diskon berdasarkan `menuDiskonID`.

**Request Parameters**:
- `id`: ID menu diskon yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "menuDiskonID": 1,
    "menuID": 1,
    "diskonID": 2,
    "diskonNama": "Diskon 10%",
    "diskonPersentase": 10
  }
}
```

**Error Response**:

- Jika menu diskon tidak ditemukan:

```json
{
  "success": false,
  "message": "Menu Diskon not found"
}
```

---

#### 3. Add Menu Diskon

**URL**: `/api/menu_diskon`

**Method**: `POST`

**Description**: Menambahkan menu diskon baru.

**Request Body**:

```json
{
  "menuID": 1,
  "diskonID": 2
}
```

**Response**:

```json
{
  "success": true,
  "message": "Menu diskon created successfully",
  "data": {
    "menuDiskonID": 1,
    "menuID": 1,
    "diskonID": 2,
    "diskonNama": "Diskon 10%",
    "diskonPersentase": 10
  }
}
```

---

#### 4. Update Menu Diskon

**URL**: `/api/menu_diskon/:id`

**Method**: `PUT`

**Description**: Mengubah data menu diskon berdasarkan `menuDiskonID`.

**Request Parameters**:
- `id`: ID menu diskon yang ingin diperbarui.

**Request Body**:

```json
{
  "menuID": 1,
  "diskonID": 3
}
```

**Response**:

```json
{
  "success": true,
  "message": "Menu diskon updated successfully",
  "data": {
    "menuDiskonID": 1,
    "menuID": 1,
    "diskonID": 3,
    "diskonNama": "Diskon 15%",
    "diskonPersentase": 15
  }
}
```

**Error Response**:

- Jika menu diskon tidak ditemukan:

```json
{
  "success": false,
  "message": "Menu Diskon not found"
}
```

---

#### 5. Delete Menu Diskon

**URL**: `/api/menu_diskon/:id`

**Method**: `DELETE`

**Description**: Menghapus menu diskon berdasarkan `menuDiskonID`.

**Request Parameters**:
- `id`: ID menu diskon yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "Menu diskon deleted successfully"
}
```

**Error Response**:

- Jika menu diskon tidak ditemukan:

```json
{
  "success": false,
  "message": "Menu Diskon not found"
}
```

### Base URL SISWA
```
/api/siswa
```

### Routes

#### 1. Get All Siswa

**URL**: `/api/siswa`

**Method**: `GET`

**Description**: Mengambil semua data siswa yang terdaftar.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "siswaID": 1,
      "nama": "Ahmad",
      "umur": 20,
      "alamat": "Jl. Raya No. 1, Jakarta",
      "email": "ahmad@mail.com",
      "kelas": "12A"
    },
    {
      "siswaID": 2,
      "nama": "Budi",
      "umur": 22,
      "alamat": "Jl. Raya No. 2, Jakarta",
      "email": "budi@mail.com",
      "kelas": "12B"
    }
  ]
}
```

---

#### 2. Get Siswa by ID

**URL**: `/api/siswa/:id`

**Method**: `GET`

**Description**: Mengambil data siswa berdasarkan `siswaID`.

**Request Parameters**:
- `id`: ID siswa yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "siswaID": 1,
    "nama": "Ahmad",
    "umur": 20,
    "alamat": "Jl. Raya No. 1, Jakarta",
    "email": "ahmad@mail.com",
    "kelas": "12A"
  }
}
```

**Error Response**:

- Jika siswa tidak ditemukan:

```json
{
  "success": false,
  "message": "Siswa not found"
}
```

---

#### 3. Add Siswa

**URL**: `/api/siswa`

**Method**: `POST`

**Description**: Menambahkan siswa baru.

**Request Body**:

```json
{
  "nama": "Ahmad",
  "umur": 20,
  "alamat": "Jl. Raya No. 1, Jakarta",
  "email": "ahmad@mail.com",
  "kelas": "12A"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Siswa created successfully",
  "data": {
    "siswaID": 1,
    "nama": "Ahmad",
    "umur": 20,
    "alamat": "Jl. Raya No. 1, Jakarta",
    "email": "ahmad@mail.com",
    "kelas": "12A"
  }
}
```

---

#### 4. Update Siswa

**URL**: `/api/siswa/:id`

**Method**: `PUT`

**Description**: Mengubah data siswa berdasarkan `siswaID`.

**Request Parameters**:
- `id`: ID siswa yang ingin diperbarui.

**Request Body**:

```json
{
  "nama": "Ahmad Arif",
  "umur": 21,
  "alamat": "Jl. Raya No. 3, Jakarta",
  "email": "ahmad_arif@mail.com",
  "kelas": "12B"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Siswa updated successfully",
  "data": {
    "siswaID": 1,
    "nama": "Ahmad Arif",
    "umur": 21,
    "alamat": "Jl. Raya No. 3, Jakarta",
    "email": "ahmad_arif@mail.com",
    "kelas": "12B"
  }
}
```

**Error Response**:

- Jika siswa tidak ditemukan:

```json
{
  "success": false,
  "message": "Siswa not found"
}
```

---

#### 5. Delete Siswa

**URL**: `/api/siswa/:id`

**Method**: `DELETE`

**Description**: Menghapus siswa berdasarkan `siswaID`.

**Request Parameters**:
- `id`: ID siswa yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "Siswa deleted successfully"
}
```

**Error Response**:

- Jika siswa tidak ditemukan:

```json
{
  "success": false,
  "message": "Siswa not found"
}
```

### Base URL STAN
```
/api/stan
```

### Routes

#### 1. Get All Stan

**URL**: `/api/stan`

**Method**: `GET`

**Description**: Mengambil semua data stan yang terdaftar.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "stanID": 1,
      "nama_stan": "Stan A",
      "lokasi": "Lantai 1",
      "kontak": "08123456789"
    },
    {
      "stanID": 2,
      "nama_stan": "Stan B",
      "lokasi": "Lantai 2",
      "kontak": "08123456788"
    }
  ]
}
```

---

#### 2. Get Stan by ID

**URL**: `/api/stan/:id`

**Method**: `GET`

**Description**: Mengambil data stan berdasarkan `stanID`.

**Request Parameters**:
- `id`: ID stan yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "stanID": 1,
    "nama_stan": "Stan A",
    "lokasi": "Lantai 1",
    "kontak": "08123456789"
  }
}
```

**Error Response**:

- Jika stan tidak ditemukan:

```json
{
  "success": false,
  "message": "Stan not found"
}
```

---

#### 3. Add Stan

**URL**: `/api/stan`

**Method**: `POST`

**Description**: Menambahkan stan baru.

**Request Body**:

```json
{
  "nama_stan": "Stan C",
  "lokasi": "Lantai 3",
  "kontak": "08123456790"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Stan created successfully",
  "data": {
    "stanID": 3,
    "nama_stan": "Stan C",
    "lokasi": "Lantai 3",
    "kontak": "08123456790"
  }
}
```

---

#### 4. Update Stan

**URL**: `/api/stan/:id`

**Method**: `PUT`

**Description**: Mengubah data stan berdasarkan `stanID`.

**Request Parameters**:
- `id`: ID stan yang ingin diperbarui.

**Request Body**:

```json
{
  "nama_stan": "Stan A New",
  "lokasi": "Lantai 1 Revised",
  "kontak": "08123456791"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Stan updated successfully",
  "data": {
    "stanID": 1,
    "nama_stan": "Stan A New",
    "lokasi": "Lantai 1 Revised",
    "kontak": "08123456791"
  }
}
```

**Error Response**:

- Jika stan tidak ditemukan:

```json
{
  "success": false,
  "message": "Stan not found"
}
```

---

#### 5. Delete Stan

**URL**: `/api/stan/:id`

**Method**: `DELETE`

**Description**: Menghapus stan berdasarkan `stanID`.

**Request Parameters**:
- `id`: ID stan yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "Stan deleted successfully"
}
```

**Error Response**:

- Jika stan tidak ditemukan:

```json
{
  "success": false,
  "message": "Stan not found"
}
```

### Base URL TRANSAKSI
```
/api/transaksi
```

### Routes

#### 1. Get All Transaksi

**URL**: `/api/transaksi`

**Method**: `GET`

**Description**: Mengambil semua data transaksi yang tersedia.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "transaksiID": 1,
      "siswaID": 5,
      "stanID": 2,
      "total_harga": 50000,
      "tanggal": "2024-04-03T10:15:30.000Z",
      "status": "Selesai"
    },
    {
      "transaksiID": 2,
      "siswaID": 3,
      "stanID": 1,
      "total_harga": 75000,
      "tanggal": "2024-04-03T12:00:45.000Z",
      "status": "Menunggu"
    }
  ]
}
```

---

#### 2. Get Transaksi by ID

**URL**: `/api/transaksi/:id`

**Method**: `GET`

**Description**: Mengambil data transaksi berdasarkan `transaksiID`.

**Request Parameters**:
- `id`: ID transaksi yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "transaksiID": 1,
    "siswaID": 5,
    "stanID": 2,
    "total_harga": 50000,
    "tanggal": "2024-04-03T10:15:30.000Z",
    "status": "Selesai"
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "Transaksi not found"
}
```

---

#### 3. Create Transaksi

**URL**: `/api/transaksi`

**Method**: `POST`

**Description**: Menambahkan transaksi baru.

**Request Body**:

```json
{
  "siswaID": 5,
  "stanID": 2,
  "total_harga": 60000,
  "tanggal": "2024-04-03T14:30:00.000Z",
  "status": "Menunggu"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Transaksi created successfully",
  "data": {
    "transaksiID": 3,
    "siswaID": 5,
    "stanID": 2,
    "total_harga": 60000,
    "tanggal": "2024-04-03T14:30:00.000Z",
    "status": "Menunggu"
  }
}
```

---

#### 4. Update Transaksi

**URL**: `/api/transaksi/:id`

**Method**: `PUT`

**Description**: Mengubah data transaksi berdasarkan `transaksiID`.

**Request Parameters**:
- `id`: ID transaksi yang ingin diperbarui.

**Request Body**:

```json
{
  "status": "Selesai"
}
```

**Response**:

```json
{
  "success": true,
  "message": "Transaksi updated successfully",
  "data": {
    "transaksiID": 3,
    "siswaID": 5,
    "stanID": 2,
    "total_harga": 60000,
    "tanggal": "2024-04-03T14:30:00.000Z",
    "status": "Selesai"
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "Transaksi not found"
}
```

---

#### 5. Delete Transaksi

**URL**: `/api/transaksi/:id`

**Method**: `DELETE`

**Description**: Menghapus transaksi berdasarkan `transaksiID`.

**Request Parameters**:
- `id`: ID transaksi yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "Transaksi deleted successfully"
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "Transaksi not found"
}
```

### Base URL USER
```
/api/user
```

### Routes

#### 1. Get All Users

**URL**: `/api/user`

**Method**: `GET`

**Description**: Mengambil semua data pengguna yang tersedia.

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "userID": 1,
      "nama": "John Doe",
      "email": "johndoe@example.com",
      "role": "admin"
    },
    {
      "userID": 2,
      "nama": "Jane Smith",
      "email": "janesmith@example.com",
      "role": "user"
    }
  ]
}
```

---

#### 2. Get User by ID

**URL**: `/api/user/:id`

**Method**: `GET`

**Description**: Mengambil data pengguna berdasarkan `userID`.

**Request Parameters**:
- `id`: ID pengguna yang ingin diambil.

**Response**:

```json
{
  "success": true,
  "data": {
    "userID": 1,
    "nama": "John Doe",
    "email": "johndoe@example.com",
    "role": "admin"
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "User not found"
}
```

---

#### 3. Create User

**URL**: `/api/user`

**Method**: `POST`

**Description**: Menambahkan pengguna baru.

**Request Body**:

```json
{
  "nama": "Alice Johnson",
  "email": "alicejohnson@example.com",
  "password": "securepassword",
  "role": "user"
}
```

**Response**:

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "userID": 3,
    "nama": "Alice Johnson",
    "email": "alicejohnson@example.com",
    "role": "user"
  }
}
```

---

#### 4. Update User

**URL**: `/api/user/:id`

**Method**: `PUT`

**Description**: Mengubah data pengguna berdasarkan `userID`.

**Request Parameters**:
- `id`: ID pengguna yang ingin diperbarui.

**Request Body**:

```json
{
  "nama": "Alice J.",
  "email": "alicej@example.com"
}
```

**Response**:

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "userID": 3,
    "nama": "Alice J.",
    "email": "alicej@example.com",
    "role": "user"
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "User not found"
}
```

---

#### 5. Delete User

**URL**: `/api/user/:id`

**Method**: `DELETE`

**Description**: Menghapus pengguna berdasarkan `userID`.

**Request Parameters**:
- `id`: ID pengguna yang ingin dihapus.

**Response**:

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

**Error Response**:

```json
{
  "success": false,
  "message": "User not found"
}
```
