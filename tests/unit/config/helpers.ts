//Faz a importação dos pacotes.
//Arquivo servirá como um módulo de testes.
import * as mocha from 'mocha';
import * as Chai from 'chai';
import * as td from 'testdouble';
const supertest = require('supertest');
import App from '../../../server/api/api';

//Instancia todos e logo abaixo exporta.
const app = App;
const request = supertest;
const expect = Chai.expect;
const testDouble = td;

export { app, expect, request, testDouble };
