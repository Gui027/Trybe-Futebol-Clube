import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

import matchesMock from './mockMatches'
import matches from '../database/models/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
    let chaiHttpResponse: Response;

    it('Verificar se o corpo da resposta e o status da API da um findAll', async () => {
        sinon.stub(matches, 'findAll').resolves(matchesMock.matches as any)
        chaiHttpResponse = await chai.request(app).get('/matches');
        (matches.findAll as sinon.SinonStub).restore();

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.deep.equal(matchesMock.matches);
    })

    it('Verificar se cria a partida', async () => {
        sinon.stub(matches, 'create').resolves(matchesMock.postMatches as any);
        const test = await chai.request(app).post('/login').send({
            email: 'admin@admin.com',
            password: 'secret_admin',
          });

        chaiHttpResponse = await chai.request(app).post('/matches').send({
            homeTeam: 8,
            homeTeamGoals: 2,
            awayTeam: 6,
            awayTeamGoals: 2,
            inProgress: true,
          }).set({authorization: test.body.token })
    
        expect(chaiHttpResponse.status).to.be.equal(201);
        expect(chaiHttpResponse.body).to.have.deep.equal(matchesMock.postMatches);
    
        (matches.create as sinon.SinonStub).restore();
      });
})

