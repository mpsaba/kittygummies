module.exports = function (express, app) {

	var router = express.Router();

	router.get('/', function (req, res) {
		res.send("Kitty Gummies Server <br>" + process.env.LATEST_REL);
	});

	console.log("The route is working.");

	app.use('/api', router);
	app.use('/api/user', require('./user.route'));
	app.use('/api/security', require('./security.route'));

}

