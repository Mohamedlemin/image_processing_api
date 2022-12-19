import express from 'express';
import routes from './routes/main';

const app= express();
const port = 3000;

app.use('/api',routes);



app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
});