module.exports = function (req, res, next) {

    var publicKey = (req.body && req.body.publicKey) || (req.query && req.query.publicKey) || req.headers['publicKey'];

    if (publicKey) {

        req.rsa = {
            publicKey  : publicKey
        }

        next();


    } else {

        res.json({ error: true, message: "Missing client publicKey." });


    }



}






