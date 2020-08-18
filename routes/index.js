const path = require ("path");
const router = require ("express").Router();
const bookRoutes = require ("./books");
router.use("/api", bookRoutes)
router.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, '..','client', 'googlebooks', 'build', 'index.html'))
})


module.exports = router 