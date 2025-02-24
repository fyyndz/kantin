const siswaModel = require(`../models/index`).user
const { request,response } = require("express")
const siswa = require("../models/siswa")
const { where } = require("sequelize")
const Op = require(`sequelize`).Op

exports.getAllSiswa = async (request, response) => {

    let siswa = await siswaModel.findAll()
    return response.json({
        success: true,
        data: siswa,
        message: `All siswa have been loaded`
    })
}

exports.findSiswa = async (request, response) => {
    let keyword = request.params.key
    let siswa = await siswaModel.findAll({
        where: {
            [Op.or]: [
                { siswaID: { [Op.substring]: keyword } },
                { nama_siswa: { [Op.substring]: keyword } },
                { alamat: { [Op.substring]: keyword } },
                { telepon: { [Op.substring]: keyword } },
                { foto: { [Op.substring]: keyword } },
                { userID: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true,
        data: siswa,
        message: `All Siswa have been loaded`
    })
}

exports.addSiswa = (request, response) => {

    let newSiswa = {
        username: request.body.username,
        password: request.body.password,
        nama_siswa: request.body.nama_siswa,
        alamat: request.body.alamat,
        email: request.body.email,
        telepon: request.body.telepon,
        foto: request.body.foto
        //role
    }

    siswaModel.create(newSiswa)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New siswa has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.updateSiswa = (request, response) => {
    let dataSiswa = {
        nama_siswa: request.body.nama_siswa,
        alamat: request.body.alamat,
        email: request.body.email,
        telepon: request.body.telepon,
        // foto: request.body.foto
    }
    let siswaID = request.params.id

    siswaModel.update(dataSiswa, { where: { siswaID: siswaID } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data user has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.deleteSiswa = (request, response) => {
    let siswaID = request.params.id
    siswaModel.destroy({ where: { siswaID: siswaID } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data siswa has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}