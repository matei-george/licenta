import { isValidObjectId } from "mongoose";

function checkId(req, res, next) {
   if (!isValidObjectId(req.params.id)) {
      res.status(404);
      throw new Error(`Obiect Invalid al: ${req.params.id}`);
   }
   next();
}

export default checkId;
