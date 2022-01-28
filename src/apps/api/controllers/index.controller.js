/*
 * This file contains the functions for the 'index' endpoint.
 * These are used in 'index.router.ts' for the corresponsing functions
 * to each CRUD request.
 */
exports.endpoint = (req, res) => {
	res.status(200).json({ message: 'Index Endpoint' });
};
