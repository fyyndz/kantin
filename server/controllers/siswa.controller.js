const { db } = require('../config/prismaClient');

async function getAllSiswa(req, res) {
  try {
    const siswa = await db.user.findMany();
    res.json({
      success: true,
      data: siswa,
      message: 'All siswa have been loaded',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function findSiswa(req, res) {
  try {
    const keyword = req.params.key;

    const siswa = await db.user.findMany({
      where: {
        OR: [
          { siswaID: { contains: keyword } },
          { nama_siswa: { contains: keyword } },
          { alamat: { contains: keyword } },
          { telepon: { contains: keyword } },
          { foto: { contains: keyword } },
          { userID: { contains: keyword } },
        ],
      },
    });

    res.json({
      success: true,
      data: siswa,
      message: 'All Siswa have been loaded',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function addSiswa(req, res) {
  try {
    const newSiswa = await db.user.create({
      data: {
        username: req.body.username,
        password: req.body.password,
        nama_siswa: req.body.nama_siswa,
        alamat: req.body.alamat,
        email: req.body.email,
        telepon: req.body.telepon,
        foto: req.body.foto,
      },
    });

    res.json({
      success: true,
      data: newSiswa,
      message: 'New siswa has been inserted',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function updateSiswa(req, res) {
  try {
    const siswaID = parseInt(req.params.id);

    const updatedSiswa = await db.user.update({
      where: { siswaID },
      data: {
        nama_siswa: req.body.nama_siswa,
        alamat: req.body.alamat,
        email: req.body.email,
        telepon: req.body.telepon,
      },
    });

    res.json({
      success: true,
      message: 'Data siswa has been updated',
      data: updatedSiswa,
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Siswa not found' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}

async function deleteSiswa(req, res) {
  try {
    const siswaID = parseInt(req.params.id);

    await db.user.delete({
      where: { siswaID },
    });

    res.json({
      success: true,
      message: 'Data siswa has been deleted',
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Siswa not found' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { getAllSiswa, findSiswa, addSiswa, updateSiswa, deleteSiswa };

