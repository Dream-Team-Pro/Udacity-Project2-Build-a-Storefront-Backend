import express from "express";
const supertest = require("supertest");
const app = require('../../tests/server.test');

describe('Tests of product Table URL Endpoints', () => {
      it('should Create a new Product with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .post('/api/products/')
          .send({
            name: "CD",
            price: 10,
            category: "accessories"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to Create a new product in table')
      });

      it('should not Create a new Product without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .post('/api/products/')
          .send({
            name: "CD",
            price: 10,
            category: "accessories"
          })
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      });

      it('should Get all products with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/products/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get all products in table')
      });

      it('should not Get all products with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .get('/api/product/')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      });

      it('should not Get all products without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/products/')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get all products without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .get('/api/product/')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })      

      it('should Get one product with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/products/3')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to get a product from table')
      });

      it('should not Get one product with AUTH & Wrong URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .patch('/api/products/100')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.body).toThrowError
      });

      it('should not Get one product without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/products/3')
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   

      it('should not Get one product without AUTH & Wrong URL endpoint', async () => {
        const res = await supertest(app)
          .patch('/api/product/100')
        expect(res.statusCode).toEqual(500)
        expect(res.body).toThrowError
      })            

    it('should Update product with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .put('/api/products/')
          .send({
            id: 3,
            name: "DVD",
            price: 10,
            category: "accessories"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to update the product in table')
      });

      it('should not update product without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .put('/api/products/')
          .send({
            id: 3,
            name: "DVD",
            price: 10,
            category: "accessories"
          })          
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })   


    it('should Delete product with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .delete('/api/products/3')
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to delete product from table')
      });

      it('should not Delete product without AUTH & Right URL endpoint', async () => {
        const res = await supertest(app)
          .delete('/api/products/3')      
        expect(res.statusCode).toEqual(403)
        expect(res.body.message).toBe('No authorization found')
      })      

      it('should Create a new Product with AUTH & Right URL endpoint', async () => {
        let AccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOjEyMywiaWF0IjoxNjU2NTI1NjE2fQ.OjGi62sChnVlLJGva6AR3STD0EmCs8GovKjZxPVBGko';
        const res = await supertest(app)
          .post('/api/products/')
          .send({
            name: "CD",
            price: 10,
            category: "accessories"
          })
          .set('Authorization', `Bearer ${AccessToken}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toBe('Success to Create a new product in table')
      });
})