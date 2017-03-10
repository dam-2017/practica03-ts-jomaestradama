export class Operaciones{
    n1:number;
    n2:number;

    constructor(n1:number,n2:number){
        this.n1= n1;
        this.n2= n2;
    }
 get suma():number{
    return this.n1+this.n2;
 }

 get resta():number{
     return this.n1-this.n2;
 }
 get factorial():number{
     var total=1;
     for(var _i=1; _i<=this.n1;_i++){
        total= total*_i;

     }
     return total;
 }
 get primo():string{
    var respuesta:string;
    if(this.n1==1 || this.n1==2){
        return "Si es primo";
    }else{
        for( var _i=2;_i<= this.n1;_i++){
         if(this.n1 % _i == 0){
                return "No es primo";
             
             }else{
                 return "Si es primo";
            
         }
        
     }
    }

    
 }

}

