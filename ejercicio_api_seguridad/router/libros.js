const express = require('express')
const router = express.Router()

const rutaLibro = require('../models/libro')
const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get('/',requiredScopes("read:libros"), async (req,res)=>{
    try{
        const libro = await rutaLibro.find()
        res.json(rutaLibro)
    }
    catch(error){
        res.statusCode(500).json({error: "error en los libros"})
    }
})


router.post('/',requiredScopes("write:libros"), async (req,res)=>{
    try{
    const nuevoLibro = new rutaLibro(req.body)
    await nuevoLibro.save()
    res.json(nuevoLibro)
    }catch(error){res.statusCode(500).json({error:"error del servidor"})
}
})

router.put('/:id',requiredScopes("write:libros"), async (req,res)=>{
    try {
        const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,
            {new: true});
    }catch(error){
        res.statusCode(500).json({error:"error del servidor"})
}})

router.delete('/:id',requiredScopes("write:libros"), async (req, res) => {
    try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el Libro' });
    }
    });

    module.exports = router

