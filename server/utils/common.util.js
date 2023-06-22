module.exports = {

    checkRequiredFields: function (req, res, requiredFields, doneCallback) {

        var params = {};
        var missingFields = [];

        requiredFields.forEach(function (field) {

            if (req.query.hasOwnProperty(field)) {
                params[field] = req.query[field];
            } else if (req.body.hasOwnProperty(field)) {
                params[field] = req.body[field];
            } else {
                missingFields.push(field);
            }

        }, this);

        if (missingFields.length === 0) {
            doneCallback({
                error: false,
                data: params
            });
        } else {

            res.json({
                error: true,
                message: {
                    module: "checkRequiredFields()",
                    code: "8888",
                    message: "Invalid parameters passed to end-point. Missing fields : " + missingFields.join(",")
                }
            });

            console.log("checkRequiredFields");
            console.log({
                module: "checkRequiredFields()",
                code: "8888",
                message: "Invalid parameters passed to end-point. Missing fields : " + missingFields.join(",")
            });

        }
    }

}


