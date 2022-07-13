const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoutes')
const crud = require('./crud')
const unProtectedRoutes = require('./unProtectedRoute');


router.use(unProtectedRoutes)
router.use('/api/users',authRoutes)
router.use('/api/posts',crud)

module.exports = router;