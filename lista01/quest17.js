const aumentoSalarial = (salario, plano) => {
    switch (plano) {
        case 'A':
            return salario*1.1
        case 'B':
            return salario*1.15
        case 'C':
            return salario*1.2
    }
}