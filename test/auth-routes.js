const expect = require('chai').expect;
const sinon = require('sinon');

const Accoount = require('../models/account')

const authRoutes = require('../routes/auth');

describe('Auth Routes - auth', function() {
  it('should throw an error if username is not found', function() {
    sinon.stub(Accoount.find);


    expect(authRoutes.auth)
   });
  });
