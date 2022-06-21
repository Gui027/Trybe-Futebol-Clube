import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import users from '../database/models/users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(users, 'findOne').resolves({
      email: 'admin@admin.com',
      password: '$2a$12$VbV0qveLJPGYyQzGbItos.Jf8smlErLxtVX8YfYCmmy8wFUTWO/Xu',
    } as users)
  })

  after(() => {
    (users.findOne as sinon.SinonStub).restore();
  })

  it('Verifica se ao inserir email e senha o login é bem sucedido', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin',
    });

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.property('user');
    expect(chaiHttpResponse.body).to.have.property('token');
  });

  it('Verifica se ao digitar e-mail ou senha inválida o login falha', async() => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin12',
    });

    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).not.to.have.property('user');
    expect(chaiHttpResponse.body).not.to.have.property('token');
  })
  })
