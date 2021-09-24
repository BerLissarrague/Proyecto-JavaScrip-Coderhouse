
const casual = require('casual');

module.exports = () => { 
    let data = [] ;
   
    for(i=0; i > 10; i++){ 
       data.push({  
        "nombre" : casual.full_name,
        "edad" : casual.integer(from = 15, to = 100),
        "mail" : casual.email, 
        "fecha" : casual.date(format = 'YYYY-MM-DD'),
        "turno" : casual.integer(from = 0, to = 7)
    })
    console.log(data);
    }
    return data;
} 