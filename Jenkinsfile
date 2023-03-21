pipeline {
    agent {
      docker {
        image 'node:latest'
      }
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
      stage('change to dist dir') {
        steps {
          script {
            sh 'cd dist'
          }
        }
      }
      stage('deploy') {
        steps {
          withCredentials([sshUserPrivateKey(credentialsId: 'webhosting-netcup-key', keyFileVariable: 'keyfile')]) {
            sh 'scp -o StrictHostKeyChecking=no -i ${keyfile} -r * hosting180829@kiosk-dev.vspace.one:/kiosk-dev.vspace.one/httpdocs'
          }
        }
      }
    }
}
