import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('1998',10),
        isAdmin:true
    },
    {
        name:'Reshma',
        email:'reshma@example.com',
        password:bcrypt.hashSync('1998',10),
    },
    {
        name:'Usha',
        email:'usha@example.com',
        password:bcrypt.hashSync('1998',10),
    },
];

export default users;