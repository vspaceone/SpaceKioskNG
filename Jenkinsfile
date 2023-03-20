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
        stage('Pull repository') {
          steps {
            git branch: 'main'
                credentialsId: 'github-organization-vspaceone'
                url: 'git@github.com:vspaceone/SpaceKioskNG.git'
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
            script {
              sh 'scp -r /dist hosting180829@kiosk-dev.vspace.one/kiosk-dev.vspace.one/httpdocs'
            }
          }
        }
     }
}