import express from "express";
const router = express.Router();

import * as LoginController from "../controllers/auth";
import * as userController from "../controllers/user";

import * as requestController from "../controllers/request";
import * as serviceController from "../controllers/service";
import * as objectsController from "../controllers/objects";
import * as newsController from "../controllers/news";
import * as aboutusController from "../controllers/aboutus";
import * as multerController from "../controllers/multer";



import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage })

router
  //auth
  .post('/login', LoginController.login)
  //users
  .get('/user', userController.getuser)
  // multer
  .post('/multer', upload.single('image'), multerController.multerfunc)
  //Request
  .get('/request', requestController.getrequest)
  .get('/request/:id', requestController.getrequestbyId)
  .post('/request', requestController.createrequest)
  .delete('/request/:id', requestController.removerequest)
  //service
  .get('/service', serviceController.getservice)
  .get('/service/:id', serviceController.getservicebyId)
  .put('/service/:id', serviceController.updateservice)
  .post('/service', serviceController.createservice)
  .delete('/service/:id', serviceController.removeservice)
  //objects
  .get('/objects', objectsController.getobject)
  .get('/objects/:id', objectsController.getobjectbyId)
  .put('/objects/:id', objectsController.updateobject)
  .post('/objects', objectsController.createobject)
  .delete('/objects/:id', objectsController.removeobject)

  //news
  .get('/news', newsController.getnews)
  .get('/news/:id', newsController.getnewsbyId)
  .put('/news/:id', newsController.updatenews)
  .post('/news', newsController.createnews)
  .delete('/news/:id', newsController.removenews)

  //aboutUs
  .get('/aboutus', aboutusController.getaboutus)
  .get('/aboutus/:id', aboutusController.getaboutusbyId)
  .put('/aboutus/:id', aboutusController.updateaboutus)
  .post('/aboutus', aboutusController.createaboutus)
  .delete('/aboutus/:id', aboutusController.removeaboutus)

export default router;