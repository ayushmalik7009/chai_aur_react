import express, { application } from 'express';

const app = express();


app.get('/api/products', (req,res)=>{
    const products =[
        {
            id:1,
            name :'Ayush Malik',
            price :250
        },
        {
            id:2,
            name :'Ankur Malik',
            price :300
        }
    ]

    // http://localhost:3000/api/products?search=metal

    if(req.query.search){
        const filterproducts = products.filter( product => product.name.includes(req.query.search))
        res.send(filterproducts);
        return;
    }

    setTimeout(() => {
        res.send(products);

    },3000 )
})

const port = process.env.PORT || 3001 ;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});



