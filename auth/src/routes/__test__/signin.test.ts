import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails whe a an incorrect password is suplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'ppppppppppp',
    })
    .expect(400);
});

it('response with a cookie when given valid credentials', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signin')
    .send({
      password: 'password',
    })
    .expect(400);

  await request(app).post('/api/users/signin').send({}).expect(400);
});
