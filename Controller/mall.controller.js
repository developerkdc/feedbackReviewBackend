import mallModel from "../Model/mall.model.js"

export const getMall = async (req,res)=>{
    try {
       const mall = await mallModel.find();
        return res.status(200).json({
            status:"success",
            mall
        })
    } catch (error) {
        return res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}

export const addMall = async (req,res)=>{
    try {
       const mallAdd = await mallModel.create(req.body);
        return res.status(200).json({
            status:"created",
            mall:mallAdd
        })
    } catch (error) {
        return res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}

export const updateMall = async (req,res)=>{
    try {
        const {id} = req.params
        const updateMall = await mallModel.updateOne({_id:id},{
            $set:req.body
        });

        return res.status(200).json({
            status:"updated",
            mall:updateMall
        })
    } catch (error) {
        return res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}

export const deleteMall = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteMall = await mallModel.deleteOne({_id:id});

        return res.status(200).json({
            status:"deleted",
            mall:deleteMall
        })
    } catch (error) {
        return res.status(500).json({
            status:"failed",
            message:error.message
        })
    }
}