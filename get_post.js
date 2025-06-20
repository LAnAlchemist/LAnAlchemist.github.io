// Educational: Attempt to fetch an HTML page from LinkedIn and parse out "posts."
// Warning: Will not work for LinkedIn in a real browser environment due to CORS and login.

const linkedInProfileURL = 'https://www.linkedin.com/in/linna-an-2539b739/';

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // 1) Fetch the HTML from the LinkedIn URL
    // NOTE: In a typical browser environment, this will fail due to CORS and LinkedIn login requirements.
    const response = await fetch(linkedInProfileURL);
    if (!response.ok) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }
    
    // 2) Get the HTML text
    const htmlText = await response.text();

    // 3) Create a temporary DOM parser using a <template> or DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    // 4) Hypothetically, if the DOM was accessible, select "post" elements
    //    For demo, we assume posts are in <div class="post-item"> (this won't actually exist on real LinkedIn)
    const allPosts = doc.querySelectorAll('.post-item');

    // 5) Convert to array and take the first 5
    const firstFivePosts = Array.from(allPosts).slice(0, 5);

    // 6) Output each post text to the console
    firstFivePosts.forEach((postElement, index) => {
      const postText = postElement.textContent.trim();
      console.log(`Post ${index + 1}: ${postText}`);
    });

  } catch (error) {
    console.error('Error fetching or parsing LinkedIn data:', error);
  }
});
