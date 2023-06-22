var db = require('./db/postgres');

db.initConnection();

var table = require('./models/user.model');
table.sync({ force: true }).then(() => {
    console.log("created ./models/user.model'");
    return table.create({
        username : "maris",
        fullname : "Marissa",
        password : "53ebcf5371def5311ce59fde6d64cb32",
        contactNo : "09154453394",
        address : "Baclaran, Paranaque",
        hireDate : new Date("Feb 26, 2023 03:00:00"),
        isActive: false,
        roleId: 1
    }).then ( ()=> {
        return table.create({
            username : "er",
            fullname : "Erveen",
            password : "53ebcf5371def5311ce59fde6d64cb32",
            contactNo : "09154453394",
            address : "Sucat, Paranaque",
            hireDate : new Date("Feb 26, 2023 03:00:00"),
            isActive: false,
            roleId: 1
        })
    });
    
});

// var table = require('./models/role.model');
// table.sync({ force: true }).then(() => {
//     console.log("created ./models/role.model'");
//     return table.create({
//         roleCode : "admin",
//         roleName : "Administrator",
//         allowTransaction: true,
//         allowContentManagement: true,
//         allowAdmin: true
//     });
    
// });