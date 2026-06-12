//ficha do jogador
const cypher = [
    {
        health:20,
        def:3,
        knife:3,
        shotpistol:5,
        shotscopt:3 * 5,
        ammunition: 6,
        pa: 0,
        maxHealth:20
    }
];
//fichas de inimigos
const inimigo1 = [
    {
        health:30,
        knife:5,
        shotpistol:5,
        grenade1:5 * 10
    }
];
//Armazenador de encontro de batalhas 
const logbatle = [
    "O vento levanta a poeira da estrada enquanto sua mão repousa sobre o cabo da arma. O desconhecido à sua frente cospe no chão e sorri de lado. Ninguém diz uma palavra. O próximo som pode ser um tiro.",
    "O silêncio das montanhas é quebrado por um estalo metálico. Antes que você consiga reagir, sombras surgem entre as rochas. Armas são apontadas em sua direção. Você caiu numa emboscada.",
    "As engrenagens do braço mecânico do inimigo rangem enquanto ele avança. Seus olhos brilhantes analisam cada movimento seu. Ele não veio negociar. Veio caçar.",
    "O trem abandonado geme sobre os trilhos enferrujados. De repente, uma figura salta de um vagão destruído, seguida por outras. O cheiro de pólvora invade o ar. O combate começou.",
    "O copo se despedaça contra a parede. Cadeiras são empurradas para trás e revólveres surgem das bainhas. Em poucos segundos, o saloon se transforma em um campo de batalha.",
    "Uma tempestade de areia cobre o horizonte. Entre os grãos avermelhados, silhuetas armadas se aproximam. Você mal consegue enxergar, mas sabe que não está sozinho.",
    "Vapor escapa das juntas metálicas da criatura à sua frente. O mecanismo gira lentamente até travar em você. Um apito estridente ecoa pelo deserto. A máquina entrou em modo de combate.",
    "O ranger das carroças para abruptamente. Homens armados surgem dos arbustos e bloqueiam o caminho. O líder deles aponta a arma para você e sorri. -Entregue tudo... ou morra.",
    "O caçador de recompensas retira um cartaz amassado do bolso. Seu rosto está estampado nele. Sem hesitar, ele guarda o papel e saca o revólver. — Vivo ou morto. Tanto faz.",
    "Velhos canhões enferrujados cercam o campo devastado. O inimigo emerge da fumaça carregando cicatrizes de batalhas esquecidas. O passado está morto. Mas a guerra ainda não acabou.",
];

//gerador de numero aleatorio

const numero = Math.floor(Math.random() * 10)

//localizadores de dom

const shop = document.querySelector('.SHOP')
const buttons = document.querySelector('.buttons')
const pause = document.querySelector("#menu-batlle")
const gameArea = document.querySelector(".game-area")
const menu = document.querySelector(".menu")
const start = document.querySelector(".start")
const healthenemy = document.querySelector(".enemyhealth");
const log = document.querySelector("#log");
const health = document.querySelector(".item1");
const def = document.querySelector(".item2");
const pa = document.querySelector(".item3");
const ammunition = document.querySelector(".item4");
const habilit1 = document.querySelector(".n1");
const habilit2 = document.querySelector(".n2");
const habilit3 = document.querySelector(".n3");
const habilit4 = document.querySelector(".n4");
const pause1 = document.querySelector('.x1')
const pause2 = document.querySelector('.x2')
const pause3 = document.querySelector('.x3')

//armazenamento de contadores
 
var countbattle = 0; 

//Eventos de click

start.addEventListener('click',() => exlog('startGame'));
habilit1.addEventListener('click',() => exlog(cypher[0].shotpistol));
habilit2.addEventListener('click',() => exlog(cypher[0].shotscopt));
habilit3.addEventListener('click',() => exlog(cypher[0].knife));
habilit4.addEventListener('click',() => exlog('reloading'));
pause3.addEventListener('click', () => exlog('se tratar'));
pause2.addEventListener('click', () => exlog('enemy'));
pause1.addEventListener('click', () => exlog('SHOP'));


//Funções

//Logica de log
function exlog(type){
    //INICIO DE JOGO
    if(type === 'startGame'){
        menu.style.display = "none";
        gameArea.style.display = "flex"; 
    }

    //DESCANSO
    if(type === 'se tratar'){
        cypher[0].health = cypher[0].maxHealth;
        log.innerHTML = `Você cuida de alguns ferimentos de bala causado, não eo melhor que se tem mais da para o gasto antes de continuar o caminho`
    }

    //inimigo zero de vida
    if(type === 'enemy'){
        if(inimigo1[0].health <= 0){
        pause.style.display = 'none';
        buttons.style.display = 'flex';

        countbattle++;

        switch(countbattle){

                    case 1:
                        log.innerHTML = `${logbatle[numero]}`
                        inimigo1[0].health = 40;
                    break;

                    case 2:
                        log.innerHTML = `${logbatle[numero]}`
                        inimigo1[0].health = 40;
                    break;

                    case 3:
                        log.innerHTML = `${logbatle[numero]}`
                        inimigo1[0].health = 40;
                    break;

                    case 4:
                        log.innerHTML = `${logbatle[numero]}`
                    break;

                    case 5:
                        log.innerHTML = `
                            Você matou ele
                            <br>
                            Enquanto você caminhava,se depara com um Caçador de recompensas,com
                            seu <strong>Cartaz</strong> de recompensa enquanto ri com aquele olhar distorcido, 
                            e uma enorme arma nas mão.Você fica confuso por que nâo entende porque esta sendo caçado e nem quem mandou fazer isso,
                            São tantas perguntas e poucas respostas, mas parece que você vai ter que perguntar a força<br>
                            ele diz:<br> 
                            "Que grande sorte eu achei não e cowboy, 
                            os corps vão adorar seu corpo na parede deles."
                        `   
                    break;

                    default:
                        log.innerHTML = `
                            Voce caminha em direção ao deserto arido em busca dos, desgraçados corps que eliminaram sua familia deseja continuar?...
                        `;
                        countbattle = 0;
                    break;
        };
        healthenemy.innerHTML = `${inimigo1[0].health}`;
    }
    }

    //batalha
    if(countbattle <= 5){

        if(cypher[0].health > 0){

            
            //Dano de pistola e log personalizado
            if(type == cypher[0].shotpistol){
                if(cypher[0].ammunition > 0 && cypher[0].ammunition <= 6){
                    
                    //Soma de valores
                    inimigo1[0].health -= cypher[0].shotpistol;
                    cypher[0].health -= ( inimigo1[0].shotpistol - cypher[0].def);

                    cypher[0].pa++;
                    cypher[0].ammunition--; 

                    //logs do tiro de pistola
                    if(inimigo1[0].health > 0 && inimigo1[0].health <= 10){
                            log.innerHTML = `
                                Você desfiriu um tiro no atirador, deu ${cypher[0].shotpistol} de dano!
                                <br>
                                O Atirador reage e dispara em você ${inimigo1[0].shotpistol}.
                                <br>
                                O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                                <br> 
                                ele esta com ${inimigo1[0].health} de vida`
                        }
                    else if(inimigo1[0].health > 10 && inimigo1[0].health <= 20){
                            log.innerHTML = `
                                Você desfiriu um tiro no atirador, deu ${cypher[0].shotpistol} de dano!
                                <br>
                                O Atirador reage e dispara em você ${inimigo1[0].shotpistol}.
                                <br>
                                O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                                <br> 
                                ele esta com ${inimigo1[0].health} de vida`
                    }
                    else if(inimigo1[0].health > 20 && inimigo1[0].health <= 30){
                            log.innerHTML = `
                                Você desfiriu um tiro no atirador, deu ${cypher[0].shotpistol} de dano!
                                <br>
                                O Atirador reage e dispara em você ${inimigo1[0].shotpistol}.
                                <br>
                                O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                                <br> 
                                ele esta com ${inimigo1[0].health} de vida`
                    }
                    else if(inimigo1[0].health > 30 && inimigo1[0].health <= 40){
                            log.innerHTML = `
                                Você desfiriu um tiro no atirador, deu ${cypher[0].shotpistol} de dano!
                                <br>
                                O Atirador reage e dispara em você ${inimigo1[0].shotpistol}.
                                <br>
                                O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                                <br> 
                                ele esta com ${inimigo1[0].health} de vida`
                    }
                    else if(inimigo1[0].health > 40 && inimigo1[0].health <= 50){
                            log.innerHTML = `
                                Você desfiriu um tiro no atirador, deu ${cypher[0].shotpistol} de dano!
                                <br>
                                O Atirador reage e dispara em você ${inimigo1[0].shotpistol}.
                                <br>
                                O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                                <br> 
                                ele esta com ${inimigo1[0].health} de vida`
                    }
                    else if(inimigo1[0].health > 50 && inimigo1[0].health <= 60){
                            log.innerHTML = `
                                Você desfiriu um tiro no atirador, deu ${cypher[0].shotpistol} de dano!
                                <br>
                                O Atirador reage e dispara em você ${inimigo1[0].shotpistol}.
                                <br>
                                O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                                <br> 
                                ele esta com ${inimigo1[0].health} de vida`
                    } 
                }
                else {
                    log.innerHTML = `
                    Voce esta sem municão!
                    <br>
                    Recarregue imeditamente
                    `
                }
            }

            //DANO DE ESCOPETA E LOG PERSONALIZADO
            else if(type == cypher[0].shotscopt){
                if(cypher[0].pa >= 3){
                    cypher[0].health -= ( inimigo1[0].shotpistol - cypher[0].def);
                    inimigo1[0].health -= cypher[0].shotscopt;
                    cypher[0].pa -= 3;

                    //logs do tiro de escopeta
                    if(inimigo1[0].health > 0 && inimigo1[0].health <= 10){
                        log.innerHTML = `
                            Você causo ${cypher[0].shotscopt} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                        `
                    }
                    else if(inimigo1[0].health > 10 && inimigo1[0].health <= 20){
                        log.innerHTML = `
                            Você causo ${cypher[0].shotscopt} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                        `
                        } 
                    else if(inimigo1[0].health > 20 && inimigo1[0].health <= 30){
                        log.innerHTML = `
                            Você causo ${cypher[0].shotscopt} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                        `
                    } 
                    else if(inimigo1[0].health > 30 && inimigo1[0].health <= 40){
                        log.innerHTML = `
                            Você causo ${cypher[0].shotscopt} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                        `
                    } 
                    else if(inimigo1[0].health > 40 && inimigo1[0].health <= 50){
                        log.innerHTML = `
                            Você causo ${cypher[0].shotscopt} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                        `
                    } 
                    else if(inimigo1[0].health > 50 && inimigo1[0].health <= 60){
                        log.innerHTML = `
                            Você causo ${cypher[0].shotscopt} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                        `
                    }
                }
                else{
                    log.innerHTML += "<br>Voce não tem PA o suficiente"
                }    
            }   

            //Dano de faca e log personalizado
            else if(type == cypher[0].knife){
                cypher[0].health -= ( inimigo1[0].knife - cypher[0].def);
                inimigo1[0].health -= cypher[0].knife;
                cypher[0].pa++;

                if(inimigo1[0].health > 0 && inimigo1[0].health <= 10){
                            log.innerHTML = `
                            Você causo ${cypher[0].knife} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                            `
                }
                
                else if(inimigo1[0].health > 10 && inimigo1[0].health <= 20){
                            log.innerHTML = `
                            Você causo ${cypher[0].knife} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                            `
                }
                
                else if(inimigo1[0].health > 20 && inimigo1[0].health <= 30){
                            log.innerHTML = `
                            Você causo ${cypher[0].knife} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                            `
                }
                
                else if(inimigo1[0].health > 30 && inimigo1[0].health <= 40){
                            log.innerHTML = `
                            Você causo ${cypher[0].knife} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                            `
                }
                
                else if(inimigo1[0].health > 40 && inimigo1[0].health <= 50){
                            log.innerHTML = `
                            Você causo ${cypher[0].knife} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                            `
                }
                
                else if(inimigo1[0].health > 50 && inimigo1[0].health <= 60){
                            log.innerHTML = `
                            Você causo ${cypher[0].knife} de dano!
                            <br>
                            O atirador esta muito ferido,você consegue ver que as balas perfuraram sua pele ele esta sangrando muito, igual uma presa
                            <br> 
                            ele esta com ${inimigo1[0].health} de vida}
                            `
                }  
            }
        }
        else if(cypher[0].health == 0){
            log.innerHTML = "Você foi fuzilado! o faroeste de metal não lembrara da sua carapuça em meio ao deserto, seu corpo e enterrado pela areia, deixado aos coites para se alimentarem";
        }
    }

    //Condicional de inimo com a vida zerada
    if(inimigo1[0].health <= 0){
        pause.style.display = 'flex';
        buttons.style.display = 'none';
        log.innerHTML = `A carcaça do seu inimigo cai em meio ao deserto, você se sente fadigado dessa batalha quem esta no chão e ele mais o proximo pode ser você`
        
    }

    //Sistema de recarga
    if(type == "reloading"){
        cypher[0].ammunition = 6;
        
        if(cypher[0].health > 0){
            cypher[0].health -= (inimigo1[0].shotpistol - cypher[0].def);  
            log.innerHTML = ` Enquanto você recarregava o atirador desfiriu um tiro em você, deu ${cypher[0].shotpistol} de dano!`
        }
    };
    //SHOP
    if(type === 'SHOP'){
        pause.style.display = 'none';
        gameArea.style.display ='none';
        shop.style.display = 'flex';
    }
    
    //Manipuladores de dom, com valores
    ammunition.innerHTML = `${cypher[0].ammunition}`;
    health.innerHTML = `${cypher[0].health}`;
    pa.innerHTML = `${cypher[0].pa}`;
    def.innerHTML = `${cypher[0].def}`;
    healthenemy.innerHTML = `${inimigo1[0].health}`;
};