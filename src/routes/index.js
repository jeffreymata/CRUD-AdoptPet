const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const { Pet } = require('../model/Pet');

router.get('/', async (req, res) => {
  const pet = await Pet.find();
  res.render('index', {
    tasks: pet
  });
});

router.post('/add', async (req, res, next) => {
  const { NombreMascota, edad, Organization, meta } = req.body;

  if (NombreMascota && edad && Organization) {

    const pet = new Pet({
      PetName: req.body.PetName,
      Age: req.body.Age,
      Description: req.body.Description,
      Images: req.body.Images,
      Organization: req.body.Organization,
      meta: Date.now()
    });

    try {
      console.log(mongoose.connection.readyState);
      Pet.collection.insertOne(pet);
    } catch (error) {
      res.send(error);
    };
    res.send(pet);
  };


  router.get('/edit/:id', async (req, res, next) => {
    const pet = await Pet.findById(req.params.id);
    console.log(pet)
    res.render('edit', { task: pet });
  });

  router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Pet.update({ _id: id }, req.body);
    res.redirect('/');
  });

  router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Pet.remove({ _id: id });
    res.redirect('/');
  });

  router.get('/getAllPets', async (req, res, next) => {
    try {
      const pets = await Pet.find();
      res.send(pets);
    } catch (error) {
      next(error);
    }
  });
});



module.exports = router;
