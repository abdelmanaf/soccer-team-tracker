import { Router } from 'express';
import * as teamsCtrl from '../controllers/teams.js';

const router = Router();

router.get('/', teamsCtrl.index)
router.get('/new', teamsCtrl.new)
router.post('/', teamsCtrl.create)
router.delete('/:id', teamsCtrl.delete)

export{
    router
}