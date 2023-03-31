module.exports=app=>{

    const users=require('../controller/user.controller')

    const router=require('express').Router()

    router.post("/saveUser",users.create)

  //  router.get("/getUsers",users.findAll)

    app.use("/app1",router)

    //localhost:7878/app1/saveUser
}