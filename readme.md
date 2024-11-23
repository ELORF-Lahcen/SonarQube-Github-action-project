# Github Actions and SonarQube integration

This repository contains an example of [SonarQube](https://docs.sonarsource.com/sonarqube/10.3/) integration with [Github Actions](https://docs.github.com/en/actions). Running SonarQube locally and publishing it to the world using [ngrok](https://ngrok.com/)

# Usage
* Fork this repository on your Github account
* You can run SonarQube and ngrok locally following the instructions in this  [repository](https://github.com/BrainsDevOps/sonarqube-udemy-docker-compose)
* Create a token for the projects analysis in your [SonarQube](http://localhost:9000/account/security) local server
* Create secrets for your sonar server url and token in your Github repository
    * SONAR_TOKEN - The token you've generated in your SonarQube server
    * SONAR_HOST_URL - Your Ngrok domain, where you're exposing SonarQube to the Internet
* Run the action in the "Actions" tab of your Github repository. Manually or with a push to the main branch
* If everything goes well, you should see the result of your analysis in your [SonarQube server](http://localhost:9000/dashboard?id=github-actions)
