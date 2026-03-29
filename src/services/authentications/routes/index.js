import { Router } from "express";
import validate from '../../../middlewares/validate.js'
import { login, logout, refreshToken } from "../controllers/authentication-controller.js";
import { deleteAuthenticationPayloadSchema, postAuthenticationPayloadSchema, putAuthenticationPayloadSchema } from "../validator/schema.js";

const router = Router();

router.post('/authentications', validate(postAuthenticationPayloadSchema), login);
router.put('/authentications', validate(putAuthenticationPayloadSchema), refreshToken);
router.delete('/authentications', validate(deleteAuthenticationPayloadSchema), logout);

export default router;