import 'dart:io';

void main(){
  
  print('Ingrese un número');
  int num = int.parse(stdin.readLineSync()!);
  operacion(num,primo);
  operacion(num,par);
}

operacion(num,Function func){
    func(num);
}
  
void primo(int num){
  if (num<=1){
  print('su número no es primo');
  }
  else if(num==2){
  print('Su número es primo');
  }
  else if(num >2){
   for (int i = 2; i <= num / 2; i++){
     if(num % i == 0){
       print('su número no es primo');
     }
     else{
       print('su número es primo');
     }

    }
  }

}
void par(int num) {
  if (num % 2 == 0) {
    print('Su número es par');
  } else {
    print('Su número no es par');
  }
}

 

  