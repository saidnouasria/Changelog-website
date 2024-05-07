
import { profileEnd } from "console";
import prisma from "../db";

//get all updates
export const getupdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      Update: true,
    },
  });
  console.log(products)
  res.json({ data: products.map(product=>[product.id,product.Update])});
};

//get one update
export const getOneUpdate = async (req, res) => {
   const update = await prisma.update.findUnique({
     where: {
       id: req.params.id,
       
     }
   });

  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
    
   const product = await prisma.product.findFirst({
     where: {
       id: req.body.productId
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
  //  const products= await prisma.product.findMany({
  //   where:{
  //     belongsToId:req.user.id
  //   },
  //   include : {
  //       Update:true
  //   }
  //  })

  //    const updates = products.reduce((allUpdates,product)=>{
  //     return[...allUpdates,...product.Update]
  //    },[])


  //    const match = updates.find((update) => update.id === req.params.id);
     
  //    if (!match){
  //     return res.json({message :"nope"})
  //    }

  const updated = await prisma.update.update({
    where: {
      id:req.params.id
    },
    data: req.body
  });
  res.json({ data: updated });
};


export const deleteUpdate = async (req, res) => {


  const deleted = await prisma.update.delete({
    where: {
        id: req.params.id,

    },
  });
  res.json({ data: deleted });
};
