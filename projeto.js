class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: "usou magia",
            guerreiro: "usou espada",
            monge: "usou artes marciais",
            ninja: "usou shuriken"
        };

        // Verifica se o tipo existe no dicionário, senão usa um ataque padrão
        const ataque = ataques[this.tipo.toLowerCase()] || "usou um ataque desconhecido";

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando heróis e testando os ataques
const herois = [
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Arthur", 30, "guerreiro"),
    new Heroi("Shaolin", 40, "monge"),
    new Heroi("Hanzo", 25, "ninja")
];

herois.forEach(heroi => heroi.atacar());
