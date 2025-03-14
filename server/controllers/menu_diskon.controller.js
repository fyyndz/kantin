const { menu_diskon } = require('../models');

// Get all menu discounts
exports.getAllMenuDiskon = async (req, res) => {
  try {
    const allMenuDiskon = await menu_diskon.findAll();
    res.status(200).json(allMenuDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get menu discount by ID or other key
exports.findMenuDiskon = async (req, res) => {
  try {
    const key = req.params.key;
    const singleMenuDiskon = await menu_diskon.findOne({
      where: {
        [Sequelize.Op.or]: [
          { menu_diskonID: key },
          { menuID: key },
          { diskonID: key }
        ]
      }
    });
    if (singleMenuDiskon) {
      res.status(200).json(singleMenuDiskon);
    } else {
      res.status(404).json({ message: 'Menu discount not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new menu discount
exports.addMenuDiskon = async (req, res) => {
  try {
    const newMenuDiskon = await menu_diskon.create({
      menuID: req.body.menuID,
      diskonID: req.body.diskonID
    });
    res.status(201).json(newMenuDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update menu discount
exports.updateMenuDiskon = async (req, res) => {
  try {
    const menu_diskonID = req.params.id;
    const [updated] = await menu_diskon.update(req.body, {
      where: { menu_diskonID: menu_diskonID }
    });
    if (updated) {
      const updatedMenuDiskon = await menu_diskon.findByPk(menu_diskonID);
      res.status(200).json(updatedMenuDiskon);
    } else {
      res.status(404).json({ message: 'Menu discount not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete menu discount
exports.deleteMenuDiskon = async (req, res) => {
  try {
    const menu_diskonID = req.params.id;
    const deleted = await menu_diskon.destroy({
      where: { menu_diskonID: menu_diskonID }
    });
    if (deleted) {
      res.status(204).json({ message: 'Menu discount deleted' });
    } else {
      res.status(404).json({ message: 'Menu discount not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
