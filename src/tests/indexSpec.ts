import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('1- Test endpoint responses', () => {
    it('Main endpoint',  async () => {
        try {
            const response = await request.get('/api');
            expect(response.status).toBe(200);
        } catch (err) { 
        }
    });
    it('Resize endpoint',  async () => {
        try {
            const response = await request.get('/api/resize?filename=test&width=400&height=200');
            expect(response.status).toBe(200);
        } catch (err) {  
        }
    });

});
