const express = require('express');
const app = express();
const register = {fullName:'', email:'', password:'', rpassword:''};
const login = {email:'', password:''};

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.post('/register', (req, res) =>{
    register.fullName = req.body.fullName;
    register.email = req.body.email;
    register.password = req.body.password;
    register.rpassword = req.body.rpassword;
  if(register.fullName && register.email && register.password && register.rpassword){
    res.status(200).json({msg: 'Register Succesful'});
  } else{
    res.status(500).json({msg: 'Some fields are missing'})
  }      
});
app.put('/login', (req, res) =>{
    login.email = req.body.email;
    login.password =req.body.password;
  if(register.password == login.password && register.email == login.email){
    res.status(200).send({
        message: "Login Successful",
      });     
  } else {
    res.status(404).send({
        message: "Some error occurred.",
      });
  }          
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));

