const express = require('express');
const router = express.Router();
const Pet = require('../model/Pet');

router.get('/', async (req, res) => {
  const pet = await Pet.find();
  res.render('index', {
    tasks: pet
  });
});

router.post('/add', async (req, res, next) => {
  const { NombreMascota, edad } = req.body;
  if (NombreMascota && edad) {
    const pet = new Pet(req.body);
    await Pet.collection.insertOne(pet);
    res.json(pet);
  }
  res.json({ "error": "No mandaste ningun dato pendejo" })

});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const pet = await Pet.findById(id);
  pet.status = !pet.status;
  await pet.save();
  res.redirect('/');
});


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



module.exports = router;
