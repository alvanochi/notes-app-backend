import express from 'express';
import {
    getNotes,
    getNoteById,
    editNote,
    deleteNote,
    createNote,
} from '../controllers/note-controller.js';
import { notePayloadSchema, noteQuerySchema, noteUpdatePayloadSchema } from '../validator/schema.js';
import validateQuery from '../../../middlewares/validateQuery.js';
import validate from '../../../middlewares/validate.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', validateQuery(noteQuerySchema), getNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(noteUpdatePayloadSchema), editNote);
router.delete('/notes/:id', deleteNote);

export default router;