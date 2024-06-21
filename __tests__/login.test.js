import User from '../app/models/user.js'
import request from 'supertest'
import bcrypt from 'bcrypt'
import app from '../app/app.js'

describe('POST /auth/login', () => {
  it('should respond with a 200 status and an object containing access and refresh tokens for existing user', async () => {
    const loginData = {
      email: 'daniele.pedrolli@studenti.unitn.it',
      password: 'ciaociao'
    }

    const res = await request(app).post('/auth/login').send(loginData)

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('accessToken')
    expect(res.body).toHaveProperty('refreshToken')
    expect(res.body).toHaveProperty('user_type')
  })

  it('should respond with a 404 status for wrong password or non-existing user', async () => {
    const wrongLoginData = {
      email: 'wrongemailemail@email.com',
      password: 'conigliotriste'
    }
    const res = await request(app).post('/auth/login').send(wrongLoginData)
    expect(res.status).toBe(404)
  })
})
