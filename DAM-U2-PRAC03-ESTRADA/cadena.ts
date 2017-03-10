export class Cadena{
    private _cad: String;

    constructor(cad:String){
        this._cad= cad;
    }

get esPalindromo():String{
    var cadenaOriginal=this._cad.toLocaleLowerCase();   
    var letraEspacios= cadenaOriginal.split("");

    

    return "Si es palindromo";
}
get cuentaVocales():number{
    var total_vocales=0;
    var cadenaOriginal=this._cad.toLocaleLowerCase();  
    var letraEspacios= cadenaOriginal.split("");
     
     for( var _i=0;_i<= cadenaOriginal.length;_i++){
         if(cadenaOriginal[_i] == 'a'){
                total_vocales+=1;
               
             
         }else if(cadenaOriginal[_i]== 'e'){
                 total_vocales+=1;
            
         }else if(cadenaOriginal[_i]== 'i'){
                total_vocales+=1;
         }else if(cadenaOriginal[_i]== 'o'){
                total_vocales+=1;
         }else if(cadenaOriginal[_i]=='u'){
                total_vocales+=1;
         }
        
     }


    return total_vocales;
}
get cuentaLetras():number{
    var totalLetras;
    var cadenaOriginal=this._cad.toLocaleLowerCase();  
    totalLetras= cadenaOriginal.length;
    return totalLetras;
}
get cuentaPalabras():number{
    var totalPalabras;
    var cadenaOriginal=this._cad.toLocaleLowerCase();  
    var letraEspacios= cadenaOriginal.split(" ");
    totalPalabras=letraEspacios.length;

    return totalPalabras;
}


}

  
