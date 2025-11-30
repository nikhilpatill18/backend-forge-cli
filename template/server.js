const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'})   // replace the path of the env here 


const app=require('./app')


const Db=process.env.DATABASE_LOCAL

mongoose.connect(Db).then(()=>console.log("Data base connection successfully")
)



const port=process.env.PORT||3000

app.listen(port,()=>{
    console.log(`Server is running at the ${port}` );
})

