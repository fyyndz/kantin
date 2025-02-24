const menuModel = require('../models/menu');
const { Op } = require('sequelize');

exports.getAllMenu = async (req, res) => {
    try {
        const menus = await menuModel.findAll();
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
};

exports.getMenuById = async (req, res) => {
    try {
        const menu = await menuModel.findByPk(req.params.id);
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
};

exports.findMenu = async (req, res) => {
    try {
        const keyword = req.params.key;
        const menus = await menuModel.findAll({
            where: {
                [Op.or]: [
                    { nama_makanan: { [Op.substring]: keyword } },
                    { deskripsi: { [Op.substring]: keyword } }
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
};

exports.createMenu = async (req, res) => {
    try {
        const { nama_makanan, harga, jenis, foto, deskripsi, stanID } = req.body;
        
        const newMenu = await menuModel.create({
            nama_makanan,
            harga,
            jenis,
            foto,
            deskripsi,
            stanID
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
};

exports.updateMenu = async (req, res) => {
    try {
        const { nama_makanan, harga, jenis, foto, deskripsi, stanID } = req.body;
        
        const updated = await menuModel.update({
            nama_makanan,
            harga,
            jenis,
            foto,
            deskripsi,
            stanID
        }, {
            where: { menuID: req.params.id }
        });

        if (updated[0] === 0) {
            return res.status(404).json({
                success: false,
                message: 'Menu not found'
            });
        }

        res.json({
            success: true,
            message: 'Menu updated successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteMenu = async (req, res) => {
    try {
        const deleted = await menuModel.destroy({
            where: { menuID: req.params.id }
        });

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'Menu not found'
            });
        }

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
};
