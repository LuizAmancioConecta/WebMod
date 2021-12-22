const getTipoDiaSemana = (dia) => {
    switch (dia){
        case 1:
            return 'final de semana'       
        case 2:
            return 'dia útil'    
        case 3:
            return 'dia útil'     
        case 4:
            return 'dia útil'           
        case 5:
            return 'dia útil'           
        case 6:
            return 'dia útil'           
        case 7:
            return 'final de semana'
        default:
            return 'numero inválido'        
    }
}

console.log(getTipoDiaSemana(1))