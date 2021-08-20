const express = require('express');
const router = express.Router();

const Pet = require('../model/Pet');

router.post('/add', async (req, res, next) => {
  const pet = new Pet(req.body);
  pet.meta = {
    DateCreated: new Date().toISOString()
  }
  try {
    await pet.save();
  } catch (error) {
    res.status(400).send({ "error": error })
  };
  res.status(200).send(pet);
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

router.get('/getAllPets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.send(pets);
  } catch (error) {
    res.json(error.title);
  }
});




module.exports = router;
