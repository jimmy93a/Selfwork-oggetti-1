

let persona = {

    'nome' : 'Jimmy',
    'cognome' : 'Albano',
    "eta'" : 33,
    'presentazione' : function(){

        console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this["eta'"]} anni`);
                
    }
};

persona.presentazione();
