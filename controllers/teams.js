import { Team } from '../models/team.js'

function index(req, res){
    Team.find({})
    .then(teams => {
        res.render('teams/index', {
            teams,
            title: 'THERE ARE YOUR TEAMS!!!'
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
    Team.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/teams'))
        .catch(err => console.log(err));
}

function edit(req, res){
    Team.findById(req.params.id)
        .then(team => {
            res.render('teams/edit', {
                team
            })
        })
}

function update(req, res){
    Team.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(team => {
            res.redirect(`/teams`);
        })
}


export{
    index,
    newTeam as new,
    create,
    deleteBook as delete,
    edit,
    update
}