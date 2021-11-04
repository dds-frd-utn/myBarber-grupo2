const express = require('express')
const router = express.Router()
const direcciones_controller = require("../controllers/direcciones.controller")

//const auth_verify = require("../middlewares/auth.jwt")
 

router.get("/",direcciones_controller.getDirecciones)
router.get("/:id",direcciones_controller.getDireccion)
router.post("/",direcciones_controller.createDireccion)
router.put('/:id', direcciones_controller.updateDireccion)
router.delete("/:id",direcciones_controller.deleteDireccion)
/* router.post('/',[auth_verify.verify_token], services_controller.create_service)
router.post("/addUserService",[auth_verify.verify_token],services_controller.add_user_service)
router.post("/servicesByCategory",[auth_verify.verify_token],services_controller.services_by_category)



router.delete('/:id',[auth_verify.verify_token], services_controller.delete_service) */ 






module.exports  = router
