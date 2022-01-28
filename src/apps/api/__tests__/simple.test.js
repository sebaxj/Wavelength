// import packages
const supertest = require('supertest');

// instance of expresss app
const app = require('../app.js');
const request = supertest(app);

// Tests
it('Testing to see if Jest works', () => {
	expect(1).toBe(1);
});
