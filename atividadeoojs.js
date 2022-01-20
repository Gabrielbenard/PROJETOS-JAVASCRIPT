class contabancaria {
    constructor(agencia, numero , tipo,){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo= 0;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(val){
        this._saldo = val; 
    }
    sacar(val){
        if(val> this._saldo){
            return "operação negada";
        }
        this._saldo = this._saldo -val;
        return this._saldo;
    }
    depositar(val){
        this._saldo= this._saldo + val;
        return this._saldo;
    }  
}


class contacorrente extends contabancaria{
constructor(agencia, numero ){
    super(agencia, numero );
    this.typo = "corrente";
    this._cartaocredito= "cartãodecredito";
    }

    get cartaocredito(){
        return this._cartaocredito;
    }   

    set cartaocredito(val){
        this._cartaocredito = val;
    }
        


}


class contapoupança extends contabancaria {
    constructor(agencia, numero ){
        super(agencia,numero);
        this.tipo = "poupança";    
    }

}

class contauniversitária extends contabancaria {
    constructor(agencia, numero ){
        super(agencia,numero);
        this.tipo = "universitaria";    
    }

    sacar(val){
        if(val > 500){
            return "operação negada, o valor deve estar abaixo de 500";
        }
        this._saldo = this._saldo - val;

    }

}