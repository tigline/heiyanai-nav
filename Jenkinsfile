pipeline {
    agent any

    tools {
        nodejs 'NodeJS-19'
    }

    stages {
        // stage('Checkout') {
        //     steps {
        //         git branch: 'develop', url: 'https://github.com/tigline/indoor-location-web.git'
        //     }
        // }

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // 使用 SSH 凭据和 scp 将构建好的文件传输到 EC2 实例
                    withCredentials([sshUserPrivateKey(credentialsId: 'awsserver', keyFileVariable: 'keyFile')]) {
                        sh 'scp -i $keyFile -r dist/ ubuntu@13.112.168.219:/home/ubuntu/frontend'
                    }
                }
            }
        }
    }
}