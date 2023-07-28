class Form {
    constructor(){
        this.titulo = createImg("TITULO.png","titulo");
        this.input = createInput().attribute("placeholder", "Digite Seu Nome");
        this.playButton = createButton("JOGAR");
        this.saudacao = createElement("h2");
    }
    esconder(){
        this.playButton.hide();
        this.input.hide();        
        this.saudacao.hide();                
        this.titulo.position(40, 50);
        this.titulo.class("gameTitleAfterEffect");
          
    }
    exibir(){
        this.posicionar();
        this.estilizar();
        this.mouseClicou();
    }

    mouseClicou(){
        //define o que acontece quando o botão
        //é clicado
        this.playButton.mousePressed(()=>{
            //esconde o botão
            this.playButton.hide();
            //esconde a caixa de texto
            this.input.hide();
            //define a mensagem
            var msg = "Olá! Seja bem vindo(a) " + this.input.value() + "!";
            //exibe no site
            this.saudacao.html(msg);
            //aumentar o número de jogadores
            playerCount++;
            //escreve o novo valor no banco de dados
            player.updateCount(playerCount);
            player.indice = playerCount;
            player.nome = this.input.value();
            player.addPlayer()
          
        });
    }

    posicionar(){
        this.titulo.position(120, 50);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.saudacao.position(width / 2 - 300, height / 2 - 100);
    }
    estilizar(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.titulo.class("gameTitle");
        this.saudacao.class("greeting");
    }

}