import mysql from 'mysql';

const con = mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'506216',
    database:'lista-tarefa'
    });
    
    export default con;