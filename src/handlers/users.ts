import prisma from "../db";
import { hashPassword, createJWT, comparePassword } from "../modules/auth";

export const createNewUser = async (req, res , next) => {
    try {
    const user = await prisma.user.create({
        data:{
            name : req.body.username,
            password : await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user);
    res.json({token:token})
}   catch(e){
    e.type='input'
    next(e)
}
  
};


export const signin= async (req,res) =>{

    
    const user = await prisma.user.findUnique({
        where :{
            name : req.body.username
        }
    })
    console.log(user)
    const isValid = await comparePassword(req.body.password,user.password)
    if (!isValid){
        res.status(401)
        res.json({
            "message":"Password not valid"
        })
    }

    const token = createJWT(user);
    res.json({ token: token });
    
}