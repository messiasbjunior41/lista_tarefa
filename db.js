// //Conexão com o BD Mysql
// var mysql = require ('mysql');
// var connection =mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'506216',
//   database:'lista-tarefa'

// });
// connection . conectar ( função ( err ) { 
//   if (  err ) {  
//     console . erro ( ' erro ao conectar:  ' +  err  . pilha )   ;
//     retorno ;
//   }

//   console . log ( ' conectado como id  ' + connection . threadId )   ;
// } ) ;

// connection.query('SELECT * FROM  pessoa', function( error ,rows,tarefa){
//    if( error ){
//     console.log('Resultado:',rows);
//     else{
//         console.log('Erro ao realizar a consulta');
//     }
//    }
// })
var  connection = mysql . createConnection ( ' mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700 ' ) ; 

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

