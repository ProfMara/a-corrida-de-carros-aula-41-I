class Player{
    constructor(){
        this.nome = "";
        this.indice = 0;
        this.posX = 0;
        this.posY = 0;
        this.rank = 0;
        this.score = 0;
    }
    addPlayer(){
        if(this.indice == 1){
            //posicionar à esquerda
            this.posX = width/2 - 100
        }else{
            //posicionar à direita
            this.posX = width/2+100
        }
        //aponta o endereço no banco de dados
        database.ref("/players/player"+this.indice).set({
            nome     : this.nome, 
            posicaoX : this.posX, 
            posicaoY : this.posY,
            rank     : this.rank,
            score    : this.score 
        })
    }

    static getInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers = data.val();
        } )
    }

    update(){
        database.ref("players/player"+this.indice).update({
            posicaoY: this.posY, 
            posicaoX: this.posX,
            rank    : this.rank,
            score   : this.score
        })
    }

    //pegar a quantidade de jogadores
    getCount(){
        database.ref("playerCount").on("value", (data)=>{
            playerCount = data.val()
        })
    }

     //atualizar a quantidade
    updateCount(count){
        //diz o endereço do valor no banco de dados
        database.ref("/").update({
            playerCount: count
        })
    }

 
    
    



}