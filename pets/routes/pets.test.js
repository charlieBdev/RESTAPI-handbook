import supertest from 'supertest';
import server from '../../app';
// const requestWithSupertest = supertest(server);
const app = supertest(server);

describe('GET "/pets"', () => {
  test('returns all pets', async () => {
    const res = await app.get('/pets');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'Rex',
        type: 'dog',
        age: 3,
        breed: 'labrador',
      },
      {
        id: 2,
        name: 'Fido',
        type: 'dog',
        age: 1,
        breed: 'poodle',
      },
      {
        id: 3,
        name: 'Mittens',
        type: 'cat',
        age: 2,
        breed: 'tabby',
      },
    ]);
  });
});

describe('GET "/pets/:id"', () => {
  test('returns a pet by id', async () => {
    const res = await app.get('/pets/1');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual({
      id: 1,
      name: 'Rex',
      type: 'dog',
      age: 3,
      breed: 'labrador',
    });
  });
});

describe('PUT "/pets/:id', () => {
  test('updates a pet and returns it ', async () => {
    const res = await app.put('/pets/1').send({
      id: 1,
      name: 'Rexo',
      type: 'dogo',
      age: 4,
      breed: 'doberman',
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual({
      id: 1,
      name: 'Rexo',
      type: 'dogo',
      age: 4,
      breed: 'doberman',
    });
  });
});

describe('POST /pets', () => {
  test('posts a new pet', async () => {
    const res = await app.post('/pets').send({
      name: 'Salame',
      type: 'cat',
      age: 6,
      breed: 'pinky',
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual({
      id: 4,
      name: 'Salame',
      type: 'cat',
      age: 6,
      breed: 'pinky',
    });
  });
});

describe('DELETE /pets/:id', () => {
  test('deletes a pet by id and returns updated pets list', async () => {
    const res = await app.delete('/pets/2');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'Rexo',
        type: 'dogo',
        age: 4,
        breed: 'doberman',
      },
      {
        id: 3,
        name: 'Mittens',
        type: 'cat',
        age: 2,
        breed: 'tabby',
      },
      {
        id: 4,
        name: 'Salame',
        type: 'cat',
        age: 6,
        breed: 'pinky',
      },
    ]);
  });
});
