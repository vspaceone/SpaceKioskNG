pipeline {
    agent {
      docker {
        image 'node:latest'
      }
    }
    environment {
      npm_config_cache = 'npm_cache'
    }
     stages {
      stage('execute bash') {
          steps {
            script {
              sh 'bash'
            }
          }
        }
      stage('npm install') {
        steps {
          script {
            sh 'npm install'
          }
        }
      }
      stage('npm build') {
        steps {
          script {
            sh 'npm run build'
          }
        }
      }
      stage('deploy') {
        steps {
          withCredentials([sshUserPrivateKey(credentialsId: 'webhosting-netcup-key', keyFileVariable: 'keyfile')]) {
            sh 'scp StrictHostKeyChecking=no -i ${keyfile} -r /dist hosting180829@kiosk-dev.vspace.one/kiosk-dev.vspace.one/httpdocs'
          }
        }
      }
    }
}