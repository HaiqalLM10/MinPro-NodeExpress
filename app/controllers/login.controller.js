const jwt = require('jsonwebtoken')
const models = require('../../models/index')
const bycript = require('bcrypt')

async function login(req, res){
    try {
        const results = await models.Merchant.findOne({where: {name: req.body.username}});
        if(results.length < 1){
            return res.status(204).send({message: `Data not found`});
        }

        if(!bycript.compareSync(req.body.password, results.password)){
            return res.status(400).send({ message: 'Username or password is wrong'})
        }

        // Information about users saved to payload 
        const payload = {
            id: results.id, 
            username: results.username,
        }

        const token = jwt.sign(payload, 'secret', {expiresIn: '7d'});
        userLogin = payload.id;
        return res.send({ message:  `Data is found`, user: payload.id, data: {token: token}});

    }catch(error){
        return res.status(204).send({message: `Data not Found` })
    }
}

module.exports = {
    login
}