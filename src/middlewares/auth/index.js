module.exports = {
    auth: (req, res, next) => {
        console.log("do something like middleware")
        next();
    }
}