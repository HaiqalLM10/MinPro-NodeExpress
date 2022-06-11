const models = require('../../models/index')
const { ValidationError } = require('sequelize');
const loginRoute = require('../controllers/login.controller')


async function insertMerchant(req, res, next) {
    let form = req.body
    try {
        await models.Merchant.create(form)
        return res.status(201).send({ message: 'Merchant has been created', data: form })

    } catch (e) {
        return res.status(400).send({ message: e.message })
    }

}

async function listMerchant(req, res) {
    try {
        const result = await models.Merchant.findAll()
        if (result.length < 1) {
            return res.status(204).send({ message: 'Merchant is empty' })
        }
        return res.send({ message: 'Merchant is found', data: result })
    } catch (e) {
        return res.status(500).send({ message: e.message })
    }
}

async function deleteMerchant(req, res) {
    try {
        await models.Merchant.destroy({ where: { id: req.params.id } })
        return res.send({ message: 'Merchant has been deleted' })
    } catch (e) {
        return res.status(500).send({ message: e.message })
    }
}

async function insertProduct(req, res) {
    let form = req.body
    try {
        await models.Products.create(form)
        return res.send({ message: 'Product has been created', data: form })
    } catch (e) {
        return res.status(400).send({ message: e.message })
    }
}

async function deleteProduct(req, res) {
    try {
        await models.Products.destroy({ where: { id: req.params.id } })
        return res.send({ message: 'Product has been deleted' })
    } catch (e) {
        return res.status(500).send({ message: e.message })
    }
}

async function updateProduct(req, res) {
    let data = req.body
    try {
        await models.Products.update(data, { where: { id: req.params.id } })
        return res.send({ message: 'Product has been updated', data: req.body })
    } catch (e) {
        return res.status(500).send({ message: e.message })
    }
}

async function listProduct(sreq, res) {
    const result = await models.Products.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Products is empty' })
    }
    return res.send({ message: 'Products is found', data: result })
}

module.exports = {
    insertMerchant,
    listMerchant,
    deleteMerchant,
    insertProduct,
    deleteProduct,
    updateProduct,
    listProduct
}
