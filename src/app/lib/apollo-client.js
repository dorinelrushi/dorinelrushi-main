const fetchGraphQL = async (query, variables = {}) => {
    const username = process.env.NEXT_PUBLIC_WP_USERNAME;
    const password = process.env.NEXT_PUBLIC_WP_PASSWORD;
    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL;
  
    if (!username || !password || !apiUrl) {
        console.error("❌ ERROR: Missing environment variables.");
        return null;
    }
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa(username + ":" + password),
        },
        body: JSON.stringify({ query, variables }),
      });
  
      if (!response.ok) {
        console.error("❌ ERROR: API request failed with status", response.status);
        return null;
      }
  
      const text = await response.text();
      console.log("✅ SERVER RESPONSE:", text);
  
      if (text.startsWith("<!DOCTYPE html>")) {
        console.error("❌ ERROR: Server returned an HTML page instead of JSON.");
        return null;
      }
  
      return JSON.parse(text);
    } catch (error) {
      console.error("❌ ERROR: Network or JSON Parsing Issue", error);
      return null;
    }
  };
  
export default fetchGraphQL;
