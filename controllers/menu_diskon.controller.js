const { db } = require('../config/prismaClient');

async function getAllMenuDiskon(req, res) {
  try {
    const allMenuDiskon = await db.menu_diskon.findMany();
    res.status(200).json(allMenuDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function findMenuDiskon(req, res) {
  try {
    const key = parseInt(req.params.key);

    const singleMenuDiskon = await db.menu_diskon.findFirst({
      where: {
        OR: [
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
}

async function addMenuDiskon(req, res) {
  try {
    const { menuID, diskonID } = req.body;

    const newMenuDiskon = await db.menu_diskon.create({
      data: {
        menuID,
        diskonID
      }
    });

    res.status(201).json(newMenuDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateMenuDiskon(req, res) {
  try {
    const menu_diskonID = parseInt(req.params.id);

    const updatedMenuDiskon = await db.menu_diskon.update({
      where: { menu_diskonID },
      data: req.body
    });

    res.status(200).json(updatedMenuDiskon);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Menu discount not found' });
    }
    res.status(500).json({ message: error.message });
  }
}

async function deleteMenuDiskon(req, res) {
  try {
    const menu_diskonID = parseInt(req.params.id);

    await db.menu_diskon.delete({
      where: { menu_diskonID }
    });

    res.status(204).json({ message: 'Menu discount deleted' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Menu discount not found' });
    }
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllMenuDiskon, findMenuDiskon, addMenuDiskon, updateMenuDiskon, deleteMenuDiskon };

