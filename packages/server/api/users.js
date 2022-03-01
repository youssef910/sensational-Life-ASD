import { Router } from 'express';
const router = Router();
import {
  editPassword,
  getAllUsers,
} from '../controller/services/repository/users.js';

router.get('/getall', (req, res) => {
  getAllUsers()
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err.message);
      res.status(500);
    });
});

router.put('/change-password', (req, res) => {
  const { userId, newPassword } = req.body;
  editPassword(userId, newPassword)
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err.message);
      res.status(500);
    });
});

export default router;
