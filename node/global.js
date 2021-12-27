//global pode ser modificado em qualquer lugar, para que isso nao aconteça colocar o Object.freeze
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'estou em todos os lugares'
    },
    nome: 'Sistema'
})