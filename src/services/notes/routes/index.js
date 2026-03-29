import express from 'express';
import {
    getNotes,
    getNoteById,
    editNoteById,
    deleteNoteById,
    createNote,
} from '../controllers/note-controller.js';
import { notePayloadSchema, noteQuerySchema, noteUpdatePayloadSchema } from '../validator/schema.js';
import validateQuery from '../../../middlewares/validateQuery.js';
import validate from '../../../middlewares/validate.js';
import authenticateToken from '../../../middlewares/auth.js';

const router = express.Router();

router.post('/notes', authenticateToken, validate(notePayloadSchema), createNote);
router.get('/notes', authenticateToken, validateQuery(noteQuerySchema), getNotes);
router.get('/notes/:id', authenticateToken, getNoteById);
router.put('/notes/:id', authenticateToken, validate(noteUpdatePayloadSchema), editNoteById);
router.delete('/notes/:id', authenticateToken, deleteNoteById);

export default router;