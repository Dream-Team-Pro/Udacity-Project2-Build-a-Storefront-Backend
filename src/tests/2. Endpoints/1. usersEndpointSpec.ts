import express from "express";
const supertest = require("supertest");
const app = require('../../tests/server.test');

describe('Tests of User Table URL Endpoints', () => {
    it('should create a new user with Right URL endpoint', async () => {
        const res = await supertest(app)
          .post('/api/users/')
          .send({
            firstname: "mohamed",
            lastname: "salah",
            password: "12345"
          })
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to add user in table')
      });

    it('should not create a new user with Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .post('/api/user/')
          .send({
            firstname: "mohamed",
            lastname: "salah",
            password: "12345"
          })
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })

      it('should Get all users with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/users/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get all users in table')
      });

      it('should not Get all users with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/user/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      });

      it('should not Get all users without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/users/')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get all users without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/user/')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })      

      it('should Get one user with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/users/3')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get a user from table')
      });

      it('should not Get one user with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/users/100')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.body).toThrowError
      });

      it('should not Get one user without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/users/3')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get one user without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/user/100')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })            

    it('should Update user with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .put('/api/users/')
          .send({
            id: 3,
            firstname: "badr",
            lastname: "salah",
            password: "123"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to update the user in table')
      });

      it('should not update user without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .put('/api/users/')
          .send({
            id: 3,
            firstname: "badr",
            lastname: "salah",
            password: "123"
          })          
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   


    it('should Delete user with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .delete('/api/users/3')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to delete user from table')
      });

      it('should not Delete user without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .delete('/api/users/3')      
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })      

      it('should create a new user with Right URL endpoint', async () => {
        const res = await supertest(app)
          .post('/api/users/')
          .send({
            firstname: "mohamed",
            lastname: "salah",
            password: "12345"
          })
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to add user in table')
      });
})