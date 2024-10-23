// Classe mãe (abstração)
class Animal {
    constructor(nome, som) {
        this.nome = nome; // Nome do animal
        this.som = som;   // Som que o animal faz
    }

    // Função para fazer o som
    fazerSom() {
        console.log(`O ${this.nome} faz: ${this.som}`);
    }
}


// Classe filha Gato (herda de Animal)
class Gato extends Animal {
    constructor(nome) {
        super(nome, "miau"); // Todo gato faz "miau"
    }
}

// Classe filha Cachorro (herda de Animal)
class Cachorro extends Animal {
    constructor(nome) {
        super(nome, "au au"); // Todo cachorro faz "au au"
    }
}

// Criando instâncias (objetos)
const gato = new Gato("Felix");
const cachorro1 = new Cachorro("Rex");
const cachorro2 = new Cachorro("Bob");

// Fazendo os sons
gato.fazerSom();        // Felix faz: miau
cachorro1.fazerSom();   // Rex faz: au au
cachorro2.fazerSom();   // Bob faz: au au
