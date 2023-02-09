const { check, validationResult } = require("express-validator");


const emailValidator = () =>{
     return [
          check("email").isEmail().withMessage("Email is not correct")
     ]
}
const validationMiddleWare = (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }
     next();
   };
   

module.exports = {emailValidator,validationMiddleWare}