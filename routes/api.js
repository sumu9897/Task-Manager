import express from "express";
const router = express.Router();
import * as TaskController from '../app/controllers/TaskController.js';
import * as UserController from '../app/controllers/UsersController.js';

// User API
router.post('/registration', UserController.Registration);
router.post('/login', UserController.Login);
router.get('/profiledetails', UserController.ProfileDetails);
router.post('/profileupdate', UserController.ProfileUpdate);
router.post('/emailverify', UserController.EmailVerify);
router.post('/codeverify', UserController.CodeVerify);

// TASK API
router.post('/createTask', TaskController.CreateTask);
router.get('/tasks', TaskController.GetAllTasks);
router.get('/task/:id', TaskController.GetTaskById);
router.put('/task/:id', TaskController.UpdateTask);
router.delete('/task/:id', TaskController.DeleteTask);
router.get('/tasks/status/:status', TaskController.TaskListByStatus);
router.get('/tasks/count', TaskController.CountTask);

export default router;
