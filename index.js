const perguntas = [
    {
        pergunta:
            'Qual é a maneira correta de declarar uma variável em JavaScript?',
        respostas: ['var x;', 'let x;', 'const x;'],
        correta: 2,
    },
    {
        pergunta: 'O que é JavaScript?',
        respostas: [
            'Uma linguagem de marcação',
            'Um sistema operacional',
            'Uma linguagem de programação',
        ],
        correta: 2,
    },
    {
        pergunta:
            'Como você escreve um comentário de linha única em JavaScript?',
        respostas: [
            '// Este é um comentário',
            '/* Este é um comentário */',
            '# Este é um comentário',
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            'Converter uma string em número inteiro',
            'Arredondar um número para o inteiro mais próximo',
            'Converter um número em string',
        ],
        correta: 0,
    },
    {
        pergunta: 'O que é o DOM em JavaScript?',
        respostas: [
            'Documento de Orientação de Mídia',
            'Modelo de Objeto do Documento',
            'Diretório de Operações de Mídia',
        ],
        correta: 1,
    },
    {
        pergunta: 'Qual dos seguintes NÃO é um tipo de dados em JavaScript?',
        respostas: ['Boolean', 'String', 'Float'],
        correta: 2,
    },
    {
        pergunta: 'Como você chama uma função em JavaScript?',
        respostas: ['invokeFunction()', 'callFunction()', 'nameOfFunction()'],
        correta: 2,
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            'Nenhuma diferença, ambos são iguais',
            "==' compara apenas valores, '===' compara valores e tipos",
            "===' compara apenas valores, '==' compara valores e tipos",
        ],
        correta: 1,
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            'Um evento relacionado ao teclado',
            'Um evento relacionado ao mouse',
            'Um evento relacionado à rolagem',
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
        respostas: [
            'Retornar o tipo de uma variável',
            'Comparar dois valores',
            'Realizar uma operação de tipo',
        ],
        correta: 0,
    },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    //copia o template
    const quizItem = template.content.cloneNode(true)
    //modifica h3
    quizItem.querySelector('h3').textContent = item.pergunta
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute(
            'name',
            'pergunta-' + perguntas.indexOf(item)
        )
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    //deleta o dt pois já foi usado no clone, não é mais necessário
    quizItem.querySelector('dl dt').remove()
    //coloca na tela
    quiz.appendChild(quizItem)
}
