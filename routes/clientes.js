const express = require('express');
const clientesController = require('../controllers/control_clientes');
const checkAuthMiddleware = require('../Middleware/check-auth');
const router = express.Router();
router.get("/buscar/:nombres", checkAuthMiddleware.checkAuth, clientesController.buscar);
router.post("/", checkAuthMiddleware.checkAuth, clientesController.guardar);
router.get("/show/:IdUsuario", checkAuthMiddleware.checkAuth, clientesController.show);
router.post("/actualizar/:id", checkAuthMiddleware.checkAuth, clientesController.actualizar);
router.delete("/eliminar/:id", checkAuthMiddleware.checkAuth, clientesController.eliminar);
module.exports = router;