
const Variaveis = () =>{
    const nome = "Jujuba";
    const pessoa = {
        atividade: "estudante",
        idade: 16,
    };

    return (

        <div>
            <h1>Nome: {nome} </h1>
            <h2>Objeto: {pessoa.idade} </h2>
            <p>Ocupação: {pessoa.atividade}</p>
        </div>

    )
}

export default Variaveis;