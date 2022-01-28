/*
 * This file contains the functions for the 'user' endpoint.
 * These are used in 'user.router.ts' for the corresponsing functions
 * to each CRUD request.
 */
exports.endpoint = (req, res) => {
	res.status(200).json({ message: 'You are in the Users Endpoint.' });
};
