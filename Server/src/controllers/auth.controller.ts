import { Request, Response } from "express";



export const signUp=(req:Request, resp:Response)=>{
    console.log(req.body)
}

export const signIn=(req:Request, resp:Response)=>{
    resp.send('signin')
}
export const profile=(req:Request, resp:Response)=>{
    resp.send('profile')
}