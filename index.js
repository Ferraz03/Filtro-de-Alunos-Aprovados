const alunos = require('./alunos.json')

function imprimirAprovados(listaDeAlunos) {

    console.log("----- Alunos aprovados com nota 7 ou superior -----\n");

    listaDeAlunos.forEach(aluno => {
        const somaNotas = aluno.notas.reduce((anterior, proximo) => anterior + proximo);

        const media = somaNotas / aluno.notas.length;
        if (media >= 7){
            console.log(`Aluno: ${aluno.nome} - Média: ${media.toFixed(2)} - Curso: ${aluno.curso}`);
        }
    })
}

imprimirAprovados(alunos);