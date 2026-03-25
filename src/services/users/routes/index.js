import { Router } from 'express';
import validate from '../../../middlewares/validate.js'
import { userPayloadSchema } from '../validator/schema.js'
import { createUser, getUserById } from '../controllers/user-controller.js'

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/users/:id', getUserById);

export default router;