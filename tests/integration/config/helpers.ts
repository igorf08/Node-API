import * as td from 'testdouble';
import * as supertest from 'supertest'
import * as chai from 'chai';
import App from '../../../server/api/api';


const app = App;
const request = supertest;
const expect = chai.expect;
const testDouble = td;

export { app, expect, request, testDouble };
