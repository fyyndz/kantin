const { db } = require('../config/prismaClient');

async function getAllTransaksi(req, res) {
  try {
    const allTransaksi = await db.transaksi.findMany();
    res.status(200).json(allTransaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function findTransaksi(req, res) {
  try {
    const key = req.params.key;
    const singleTransaksi = await db.transaksi.findFirst({
      where: {
        OR: [
          { transaksiID: key },
          { siswaID: key },
          { stanID: key },
        ],
      },
    });

    if (singleTransaksi) {
      res.status(200).json(singleTransaksi);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addTransaksi(req, res) {
  try {
    const newTransaksi = await db.transaksi.create({
      data: {
        tanggal: req.body.tanggal,
        stanID: req.body.stanID,
        siswaID: req.body.siswaID,
        status: req.body.status,
      },
    });

    res.status(201).json(newTransaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateTransaksi(req, res) {
  try {
    const transaksiID = parseInt(req.params.id);

    const updatedTransaksi = await db.transaksi.update({
      where: { transaksiID },
      data: req.body,
    });

    res.status(200).json(updatedTransaksi);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(500).json({ message: error.message });
  }
}

async function deleteTransaksi(req, res) {
  try {
    const transaksiID = parseInt(req.params.id);

    await db.transaksi.delete({
      where: { transaksiID },
    });

    res.status(204).json({ message: 'Transaction deleted' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllTransaksi, findTransaksi, addTransaksi, updateTransaksi, deleteTransaksi };

