const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);
const checkprimeUrl = '/api/primes?action=checkprime';
const sumandcheckUrl = '/api/primes?action=sumandcheck';

test('server works', async () => {
  await api
    .get('/')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('nonsensical api endpoint is handled appropriately', async () => {
  const response = await api
    .get('/api/test123?action=checkprime&integer=7')
    .expect(404)
    .expect('Content-Type', /application\/json/);

  expect(response.body).toStrictEqual({ 'error': 'unknown endpoint' });
});

test('nonsensical action is handled appropriately', async () => {
  const response = await api
    .get('/api/primes?action=nonsense&integer=7')
    .expect(400)
    .expect('Content-Type', /application\/json/);

  expect(response.body).toStrictEqual({ 'error': 'unknown action' });
});

test('checkprime works and returns json', async () => {
  await api
    .get(`${checkprimeUrl}&integer=7`)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('checkprime returns correct json for prime', async () => {
  const response = await api.get(`${checkprimeUrl}&integer=7`);
  expect(response.body).toStrictEqual({ 'isPrime': true });
});

test('checkprime returns correct json for non-prime', async () => {
  const response = await api.get(`${checkprimeUrl}&integer=12`);
  expect(response.body).toStrictEqual({ 'isPrime': false });
});

test('checkprime malformed request is handled appropriately', async () => {
  const response = await api
    .get(`${checkprimeUrl}&integers=1,2,3`)
    .expect(400)
    .expect('Content-Type', /application\/json/);

  expect(response.body).toStrictEqual({ 'error': 'malformed request' });
});

test('sumandcheck works and returns json', async () => {
  await api
    .get(`${sumandcheckUrl}&integers=1,2,3`)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('sumandcheck returns correct json for prime sum', async () => {
  const response = await api.get(`${sumandcheckUrl}&integers=10,10,10,10,20,20,20,1`);
  expect(response.body).toStrictEqual({ 'result': 101, 'isPrime': true });
});

test('sumandcheck returns correct json for non-prime sum', async () => {
  const response = await api.get(`${sumandcheckUrl}&integers=10,10,10,10,20,20,20`);
  expect(response.body).toStrictEqual({ 'result': 100, 'isPrime': false });
});

test('sumandcheck malformed request is handled appropriately', async () => {
  const response = await api
    .get(`${sumandcheckUrl}&integer=111`)
    .expect(400)
    .expect('Content-Type', /application\/json/);

  expect(response.body).toStrictEqual({ 'error': 'malformed request' });
});