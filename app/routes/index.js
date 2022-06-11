const express = require('express')
const loginRoute = require('../controllers/login.controller')
const authMiddleware = require('../middlewares/auth.middlewar')
const todoRoute = require('../controllers/todo.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

router.post('/login', loginRoute.login)
router.post('/merchant', authMiddleware.isAuthenticate, todoRoute.insertMerchant)
router.get('/merchant', authMiddleware.isAuthenticate, todoRoute.listMerchant)
router.delete('/merchant/:id', authMiddleware.isAuthenticate, todoRoute.deleteMerchant)
router.post('/product', authMiddleware.isAuthenticate, todoRoute.insertProduct)
router.delete('/product/:id', authMiddleware.isAuthenticate, todoRoute.deleteProduct)
router.put('/product/:id', authMiddleware.isAuthenticate, todoRoute.updateProduct)
router.get('/product', authMiddleware.isAuthenticate, todoRoute.listProduct)

module.exports = router