const stanModel = require(`../models/index`).user
const { request,response } = require("express")
const stan = require("../models/siswa")
const { where } = require("sequelize")
const Op = require(`sequelize`).Op

exports.getAllStan = async (request, response) => {

    let stan = await stanModel.findAll()
    return response.json({
        success: true,
        data: siswa,
        message: `All stan have been loaded`
    })
}

exports.findStan = async (request, response) => {
    let keyword = request.params.key
    let stan = await stanModel.findAll({
        where: {
            [Op.or]: [
                { stanID: { [Op.substring]: keyword } },
                { nama_stan: { [Op.substring]: keyword } },
                { namapemilik_stan: { [Op.substring]: keyword } },
                { telepon: { [Op.substring]: keyword } },
                { userID: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true,
        data: stan,
        message: `All Stan have been loaded`
    })
}

exports.addStan = (request, response) => {

    let newStan = {
        stanID: request.body.stanID,
        nama_stan: request.body.nama_stan,
        namapemilik_stan: request.body.namapemilik_stan,
        telepon: request.body.telepon,
        userID: request.body.userID,
        //role
    }

    stanModel.create(newStan)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New stan has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.updateStan = (request, response) => {
    let dataStan = {
        nama_stan: request.body.nama_stan,
        namapemilik_stan: request.body.nam,
        email: request.body.email,
        telepon: request.body.telepon,
        // foto: request.body.foto
    }
    let stanID = request.params.id

    stanModel.update(dataSiswa, { where: { stanID: stanID } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data stan has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.deleteStan = (request, response) => {
    let stanID = request.params.id
    stanModel.destroy({ where: { stanID: stanID } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data stan has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}