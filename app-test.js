import app from "./app.js";
import { expect } from "chai";
import chaiHttp, { request } from "chai-http";

chaiHttp.use(expect);
describe('Planets API Suite', () => {

    describe('Fetching Planet Details', () => {
        it('it should fetch a planet named Mercury', (done) => {
            let payload = {
                id: 1
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(1);
                    res.body.should.have.property('name').eql('Mercury');
                    done();
                });
        });

        it('it should fetch a planet named Venus', (done) => {
            let payload = {
                id: 2
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(2);
                    res.body.should.have.property('name').eql('Venus');
                    done();
                });
        });

        it('it should fetch a planet named Earth', (done) => {
            let payload = {
                id: 3
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(3);
                    res.body.should.have.property('name').eql('Earth');
                    done();
                });
        });
        it('it should fetch a planet named Mars', (done) => {
            let payload = {
                id: 4
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(4);
                    res.body.should.have.property('name').eql('Mars');
                    done();
                });
        });

        it('it should fetch a planet named Jupiter', (done) => {
            let payload = {
                id: 5
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(5);
                    res.body.should.have.property('name').eql('Jupiter');
                    done();
                });
        });

        it('it should fetch a planet named Satrun', (done) => {
            let payload = {
                id: 6
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(6);
                    res.body.should.have.property('name').eql('Saturn');
                    done();
                });
        });

        it('it should fetch a planet named Uranus', (done) => {
            let payload = {
                id: 7
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(7);
                    res.body.should.have.property('name').eql('Uranus');
                    done();
                });
        });

        it('it should fetch a planet named Neptune', (done) => {
            let payload = {
                id: 8
            }
            request(app)
                .post('/planet')
                .send(payload)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(8);
                    res.body.should.have.property('name').eql('Neptune');
                    done();
                });
        });

        // it('it should fetch a planet named Pluto', (done) => {
        //     let payload = {
        //         id: 9
        //     }
        //   request(server)
        //       .post('/planet')
        //       .send(payload)
        //       .end((err, res) => {
        //             res.should.have.status(200);
        //             res.body.should.have.property('id').eql(9);
        //             res.body.should.have.property('name').eql('Sun');
        //         done();
        //       });
        // });


    });
});

