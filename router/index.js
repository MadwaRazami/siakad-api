const express = require("express");
const exampleController = require("../controller/exampleController");
const routeDosen = require("./dosen");
const routeMahasiswa = require("./mahasiswa");
const routeMatkul = require("./matakuliah");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa', routeMahasiswa)
route.use('/dosen', routeDosen)
route.use('/matkul',routeMatkul)



module.exports = route