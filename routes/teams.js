import { Router } from 'express';
import * as teamsCtrl from '../controllers/teams.js';

const router = Router();

router.get('/', teamsCtrl.index)
router.get('/new', teamsCtrl.new)
router.post('/', teamsCtrl.create)
router.delete('/:id', teamsCtrl.delete)
router.get('/:id/edit', teamsCtrl.edit)
router.put('/:id', teamsCtrl.update)

export{
    router
}