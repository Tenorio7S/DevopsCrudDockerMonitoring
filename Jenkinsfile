pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Constrói a imagem Docker
                    docker.build('minha-imagem:latest', '-f Dockerfile .')
                }
            }
        }
        stage('Test') {
            steps {
                // Coloque os comandos de teste aqui
                // Por exemplo: sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Coloque os comandos de implantação aqui
                // Por exemplo: sh 'docker push minha-imagem:latest'
            }
        }
    }
}
