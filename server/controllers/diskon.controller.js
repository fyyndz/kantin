const { diskon } = require('../models');

// Get all discounts
exports.getAllDiskon = async (req, res) => {
  try {
    const allDiskon = await diskon.findAll();
    res.status(200).json(allDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get discount by ID or other key
exports.findDiskon = async (req, res) => {
  try {
    const key = req.params.key;
    const singleDiskon = await diskon.findOne({
      where: {
        [Sequelize.Op.or]: [
          { diskonID: key },
          { nama_diskon: key }
        ]
      }
    });
    if (singleDiskon) {
      res.status(200).json(singleDiskon);
    } else {
      res.status(404).json({ message: 'Discount not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new discount
exports.addDiskon = async (req, res) => {
  try {
    const newDiskon = await diskon.create({
      nama_diskon: req.body.nama_diskon,
      persentase_diskon: req.body.persentase_diskon,
      tanggal_awal: req.body.tanggal_awal,
      tanggal_akhir: req.body.tanggal_akhir,
      stanID: req.body.stanID
    });
    res.status(201).json(newDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update discount
exports.updateDiskon = async (req, res) => {
  try {
    const diskonID = req.params.id;
    const [updated] = await diskon.update(req.body, {
      where: { diskonID: diskonID }
    });
    if (updated) {
      const updatedDiskon = await diskon.findByPk(diskonID);
      res.status(200).json(updatedDiskon);
    } else {
      res.status(404).json({ message: 'Discount not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete discount
exports.deleteDiskon = async (req, res) => {
  try {
    const diskonID = req.params.id;
    const deleted = await diskon.destroy({
      where: { diskonID: diskonID }
    });
    if (deleted) {
      res.status(204).json({ message: 'Discount deleted' });
    } else {
      res.status(404).json({ message: 'Discount not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
