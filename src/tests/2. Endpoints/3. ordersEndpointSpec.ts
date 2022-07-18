import express from "express";
const supertest = require("supertest");
const app = require('../../tests/server.test');

describe('Tests of order Table URL Endpoints', () => {
      it('should Create a new order with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .post('/api/orders/')
          .send({
            user_id: 4,
            status: "active"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to Create a new order in table')
      });

      it('should not Create a new order without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .post('/api/orders/')
          .send({
            user_id: 4,
            status: "active"
          })
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      });

      it('should Get all orders with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/orders/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get all orders in table')
      });

      it('should not Get all orders with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/order/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      });

      it('should not Get all orders without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/orders/')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get all orders without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/order/')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })      

      it('should Get one order with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/orders/3')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get an order from table')
      });

      it('should not Get one order with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/orders/100')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.body).toThrowError
      });

      it('should not Get one order without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/orders/3')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get one order without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/order/100')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })            

    it('should Update order with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .put('/api/orders/')
          .send({
            id: 1,
            user_id: 4,
            status: "complete"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to update the order in table')
      });

      it('should not update order without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .put('/api/orders/')
          .send({
            id: 1,
            user_id: 4,
            status: "complete"
          })          
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   


    it('should Delete order with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .delete('/api/orders/3')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to delete order from table')
      });

      it('should not Delete order without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .delete('/api/orders/3')      
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })      

      it('should Create a new order with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .post('/api/orders/')
          .send({
            user_id: 4,
            status: "active"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to Create a new order in table')
      });
})