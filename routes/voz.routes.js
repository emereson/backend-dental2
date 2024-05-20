import express from 'express';

import * as vozController from '../controllers/voz.controller.js';

import * as consultorioMiddleware from '../middlewares/consultorio.middleware.js';

const router = express.Router();

// router.get(
//   '/consultorio/:id/',
//   consultorioMiddleware.validExistConsultorio,
//   citaController.findAll
// );

// router.get(
//   '/paciente/:id',
//   pacienteMiddleware.validExistPaciente,
//   citaController.findAllPacienteId
// );

router.post('/', vozController.findAll);

// router
//   .route('/:id')
//   .patch(citaMiddleware.validExistCita, citaController.update)
//   .get(citaMiddleware.validExistCita, citaController.findOne)
//   .delete(citaMiddleware.validExistCita, citaController.deleteElement);

const vozRouter = router;

export { vozRouter };
