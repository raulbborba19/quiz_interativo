const nomes = ["Juca", "Emerson", "Osvaldo", "Pipokinha", "Deolane", "Virginia"];

export function aleatorio (Lista){
    const posicao = Math.floor(Math.random()* Lista.lenght);
    return lista(posicao);
}

export const nome = aleatorio(nomes)