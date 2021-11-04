const express = require('express')
const router = express.Router()
const clientes_controller = require("../controllers/clientes.controller")

//const auth_verify = require("../middlewares/auth.jwt")
 

router.get("/",clientes_controller.getClientes)
router.get("/:id",clientes_controller.getCliente)
router.post("/",clientes_controller.createCliente)
router.put('/:id', clientes_controller.updateCliente)
router.delete("/:id",clientes_controller.deleteCliente)

/* router.post('/',[auth_verify.verify_token], services_controller.create_service)
router.post("/addUserService",[auth_verify.verify_token],services_controller.add_user_service)
router.post("/servicesByCategory",[auth_verify.verify_token],services_controller.services_by_category)



router.delete('/:id',[auth_verify.verify_token], services_controller.delete_service) */ 






module.exports  = router
