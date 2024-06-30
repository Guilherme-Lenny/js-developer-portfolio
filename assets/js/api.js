async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Guilherme-Lenny/js-developer-portfolio/main/assets/js/main.js';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
