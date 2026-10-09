const  gastos = [
    { descrição: "aluguel", valor: 120, categoria: "moradia" },
    { descrição: "Mercado", valor: 650, categoria: "alimentação" },
    { descrição: "Transporte", valor: 210, categoria: "transporte"},
    { descrição: "Internet", valor: 99, categoria: "moradia" },
    { descrição: "Lanches", valor: 180, categoria: "alimentação"},
    { descrição: "Curso", valor: 300, categoria:"educação"},

];

//  1. Soma de todos os valores
function calculartotal(gastos) {
    let total = 0;
    for(const gasto of gastos) {
        total += gasto.valor;

    }
    return total;
}    
function gastomaisCaro(gastos) {
    let maisCaro = gastos [0];
    for (const gasto of gastos) {
        if (gasto.valor > gastomaisCaro.valor) {
            maisCaro = gasto;
        }
    }
    return maisCaro;
}
function filtrarporcategoria(gasto, categoria) {
    return gastos.filter (gasto => gasto.categoria === categoria)
}
function totalporcategoria(gastos) {
    const totais = {}; 
    for (const gasto of gastos) {
        if (totais[gasto.categoria] === undefined) {
            totais[gasto.categoria] = 0;

        }
        totais[gasto.categoria] += gasto.valor;

    }
    return totais;

}
function calcularmedia(gastos) {
    const media = calculartotal(gastos) / gastos.length;
    return Number(media.toFixed (2))

}
function classificarorcamento (total,limite) {
    if(total< limite){
        return "pode gastar +";
    }
    else if ( total === limite) {
        return "pare de gastar, vai ficar pobre";

    }
    else {
        return "Lascou de vez, trabalhar +"

    }
}
const limite = 1558
const total = calculartotal(gastos)


console.log("total", total)
console.log("gasto mais caro", gastomaisCaro(gastos))
console.log("filtros:",filtrarporcategoria(gastos, "alimentação"))
console.log("total de categoria:",totalporcategoria(gastos))
console.log("media de gastos:", calcularmedia(gastos))
console.log("Carteira:", classificarorcamento (total,limite))
