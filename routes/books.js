const { Router } = require("express")

const router = require ("express").Router()
router.get("/books", (req, res)=>{
    const testData = {book:"The Cat in the Hat"}
    res.json(testData)
})
module.exports = router 