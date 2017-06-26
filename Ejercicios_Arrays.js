
  var num =prompt("INGRESE EL NUMERO A MULTIPLICAR");
  var arr = [4,4,5,12];
  var resultado;
  var multiplica;

  arr.push(num);

     resultado = arr,reduce(function(valorAnt,valorAct,indice,vector) {
       return(valorAnt*valorAct)
     });



     function ejercicio1(_arr,_num)
     {
       var reduceArr = _arr.reduce(function(total,actual){
         return total * actual;
       });
       return reduceArr * _num
     }
