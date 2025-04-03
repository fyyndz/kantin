const { db } = require('../config/prismaClient');

async function getAllMenu(req, res) {
    try {
        const menus = await db.menu.findMany();
        res.json({
            success: true,
            data: menus
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function addMenu(req, res) {
    try {
        const { nama_makanan, harga, jenis, foto, deskripsi, stanID } = req.body;

        const newMenu = await db.menu.create({
            data: {
                nama_makanan,
                harga,
                jenis,
                foto,
                deskripsi,
                stanID
            }
        });

        res.status(201).json({
            success: true,
            data: newMenu,
            message: 'New menu item has been added successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function getMenuById(req, res) {
    try {
        const menu = await db.menu.findUnique({
            where: { menuID: parseInt(req.params.id) }
        });

        if (!menu) {
            return res.status(404).json({
                success: false,
                message: 'Menu not found'
            });
        }

        res.json({
            success: true,
            data: menu
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function findMenu(req, res) {
    try {
        const keyword = req.params.key;
        const menus = await db.menu.findMany({
            where: {
                OR: [
                    { nama_makanan: { contains: keyword, mode: 'insensitive' } },
                    { deskripsi: { contains: keyword, mode: 'insensitive' } }
                ]
            }
        });

        res.json({
            success: true,
            data: menus
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function createMenu(req, res) {
    try {
        const { nama_makanan, harga, jenis, foto, deskripsi, stanID } = req.body;

        const newMenu = await db.menu.create({
            data: {
                nama_makanan,
                harga,
                jenis,
                foto,
                deskripsi,
                stanID
            }
        });

        res.status(201).json({
            success: true,
            data: newMenu
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function updateMenu(req, res) {
    try {
        const { nama_makanan, harga, jenis, foto, deskripsi, stanID } = req.body;
        const menuID = parseInt(req.params.id);

        const updatedMenu = await db.menu.update({
            where: { menuID },
            data: { nama_makanan, harga, jenis, foto, deskripsi, stanID }
        });

        res.json({
            success: true,
            message: 'Menu updated successfully',
            data: updatedMenu
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

async function deleteMenu(req, res) {
    try {
        const menuID = parseInt(req.params.id);

        await db.menu.delete({
            where: { menuID }
        });

        res.json({
            success: true,
            message: 'Menu deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = { getAllMenu, getMenuById, findMenu, createMenu, updateMenu, deleteMenu };

