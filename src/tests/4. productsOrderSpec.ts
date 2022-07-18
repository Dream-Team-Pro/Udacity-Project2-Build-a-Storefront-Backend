import express from "express";
const supertest = require("supertest");
const app = require('../tests/server.test');

describe('Tests of products_orders Table URL Endpoints', () => {
      it('should Create a new products_orders with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .post('/api/dailyorders/')
          .send({
            price: 60,
            quantity: 50,
            product_id: 2,
            order_id: 2
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to Create a new dailyorders in table')
      });

      it('should not Create a new products_orders without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .post('/api/dailyorders/')
          .send({
            price: 60,
            quantity: 50,
            product_id: 2,
            order_id: 2
          })
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      });

      it('should Get all dailyorders with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/dailyorders/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get all dailyorders in table')
      });

      it('should not Get all dailyorders with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/order/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      });

      it('should not Get all dailyorders without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/dailyorders/')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get all dailyorders without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/order/')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })      

      it('should Get one products_orders with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/dailyorders/1')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get a dailyorder from table')
      });

      it('should not Get one products_orders with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/dailyorders/100')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.body).toThrowError
      });

      it('should not Get one products_orders without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/dailyorders/1')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get one products_orders without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/order/100')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })            

    it('should Update products_orders with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .put('/api/dailyorders/')
          .send({
            id: 1,
            price: 50,
            quantity: 50,
            product_id: 2,
            order_id: 2
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to update the dailyorder in table')
      });

      it('should not update products_orders without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .put('/api/dailyorders/')
          .send({
            id: 1,
            price: 50,
            quantity: 50,
            product_id: 2,
            order_id: 2
          })          
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   


    it('should Delete products_orders with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .delete('/api/dailyorders/1')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to delete dailyorders from table')
      });

      it('should not Delete products_orders without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .delete('/api/dailyorders/1')      
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })      
})