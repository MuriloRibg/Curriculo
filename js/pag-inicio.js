window.onload = () => {
    const pagInicial = new PagInicial()
    pagInicial.AtualizarIdade();
}

class PagInicial{

    constructor() {
        this.idade = document.querySelector("#list-idade");
        this.nascimento = document.querySelector("#list-nascimento");
    }

    AtualizarIdade(){
        const dataAtual = new Date();
        const anoAtual = dataAtual.getUTCFullYear();
        const mesAtual = dataAtual.getUTCMonth();

        const dataNascimento = ["12", "02", "2001"]
        let idade = anoAtual - dataNascimento[2];        

        // mesAtual > Number(dataNascimento[1]) ? idade-- : idade;                    
        
        this.idade.innerHTML = `<span class="fw-bold">Idade</span>: ${idade} anos`;    
        this.nascimento.innerHTML = 
            `<span class="fw-bold">Data de nascimento</span>: ${dataNascimento.join("-")}`;   
    }
}