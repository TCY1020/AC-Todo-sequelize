const express = require('express')
const router = express.Router()
//驗證cookie裡的session id與session store裡的是否一致
const { authenticator } = require('../middleware/auth.js')

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router