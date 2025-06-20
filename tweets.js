async function fetchTweets() {
    try {
        const response = await fetch('http://localhost:3000/api/tweets');
        const data = await response.json();
        
        if (data.data) {
            const tweetsContainer = document.getElementById('tweets-container');
            tweetsContainer.innerHTML = '';
            
            data.data.forEach(tweet => {
                const tweetElement = document.createElement('div');
                tweetElement.className = 'tweet';
                tweetElement.innerHTML = `
                    <p>${tweet.text}</p>
                    <small>${new Date(tweet.created_at).toLocaleDateString()}</small>
                `;
                tweetsContainer.appendChild(tweetElement);
            });
        }
    } catch (error) {
        console.error('Error fetching tweets:', error);
        document.getElementById('tweets-container').innerHTML = '<p>Unable to load tweets at this time.</p>';
    }
}

// Fetch tweets when the page loads
document.addEventListener('DOMContentLoaded', fetchTweets); 