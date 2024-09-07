let number = 0
let cron 
const p = document.querySelector('p')
const numberInicio = 0

function start(){
    cron = setInterval(function(){
        number++
        p.innerHTML = number

    }, 1000);

}

function stop(){
    clearInterval(cron)


}


function limpar(){
    p.innerHTML = numberInicio

}

