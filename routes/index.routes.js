const CelebrityModel = require("../models/Celeb.model");

const router = require("express").Router();

/* GET home page */



router.get('/', (req, res, next) => {
  CelebrityModel.find()
      .then((celeb) => {
        res.render('index.hbs', {celeb})
    })
    .catch((err) => {
      console.log('Some error in finding', err)
    })
})




router.get('/celebrities/:id', (req, res, next) => {
  let {id} = req.params
  CelebrityModel.findById(id)
      .then((celeb) => {
        res.render('show.hbs', {celeb})
    })
    .catch((err) => {
      
      console.log('Some error in finding', err)
    })
})

router.get('/celebrities/create', (req, res, next) => {

  res.render('celebrities/create.hbs')
});


router.post('/celebrities/create', (req, res, next) => {
 
  CelebrityModel.create(req.body)
  .then(() => {
    
    res.redirect('/') // redirects to a URL
  })
  .catch((err) => {
    res.render('celebrities/create.hbs')
    console.log('Some error in finding', err)
  })
});


router.get('/celebrities/:id/sure', (req, res, next) => {
  let {id} = req.params
  CelebrityModel.findById(id)
      .then((celeb) => {
        res.render('celebrities/sure.hbs', {celeb})
    })
    .catch((err) => {
      
      console.log('Some error in finding', err)
    })
})




router.post('/celebrities/:id/delete', (req, res, next) => {
  let {id} = req.params
  CelebrityModel.findByIdAndDelete(id)
      .then(() => {
        res.redirect(`/`) 
    })
    .catch((err) => {
      next(err)
    })
})


router.get('/celebrities/:id/edit', (req, res, next) => {
  let {id} = req.params
  CelebrityModel.findById(id)
      .then((celeb) => {
        res.render('celebrities/update.hbs', {celeb})
    })
    .catch((err) => {
      
      console.log('Some error in finding', err)
    })
})

router.post('/celebrities/:id/edit', (req, res, next) => {
  let {id} = req.params
  CelebrityModel.findByIdAndUpdate(id, req.body)
      .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
      
      console.log('Some error in finding', err)
    })
})













module.exports = router;
