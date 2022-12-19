import express from 'express';
import routes from './routes/main';
import resize from './routes/api/resizeApi'

const app= express();
const port = 3000;

app.use('/api',routes);
app.use('/api',resize)



app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
});


export default app;

