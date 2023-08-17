/*output deve ser:
#
##
###
####
#####
###### */


let escada = []
function exibeEscada(degraus){
    for(let i = 1; i <degraus; i++){
        escada.push("#".repeat(i))
    }
    for(const degraus of escada){
        console.log(degraus)
    }
}
exibeEscada(7)
