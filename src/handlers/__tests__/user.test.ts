import * as user from "../users"

describe ("create user handler",()=>{
  it("should create a new user",async () => {
    const req = {body:{name:"said",password:"said2003"}}
    const res = {json({token}){
        expect(token).toBeTruthy()
    }}

    const newUser = await user.createNewUser(req,res,()=>{})
  })

})