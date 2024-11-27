const sonarqubeUrl = process.env.SONARQUBE_URL || 'http://localhost:9000';
const authToken = process.env.SONARQUBE_TOKEN || 'your-sonarqube-auth-token';

async function getProjectsByVisibility(visibility) {
  try {
    const response = await fetch(`${sonarqubeUrl}/api/projects/search?visibility=${visibility}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching projects: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    // data = 'violation';
    return data.components;
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    throw error;
  }
}

async function setPrivateVisibility(projectKey) {
  try {
    const visibilityChangeUrl = `${sonarqubeUrl}/api/projects/update_visibility`;
    const response = await fetch(visibilityChangeUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `project=${projectKey}&visibility=private`,
    });

    if (!response.ok) {
      throw new Error(`Error changing visibility for project ${projectKey}: ${response.status} - ${response.statusText}`);
    }

    console.log(`Visibility changed to private for project: ${projectKey}`);
  } catch (error) {
    console.error(`Error changing visibility for project ${projectKey}:`, error.message);
  }
}

(async () => {
  try {
    const visibility = 'public'; // Change this to 'private' or 'public' as needed
    const projects = await getProjectsByVisibility(visibility);

    if (projects.length === 0) {
      console.log(`No projects found with ${visibility} visibility.`);
    } else {
      for (const project of projects) {
        await setPrivateVisibility(project.key);
      }
    }
  } catch (error) {
    console.error('Application error:', error.message);
  }
})();
