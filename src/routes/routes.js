const express =  require('express');
const app = express.Router();

const firebase = require("firebase/app");
const auth = require("firebase/auth");

const productController = require('./../controllers/productController');

    let firebaseConfig = {
        apiKey: "AIzaSyAqIVWFG07NYFJPTL4mQXyLZWcKMKomyyk",
        authDomain: "desafioripley2.firebaseapp.com",
        databaseURL: "https://desafioripley2.firebaseio.com",
        projectId: "desafioripley2",
        storageBucket: "",
         messagingSenderId: "819385874124",
        appId: "1:819385874124:web:ab3936e1cec4bb14343469",
         measurementId: "G-PFDGNJ1JHN"
     };
  
    firebase.initializeApp(firebaseConfig);
    const auth2 = firebase.auth();


    app.post('/login',(req,res)=>{
        
        let {username, password } = req.body;
        
        console.log(username)     
        auth2.signInWithEmailAndPassword(username,password)
        .then(res=> console.log("Resultado: ",res))
        .catch(err => console.log("ERROR: ",err));
       
    });

    app.post('/register', (req,res)=>{

        let {username,password} = req.body;
        auth2.createUserWithEmailAndPassword(username,password)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });

    app.get('/products',(req,res)=>{
        productController.getProducts().then(productsData => {
            res.status(200).json(productsData.data);
        });
    });

    app.get('/product/:id',(req,res)=>{
        let {id} = req.params;    
        productController.getProduct(id).then(productData => {
            res.status(200).json(productData.data);
        }).catch(err => {
            console.log('err',err);
        })
    });


module.exports = app;