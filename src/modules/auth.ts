import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const comparePassword = (password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword)

}

export const hashPassword = (password) => {
    return bcrypt.hash(password,5)
}



export const createJWT = (user) => {
   const token = jwt.sign({
    id:user.id,
    username:user.name
} ,
    process.env.JWT_SECRET
    )
    return token
}

export const protect = (req, res, next) => {
    //console.log(req.headers.authorization);
    const bearer = req.headers.authorization

    if (!bearer){
        res.status(401)
        res.json({message:'not authorized'})
        return
    } 

    const [,token]=bearer.split(" ") 
    if (!token) {
        
        res.status(401);
        res.json({ message: "invalid token" });
        return;
    }

    try{
        
         const user = jwt.verify(token,process.env.JWT_SECRET)
         req.user = user;
         next();
    } catch (e) {
        console.log(e)
        res.status(401);
        res.json({ message: "not valid token" });
        return;

    }
}

