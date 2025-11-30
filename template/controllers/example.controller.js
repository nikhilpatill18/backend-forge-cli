const AppError=require('../utils/appError')

const User = require("../models/example.model");
const asyncHandler = require("../utils/asyncHandler");


// @desc    Create a new user
// @route   POST /api/users
exports.createUser = asyncHandler(async (req, res,next) => {
    if(!req.body){
        return next(new AppError("Please enter email and password",400))
    }
  const user = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: user,
  });
});


// note   

// wrap your controller into the asyncHandler function
// return the error in the next() fucntion with the configure Global appError