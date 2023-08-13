import jwt from "jsonwebtoken";

export const sendCookies = (user,res,message,statusCOde=200) =>{
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    
    res.status(statusCOde).cookie("token",token,{
        httpOnlly: true,
        maxAge: 15*60*1000,
        sameSite: "none",   
        secure: true, 
    }).json({
        success: true,
        message,
    });

};