import { Team } from '../models/team.js'

function index(req, res){
    Team.find({})
    .then(teams => {
        res.render('teams/index', {
            teams,
            title: 'What team are you looking for!!!'
        })
    })
}

function newTeam(req, res){
    res.render('teams/new', {
        title: 'Add a team',
    })
}

function create(req, res){
    Team.create(req.body)
        .then(result => {
            res.redirect('/teams');
        })
        .catch(err => console.log(err));
}

function deleteBook(req, res){
    Team.findByIdAndDelete(req.params.id,)
        .then(result => res.redirect('/teams'))
        .catch(err => console.log(err));
}


export{
    index,
    newTeam as new,
    create,
    deleteBook as delete
}