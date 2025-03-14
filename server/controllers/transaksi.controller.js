const { transaksi } = require('../models');

// Get all transactions
exports.getAllTransaksi = async (req, res) => {
  try {
    const allTransaksi = await transaksi.findAll();
    res.status(200).json(allTransaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get transaction by ID or other key
exports.findTransaksi = async (req, res) => {
  try {
    const key = req.params.key;
    const singleTransaksi = await transaksi.findOne({
      where: {
        [Sequelize.Op.or]: [
          { transaksiID: key },
          { siswaID: key },
          { stanID: key }
        ]
      }
    });
    if (singleTransaksi) {
      res.status(200).json(singleTransaksi);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new transaction
exports.addTransaksi = async (req, res) => {
  try {
    const newTransaksi = await transaksi.create({
      tanggal: req.body.tanggal,
      stanID: req.body.stanID,
      siswaID: req.body.siswaID,
      status: req.body.status
    });
    res.status(201).json(newTransaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update transaction
exports.updateTransaksi = async (req, res) => {
  try {
    const transaksiID = req.params.id;
    const [updated] = await transaksi.update(req.body, {
      where: { transaksiID: transaksiID }
    });
    if (updated) {
      const updatedTransaksi = await transaksi.findByPk(transaksiID);
      res.status(200).json(updatedTransaksi);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete transaction
exports.deleteTransaksi = async (req, res) => {
  try {
    const transaksiID = req.params.id;
    const deleted = await transaksi.destroy({
      where: { transaksiID: transaksiID }
    });
    if (deleted) {
      res.status(204).json({ message: 'Transaction deleted' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
