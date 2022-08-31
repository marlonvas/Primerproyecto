const user ={
    name: "John",
    email: "john@gmail.com",
    password: "123456",
    role: "admin",
    avatar: "https://avatars0.githubusercontent.com/u/1256?v=4",
    status: "active",
    adress: {
        email: "john@gmail.com",
        password: "123456",
        calle:  "John",
    },
    envioMail: function (x, y ){
        
        if (x + y >=18){
            console.log('es mayor de edad');
        } else{
            console.log('es menor  de edad');
        }
    

    }


     
}

console.log(user.envioMail());