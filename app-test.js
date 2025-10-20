import app from "./app.js";
import { use, expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";
const chai = use(chaiHttp);

describe('Planets API Suite', () => {

    describe('Fetching Planet Details', () => {
        it('it should fetch a planet named Mercury', (done) => {
            let payload = {
                id: 1
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(1);
                    expect(res.body.name).to.equal('Mercury');
                    done();
                });
        });

        it('it should fetch a planet named Venus', (done) => {
            let payload = {
                id: 2
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(2);
                    expect(res.body.name).to.equal('Venus');
                    done();
                });
        });

        it('it should fetch a planet named Earth', (done) => {
            let payload = {
                id: 3
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(3);
                    expect(res.body.name).to.equal('Earth');
                    done();
                });
        });
        it('it should fetch a planet named Mars', (done) => {
            let payload = {
                id: 4
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(4);
                    expect(res.body.name).to.equal('Mars');
                    done();
                });
        });

        it('it should fetch a planet named Jupiter', (done) => {
            let payload = {
                id: 5
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(5);
                    expect(res.body.name).to.equal('Jupiter');
                    done();
                });
        });

        it('it should fetch a planet named Satrun', (done) => {
            let payload = {
                id: 6
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(6);
                    expect(res.body.name).to.equal('Saturn');
                    done();
                });
        });

        it('it should fetch a planet named Uranus', (done) => {
            let payload = {
                id: 7
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(7);
                    expect(res.body.name).to.equal('Uranus');
                    done();
                });
        });

        it('it should fetch a planet named Neptune', (done) => {
            let payload = {
                id: 8
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(8);
                    expect(res.body.name).to.equal('Neptune');
                    done();
                });
        });

        it('it should fetch a planet named Pluto', (done) => {
            let payload = {
                id: 9
            }
            chai.request.execute(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.id).to.equal(9);
                    expect(res.body.name).to.equal('Sun');
                    done();
                });
        });
    });
});

