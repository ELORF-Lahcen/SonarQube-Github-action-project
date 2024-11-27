# Steps to Configure Secrets and Variables in GitHub

## 1. Configure Secrets in GitHub
1. Navigate to your GitHub repository.
2. Go to **Settings > Secrets and variables > Actions**.
3. Click **New repository secret** to add the required secret:
  - **Name:** `SONAR_TOKEN`
    - **Value:** A token with permissions to create and analyze projects (generate from SonarQube).

## 2. Configure Variables in GitHub
1. In the same **Settings > Secrets and variables > Actions** section, click **New repository variable** to add the required variable:
  - **Name:** `SONAR_HOST_URL`
    - **Value:** Your public ngrok address or SonarQube server URL.
