const inquirer = require('inquirer')

module.exports.run = () => {
    const quiz = new Quiz()
    quiz.init()
}

class Quiz {
    constructor() {
        this.min = 0
        this.max = 20
        this.operators = ['+', '-']
    }

    init() {
        const
            n1 = Math.floor(Math.random() * this.max) + this.min,
            n2 = Math.floor(Math.random() * this.max) + this.min,
            op = this.operators[Math.floor(Math.random() * this.operators.length)]

        this.question = { n1, n2, op}
        this.displayQuiz()
    }

    displayQuiz() {
        inquirer.prompt([{
            type: 'input',
            name: 'answer',
            message: `${this.question.n1} ${this.question.op} ${this.question.n2} =`,
            filter: (input) => {
                return parseInt(input)
            }
        }]).then((input) => {
            this.isRight(input.answer)
        })
    }

    isRight(answer) {
        const solution = this.getSolution()
        if (answer === solution)
            console.log('correct')
        else
            console.log('wrong. answer is: ', solution)
    }

    getSolution() {
        switch (this.question.op) {
            case '+':
                return this.question.n1 + this.question.n2
            case '-':
                return this.question.n1 - this.question.n2
        }
    }
}




