//Conexão com o BD Mysql
const mysql = require ('mysql');
const connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'506216',
  database:'lista_tarefa'

});
conexão . conectar ( função ( error ) { 
  if (  error ) {  
    console . error  ( ' erro ao conectar:  ' +  error  . pilha )   ;
    retorno ;
  }
 
  console.log ( ' conectado como id  ' + conexão . threadId )   ;
} );
connection.query('SELECT * FROM  lista',
function( error ,rows,fields){
   if(! error ){
    console.log('Resultado:',rows);
    else{
        console.log('Erro ao realizar a consulta');
    }
   }
})

// const mongoose = require("mongoose");

// require("dotenv").config();

// mongoose.set("strictQuery", true);

// main().catch((error) => console.log(error));

// async function main() {
//   await mongoose.connect(
    
//     `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.rvt6uwq.mongodb.net/?retryWrites=true&w=majority`
//   );

//   console.log("Conectado com sucesso!");
// }

// module.exports = main;

