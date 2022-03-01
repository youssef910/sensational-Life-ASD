import { Router } from 'express';
import db from '../db.js';
import users from './users.js';
import auth from './auth.js';

const router = Router();
router.use('/users', users);
router.use('/auth', auth);

router.get('/health', (request, response) => {
  db.query('select version()')
    .then((result) => {
      response.status(200).send(result.rows[0]);
    })
    .catch((err) => {
      console.error(err);
    });
});

export default router;
