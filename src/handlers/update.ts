
import { profileEnd } from "console";
import prisma from "../db";

//get all updates
export const getupdates = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      Update: true,
    },
  });

  res.json({ data: product.Update });
};

//get one update
export const getOneUpdate = async (req, res) => {
   const product = await prisma.product.findFirst({
     where: {
       id: req.params.id,
       belongsToId: req.user.id,
     },
     include:{
        Update:true
     }
   });

  res.json({ data: product.Update });
};

export const createUpdate = async (req, res) => {
    
   const product = await prisma.product.findFirst({
     where: {
       id: req.params.id,
       belongsToId: req.user.id,
     }
   });
  
   if (!product) {
    return res.json({message:"not your product"})
   }

  const update = await prisma.update.create({
    data: req.body
  });

  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
   const products= await prisma.product.findMany({
    where:{
      belongsToId:req.user.id
    },
    include : {
        Update:true
    }
   })

     const updates = products.reduce((allUpdates,product)=>{
      return[...allUpdates,...product.Update]
     },[])


     const match = updates.find((update) => update.id === req.params.id);
     
     if (!match){
      return res.json({message :"nope"})
     }

  const updated = await prisma.product.update({
    where: {
      id:req.params.id
    },
    data: req.body
  });
  res.json({ data: updated });
};


export const deleteUpdate = async (req, res) => {

    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        Update: true,
      },
    });

    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.Update];
    }, []);

    const match = updates.find((update) => update.id === req.params.id);

    if (!match) {
      return res.json({ message: "nope" });
    }

  const deleted = await prisma.update.delete({
    where: {
        id: req.params.id,
    },
  });
  res.json({ data: deleted });
};
