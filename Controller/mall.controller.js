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

export const GetMall = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
  
    const { sortField = "mall_name", sortOrder = "desc", search, id } = req.query;
    // const sortField = req.query.sortField || "user_id";
    // const sortOrder = req.query.sortOrder || "asc";
    if (id) {
      const mall = await mallModel.findById(id);
  
      if (!mall) {
        return res.status(400).json({
          status: false,
          data: null,
          message: "Mall not found.",
        });
      }
  
      return res.status(200).json({
        status: true,
        data: mall,
        message: "Fetched successfully",
      });
    }
    const sort = {};
    if (sortField) sort[sortField] = sortOrder === "asc" ? 1 : -1;
  
    //search  functionality
    var searchQuery = { deleted_at: null };
    if (search) {
      const searchRegex = new RegExp(".*" + search + ".*", "i");
      searchQuery = {
        ...searchQuery,
        $or: [
          // {
          //   user_id: isNaN(parseInt(search)) ? null : parseInt(search),
          // },
          { first_name: searchRegex },
          { last_name: searchRegex },
          { email_id: searchRegex },
          { mobile_no: searchRegex },
          { mall_name: searchRegex },
          // ...(isNaN(parseInt(search))
          //   ? [] // If not a valid number, don't include user_id conditions
          //   : [{ user_id: parseInt(search) }]),
        ],
      };
    }
  
    //filter functionality
    // const filter = {};
    // if (role) filter["role_id"] = role;
  
    // if (start_date && end_date) {
    //   let newStartDate = new Date(start_date).setHours(0, 0, 1);
    //   let newEndDate = new Date(end_date).setHours(23, 59, 59);
    //   filter["created_at"] = { $gte: newStartDate, $lte: newEndDate };
    // } else if (start_date) {
    //   let newStartDate = new Date(start_date).setHours(0, 0, 1);
    //   filter["created_at"] = { $gte: newStartDate };
    // } else if (end_date) {
    //   let newEndDate = new Date(end_date).setHours(23, 59, 59);
    //   filter["created_at"] = { $lte: newEndDate };
    // }
    // Fetching users
    const users = await mallModel
      .find({ ...searchQuery })
      .sort(sort)
      .collation({ locale: "en", caseLevel: true })
      .skip(skip)
      .limit(limit)
  
    //total pages
    const totalDocuments = await mallModel.countDocuments({
      ...searchQuery,
    });
    const totalPages = Math.ceil(totalDocuments / limit);
  
    return res.status(200).json({
      status: true,
      data: users,
      message: "Fetched successfully",
      totalPages: totalPages,
    });
  };