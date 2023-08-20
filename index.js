let Palp =document.querySelector('#number') //numeros escolhidos
let anteriores = document.querySelector('.anter') //anteriores
const okey =document.querySelector('.certo')//certo ou errado
const alt = document.querySelector('.alto')//esta alto ou baixo
const printChance = document.querySelector('.chances')

let news = []

let chance = 0

let secret = Math.floor(Math.random() * 100 + 1)


function enviar(){

if(chance <10){

    const contagem = 1 + chance

    chance = contagem


    if( news.indexOf(Palp.value) == -1){

        if(Palp.value > 0 && Palp.value<=100){

            news.push(Palp.value)

            anteriores.innerHTML=`palpites anteriores ${news},voce gastou ${chance} chance`
    
    
            if(Palp.value == secret){
                window.alert('voce acertou o número parabens!')

                secret = Math.floor(Math.random() * 100 + 1)
                chance = chance - chance 
                anteriores.innerHTML=''
                alt.innerHTML=''
                okey.innerHTML=''

                news = []

    
            }else{
    
                okey.innerHTML='Errado!'
        
                if(Palp.value > secret){
                    
                    alt.innerHTML='seu palpite esta muito alto!'
                    Palp.value =''
                    
                
                }else{
                    alt.innerHTML='seu palpite esta muito baixo!'
                    Palp.value ='' //apagar input depois de digitado 
                  
                   
                }
            }
    
        }else{
            window.alert('o número escolhido é inválido. Verifique as regras')
            
        }
        }else{
            window.alert('este número ja foi escolhido')
        }

}else{
    window.alert('suas chances acabaram')

    
    secret = Math.floor(Math.random() * 100 + 1)
    chance = chance - chance 
    anteriores.innerHTML=''
    alt.innerHTML=''
    okey.innerHTML=''

    news = []
}


}





     
