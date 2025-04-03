const { db } = require('../config/prismaClient');
const { Prisma } = require('@prisma/client');

async function getAllDiskon(req, res) {
  try {
    const allDiskon = await db.diskon.findMany();
    res.status(200).json(allDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function findDiskon(req, res) {
  try {
    const key = req.params.key;
    const singleDiskon = await db.diskon.findFirst({
      where: {
        OR: [
          { diskonID: isNaN(key) ? undefined : parseInt(key) },
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
}

async function addDiskon(req, res) {
  try {
    const { nama_diskon, persentase_diskon, tanggal_awal, tanggal_akhir, stanID } = req.body;

    const newDiskon = await db.diskon.create({
      data: {
        nama_diskon,
        persentase_diskon,
        tanggal_awal: new Date(tanggal_awal),
        tanggal_akhir: new Date(tanggal_akhir),
        stanID
      }
    });
    res.status(201).json(newDiskon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateDiskon(req, res) {
  try {
    const diskonID = parseInt(req.params.id);
    const updatedDiskon = await db.diskon.update({
      where: { diskonID },
      data: req.body
    });
    res.status(200).json(updatedDiskon);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'Discount not found' });
    }
    res.status(500).json({ message: error.message });
  }
}

async function deleteDiskon(req, res) {
  try {
    const diskonID = parseInt(req.params.id);
    await db.diskon.delete({ where: { diskonID } });
    res.status(204).json({ message: 'Discount deleted' });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'Discount not found' });
    }
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllDiskon, findDiskon, addDiskon, updateDiskon, deleteDiskon };
