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

    it('Create', async () => {

        const mockModel = {
          id: 1,
          homeTeam: 16,
          homeTeamGoals: 2,
          awayTeam: 9,
          awayTeamGoals: 0,
          inProgress: true,
        };
    
        sinon
          .stub(matches, "create")
          .resolves(mockModel as any);
    
        chaiHttpResponse = await chai
          .request(app)
          .post('/matches')
          .send({
            homeTeam: 16,
            homeTeamGoals: 2,
            awayTeam: 9,
            awayTeamGoals: 0,
            inProgress: true,
          });
    
        const resultExpected = {
            id: 1,
            homeTeam: 16,
            homeTeamGoals: 2,
            awayTeam: 9,
            awayTeamGoals: 0,
            inProgress: true,
        }
    
        expect(chaiHttpResponse.status).to.be.equal(201);
        expect(chaiHttpResponse.body).to.have.deep.equal(resultExpected);
    
        (matches.create as sinon.SinonStub).restore();
      });
})

