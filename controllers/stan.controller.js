const { db } = require('../config/prismaClient');

async function getAllStan(req, res) {
  try {
    const stan = await db.user.findMany();
    res.json({
      success: true,
      data: stan,
      message: 'All stan have been loaded',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function findStan(req, res) {
  try {
    const keyword = req.params.key;

    const stan = await db.user.findMany({
      where: {
        OR: [
          { stanID: { contains: keyword } },
          { nama_stan: { contains: keyword } },
          { namapemilik_stan: { contains: keyword } },
          { telepon: { contains: keyword } },
          { userID: { contains: keyword } },
        ],
      },
    });

    res.json({
      success: true,
      data: stan,
      message: 'All stan have been loaded',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function addStan(req, res) {
  try {
    const newStan = await db.user.create({
      data: {
        stanID: req.body.stanID,
        nama_stan: req.body.nama_stan,
        namapemilik_stan: req.body.namapemilik_stan,
        telepon: req.body.telepon,
        userID: req.body.userID,
      },
    });

    res.json({
      success: true,
      data: newStan,
      message: 'New stan has been inserted',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function updateStan(req, res) {
  try {
    const stanID = parseInt(req.params.id);

    const updatedStan = await db.user.update({
      where: { stanID },
      data: {
        nama_stan: req.body.nama_stan,
        namapemilik_stan: req.body.namapemilik_stan,
        email: req.body.email,
        telepon: req.body.telepon,
      },
    });

    res.json({
      success: true,
      message: 'Data stan has been updated',
      data: updatedStan,
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Stan not found' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}

async function deleteStan(req, res) {
  try {
    const stanID = parseInt(req.params.id);

    await db.user.delete({
      where: { stanID },
    });

    res.json({
      success: true,
      message: 'Data stan has been deleted',
    });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ success: false, message: 'Stan not found' });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { getAllStan, findStan, addStan, updateStan, deleteStan };

