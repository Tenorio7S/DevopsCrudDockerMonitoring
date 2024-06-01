pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Construindo a imagem Docker...'
                script {
                    // Constrói a imagem Docker
                    docker.build('minha-imagem:latest', '-f Dockerfile .')
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Executando testes...'
                // Coloque os comandos de teste aqui
                // Por exemplo: sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Implantando aplicação...'
                // Coloque os comandos de implantação aqui
                // Por exemplo: sh 'docker push minha-imagem:latest'
            }
        }
    }
}

