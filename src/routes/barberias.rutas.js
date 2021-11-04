const express = require('express')
const router = express.Router()
const barberias_controller = require("../controllers/barberias.controller")

//const auth_verify = require("../middlewares/auth.jwt")
 

router.get("/",barberias_controller.getBarberias)
router.get("/:id",barberias_controller.getBarberia)
router.post("/",barberias_controller.createBarberia)
router.put('/:id', barberias_controller.updateBarberia)
router.delete("/:id",barberias_controller.deleteBarberia)
/* router.post('/',[auth_verify.verify_token], services_controller.create_service)
router.post("/addUserService",[auth_verify.verify_token],services_controller.add_user_service)
router.post("/servicesByCategory",[auth_verify.verify_token],services_controller.services_by_category)



router.delete('/:id',[auth_verify.verify_token], services_controller.delete_service) */ 






module.exports  = router
