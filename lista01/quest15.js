const comprarCarro = (carro) => {
    switch (carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
            return 'Tem certeza que não prefere este modelo?'
        case 'motocicleta':
            return 'Tem certeza que não prefere este modelo?'
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(comprarCarro('hatch'))

