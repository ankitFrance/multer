const express = require('express');
const router = express.Router();
const multer  = require('multer')                                  //Multer



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`)              // file.originalname we can get from  console.log(req.files['ImageFil']) json
    }
  })
  
  const uploadMiddleware = multer({ storage })                            // Multer middleware


router.get('/', (req, res)=> {
    res.render('index')
})




router.post('/feedback', uploadMiddleware.fields([{ name: 'ImageFile'}, { name: 'ImageFil'}]), (req, res)=>{
   
  const formData = req.body;

 
  console.log(formData)


   
  //return res.redirect('/')
  return  res.render('feedback.ejs')
})






module.exports = router; 