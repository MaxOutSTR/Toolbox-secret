const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
chai.use(require('chai-match'))
const url = 'http://localhost:8080'
const externalApiUrl = 'https://echo-serv.tbxnet.com/v1'
// Results

describe('Main Suite', () => {
  describe('ExternalAPI - Status', () => {
    it('should be up', (done) => {
      chai.request(externalApiUrl)
        .get('/test')
        .end((err, res) => {
          expect(res).to.have.status(200)
          done(err)
        })
    })
  })

  describe('SecretAPI - Test cases', () => {
    it('should get the list of files', (done) => {
      chai.request(url)
        .get('/files/list')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.have.property('files')
          expect(res.body.files).to.be.an('array').to.all.match(/test\d*.csv/)
          done(err)
        })
    })

    it('should get data from a file', (done) => {
      chai.request(url)
        .get('/files/data')
        .query({
          fileName: 'test6.csv'
        })
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.have.property('file').to.match(/test\d*.csv/)
          expect(res.body).to.have.property('lines').to.be.an('array')
          done(err)
        })
    })

    it('should get all files data', (done) => {
      chai.request(url)
        .get('/files/data')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('array')
          done(err)
        })
    })
  })
})
