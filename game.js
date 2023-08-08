for (var i=1;i<8;i++){
    $(`#desenhoboneco${i}`).hide();
}
$(`.revelar`).hide();
$(`.reiniciar`).hide();
$( ".botaoLetra" ).prop( "disabled", true );
 
const vazio =[""];
const listaFrutas = ["ABACAXI", "ABACATE", "ACEROLA", "AMEIXA", "AMORA", "ARATICUM", "BANANA", "CAJA", "CAJU", "CARAMBOLA", "CEREJA", "CIRUELA", "COCO", "CUPUAÇU", "DAMASCO", "FIGO", "FRAMBOESA", "FRUTA-DO-CONDE", "FRUTA-PAO", "GOIABA", "GRAVIOLA", "JABUTICABA", "JACA", "JAMBOLAO", "KIWI", "LARANJA", "LIMA", "LIMAO", "MACAUBA", "MAÇA", "MAMAO", "MANGA", "MARACUJA", "MELANCIA", "MELAO", "MIRTILO", "MORANGO", "NECTARINA", "PERA", "PESSEGO", "PINHA", "PINHAO", "PITAIA", "ROMA", "SAPOTA", "TAMARINDO", "TANGERINA", "UVA"];
const listaObjetos = ["ABAJUR", "ANEL", "BICICLETA", "CADEIRA", "DADO", "ESCOVA", "FOGAO", "GUARDA-CHUVA", "HARMONICA", "IMA", "JANELA", "KIMONO", "LIVRO", "MESA", "NAVIO", "OCULOS", "PENTE", "QUEBRA-CABEÇA", "RAQUETE", "SAPATO", "TELEFONE", "URNA", "VIOLINO", "WOK", "XADREZ", "YATE", "ZIPER", "ABRE-LATAS", "BALANÇA", "CADERNO", "DRONE", "ESPELHO", "FACÃO", "GUITARRA", "HARPA", "ISQUEIRO", "JARRA", "KART", "LAPIS", "MARTELO", "ORGANIZADOR", "PAPEL", "QUADRO", "RELOGIO", "SACOLA", "TAMBORETE", "UMIDIFICADOR", "VASSOURA", "XICARA", "ZABUMBA"];
const listaAnimais =["ABELHA", "ABUTRE", "ALBATROZ", "ARANHA", "BALEIA", "BARATA", "BESOURO", "BOI", "BORBOLETA", "CACHORRO", "CAMELO", "CANGURU", "CAVALO", "COALA", "COBRA", "COELHO", "CORUJA", "CROCODILO", "ELEFANTE", "ESCORPIAO", "FLAMINGO", "FOCA", "GALINHA", "GATO", "GAVIAO", "GIRASSOL", "GOLFINHO", "GORILA", "GUAXINIM", "HIPOPOTAMO", "IGUANA", "JACARE", "JAGUAR", "JOANINHA", "JUMENTO", "KAKAPO", "KOALA", "LAVANDA", "LEAO", "LEOPARDO", "LIBELULA", "LOBO", "LULA", "MACACO", "MORSO", "ORCA", "ORANGOTANGO", "OURIÇO", "PANDA", "PINGUIM"];
const listaProfissoes = ["ADVOGADO", "ANALISTA", "ARQUITETO", "BIBLIOTECARIO", "BIOLOGO", "CANTOR", "CHEF", "CIENTISTA", "COMERCIANTE", "CONTADOR", "DESENHISTA", "DESENVOLVEDOR", "DENTISTA", "ECONOMISTA", "ELETRICISTA", "ENFERMEIRO", "ENGENHEIRO", "ESTILISTA", "FARMACEUTICO", "FOTOGRAFO", "GARÇOM", "GEOLOGISTA", "JARDINEIRO", "JORNALISTA", "LOCUTOR", "MEDICO", "MOTORISTA", "MUSICO", "NUTRICIONISTA", "OFICIAL", "PEDAGOGO", "PILOTO", "PROFESSOR", "PSICOLOGO", "PUBLICITARIO", "QUIMICO", "RADIALISTA", "RECEPCIONISTA", "REPORTER", "SECRETARIO", "SOCIOLOGO", "TECNICO", "URBANISTA", "VETERINARIO", "WEB-DESIGNER", "YOGA", "ZELADOR"];
const listaCores =["AMARELO", "AMBAR", "AZUL", "AÇAFRAO", "BEGE", "BRANCO", "CARMESIM", "CINZA", "CORAL", "CREME", "DOURADO", "ESMERALDA", "FERRUGEM", "FUCSIA", "GOIABA", "GRANADA", "JADE", "LARANJA", "LILAS", "MAGENTA", "MARROM", "MOSTARDA", "OLIVA", "ORQUIDEA", "PRATA", "PURPURA", "QUARTZO", "ROSA", "ROXO", "SALMAO", "TANGERINA", "TURQUESA", "VERDE", "VERMELHO", "VIOLETA", "VINHO", "ZAFFRE", "AMETISTA"];
const listaPaises = ["AFEGANISTAO", "AFRICA DO SUL", "ALBANIA", "ALEMANHA", "ANDORRA", "ANGOLA", "ARABIA SAUDITA", "ARGELIA", "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA", "AZERBAIJAO", "BAHAMAS", "BANGLADESH", "BARBADOS", "BAREINE", "BELARUS", "BELGICA", "BELIZE", "BENIN", "BOLIVIA", "BOTSUANA", "BRASIL", "BRUNEI", "BULGARIA", "BURKINA FASO", "BURUNDI", "BUTAO", "CABO VERDE", "CAMAROES", "CAMBOJA", "CANADA", "CATAR", "CAZAQUISTAO", "CHADE", "CHILE", "CHINA", "CHIPRE", "COLOMBIA", "COMORES", "CONGO", "COREIA DO NORTE", "COREIA DO SUL", "COSTA DO MARFIM", "COSTA RICA", "CROACIA", "CUBA", "DINAMARCA"];
const listaComidas =["ACARAJE", "ALMONDEGAS", "ARROZ", "BACALHAU", "BIFE", "BOLO", "CACHORRO-QUENTE", "CALDO", "CANJA", "CANJA-DE-GALINHA", "CAPELETE", "CARNE ASSADA", "CARNE DE PORCO", "COXINHA", "CREME", "EMPADA", "ESTROGONOFE", "FEIJOADA", "FONDUE", "FRANGO ASSADO", "FRANGO FRITO", "FRIJOLES", "FRITAS", "FRITOS", "FRUTAS", "GALETO", "HAMBURGUER", "LASANHA", "LENTILHAS", "MASSAS", "MOQUECA", "MORTADELA", "OMELETE", "OVOS", "PAO", "PAO DE QUEIJO", "PASTA", "PEIXE", "PIZZA", "PORCO", "PURE", "QUEIJO", "QUIBE", "RABADA", "RISOTO", "ROCAMBOLE", "SALGADOS", "SALPICAO", "SANDUICHE", "SOPA", "STROGONOFF", "TACOS"];
const listaEsportes =["ATLETISMO", "BADMINTON", "BASQUETEBOL", "BEISEBOL", "BOXE", "CICLISMO", "ESCALADA", "ESGRIMA", "FUTEBOL", "FUTSAL", "GINASTICA", "HANDEBOL", "HOQUEI", "JIU-JITSU", "JUDO", "KARATE", "NATAÇAO", "PENTATLO", "RUGBI", "SKATE", "SURF", "TENIS", "TENIS DE MESA", "TRIATLO", "VELA", "VOLEI", "XADREZ", "YOGA", "ZUMBA"];
const listaTransportes =["AVIAO", "BARCO", "BICICLETA", "BONDE", "CAMINHAO", "CARRO", "CARROÇA", "CARRUAGEM", "CAVALO", "CHARRETE", "FOGUETE", "HELICOPTERO", "JATINHO", "JETSKI", "METRO", "MOTOCICLETA", "NAVIO", "ONIBUS", "SUBMARINO", "TAXI", "TREM", "TRICICLO", "TROLEBUS", "ULTRALEVE", "VAN"];
const listaMateriais =["ACRILICO", "ALGODAO", "ALUMINIO", "AMETISTA", "BRONZE", "CARBONO", "CERAMICA", "CHUMBO", "COBRE", "CRISTAL", "DIAMANTE", "ENXOFRE", "ESTANHO", "FELTRO", "FIBRA DE VIDRO", "GESSO", "GRANITO", "GUANO", "GUSA", "IODO", "LINHO", "MARMORE", "PAPEL", "POLIESTER", "PRATA", "QUARTZO", "SILICA", "URANIO", "VIDRO"];

var matriz = [["Frutas", listaFrutas ],
              ["Objetos", listaObjetos],
              ["Animais", listaAnimais],
              ["Profissoes", listaProfissoes],
              ["Cores", listaCores],
              ["Países", listaPaises],
              ["Comidas", listaComidas],
              ["Esportes", listaEsportes],
              ["Transportes", listaTransportes],
              ["Materiais", listaMateriais]
];

$(".selecttema").mouseover(function(){
    $(this).addClass("selecttemamousehover");
});
$(".selecttema").mouseout(function(){
    $(this).removeClass("selecttemamousehover");
});
$(".selecttema").click(function(){
    $( ".selecttema" ).prop( "disabled", true );
    $( "h3" ).html(`Tema: ${$(this).attr("id")}`);
    $( "h4" ).html(`Vida: ${vida}`);
    $( ".botaoLetra" ).prop( "disabled", false );
    $(".botaoLetra").addClass("botaoLetraOn");
    $(".statusgame").html(`<p style="font-size: 1.3em;">JOGANDO!</p>`);
    for (var i=0;i<10;i++){     
        if ($(this).attr("id") == matriz[i][0] ){
             selectLista = matriz[i][1];
                     
        }            
    }
    numAleatorio = Math.floor(Math.random() * selectLista.length);
    selectPalavra = selectLista[numAleatorio];
    separaSelectPalavra = selectPalavra.split("");
    for (var i=0;i<separaSelectPalavra.length;i++){
            $(".palavras").append(`<p class="letra${i}"> <u>*</u> </p>`);
                
    }
    for (var i=0;i<userClick.length;i++){
        for (var j=0;j<separaSelectPalavra.length;j++){
            if (userClick[i] == separaSelectPalavra[j] ){
                $(`.letra${j}`).html(`<u>${separaSelectPalavra[j]} </u>`);
                        
            } 
                    
        }
    }
    console.log(selectPalavra)
});

var selectLista = vazio;
var numAleatorio = Math.floor(Math.random() * 2);
var selectPalavra = selectLista[0];
var separaSelectPalavra = selectPalavra.split("");
var vida = 6;

for (var i=0;i<separaSelectPalavra.length;i++){
    $(".palavras").append(`<p class="letra${i}"> <u>*</u> </p>`);
    
}
var userClick = [" ", "-"];
for (var i=0;i<userClick.length;i++){
    for (var j=0;j<separaSelectPalavra.length;j++){
        if (userClick[i] == separaSelectPalavra[j] ){
            $(`.letra${j}`).html(`<u>${separaSelectPalavra[j]} </u>`);
            
        } 
        
    }
}

$(".botaoLetra").mouseover(function(){
    $(this).addClass("selecttemamousehover");
});
$(".botaoLetra").mouseout(function(){
    $(this).removeClass("selecttemamousehover");
});

var countErroFalso = 0;
var countErroVerdade = 0;
var countLetrasCertas = 0;
var checkLetrasVerdeouVermelho = 0;
$(".botaoLetra").click(function(){
    
    countErroFalso = 0;
    $(`#${$(this).attr("id")}`).prop( "disabled", true );
    userClick.push($(this).attr("id"));
    $(this).addClass("botaoLetraErrado");
    for (var j=0;j<separaSelectPalavra.length;j++){
        if ($(this).attr("id") == separaSelectPalavra[j]){
            $(this).removeClass("botaoLetraErrado");
            $(this).addClass("botaoLetraCerto");
        }
    }
    
    
    for (var i=0;i<userClick.length;i++){
        for (var j=0;j<separaSelectPalavra.length;j++){
            if (userClick[i] == separaSelectPalavra[j] ){
                $(`.letra${j}`).html(`<u>${separaSelectPalavra[j]} </u>`);
                
                
            } 
            if ($(this).attr("id") != separaSelectPalavra[j] ){
                    countErroFalso++;
                    
            }
        }
    }
    if (countErroFalso >= (separaSelectPalavra.length * userClick.length)){
        
        countErroFalso = 0;
        vida--;
        countErroVerdade++;
        
    }
    $(`#desenhoboneco${countErroVerdade}`).show();
    $(`#desenhoboneco${countErroVerdade-1}`).hide();
    $( "h4" ).html(`Vida: ${vida}`);
    
    if (countErroVerdade > 5){
        $( ".botaoLetra" ).prop( "disabled", true );
        $(".statusgame").html(`<p style="font-size: 1.3em;">PERDEU!</p>`);
        $(`.revelar`).show();
        $(`.reiniciar`).show();
    }
    for (var i=0;i<separaSelectPalavra.length;i++){
        if ($(`.letra${i}`).text() != ' * '){
            countLetrasCertas++;
            console.log("sim")
            console.log($(`.letra${i}`).text())
        }
    }
    if (countLetrasCertas >= separaSelectPalavra.length){
        $( ".botaoLetra" ).prop( "disabled", true );
        $(".statusgame").html(`<p style="font-size: 1.3em;">VENCEU!</p>`);
        $(`.reiniciar`).show();
        console.log("venceu")
    } else{
        countLetrasCertas =0;
    }


});

$(".revelar").click(function(){
    $("h5").html( `A palavra era: <br> ${selectPalavra}`);
});
$(".reiniciar").click(function(){
    location.reload();
});



// PARA MOBILE

if ($(document).width() < 768){
    $(".boneco").hide();
    $(".fileiras").hide();
    $(".menudireito").hide();
    $(".statusgame").hide();
    $(".palavras").hide();
    $(".tela").css("background-image","url(./images/background0.png)");
    $(".selecttema").click(function(){
        $(".tela").css("background-image","url(./images/background5.png)");
        $(".temas1").hide();
        $(".selecttema").hide();
        $(".menudireito").show();
        $(".boneco").show();
        $(".statusgame").show();
        $(".palavras").show();
        $(".fileiras").show();
    });




}