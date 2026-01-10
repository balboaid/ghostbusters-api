const axios = require("axios");

module.exports = async function leverScraper(url) {
  try {
    const jsonUrl = url.replace("/jobs/", "/postings/");

    const resp = await axios.get(jsonUrl);

    return {
      platform: "lever",
      status: resp.data ? "real" : "ghost",
      found: Boolean(resp.data)
    };
  } catch {
    return {
      platform: "lever",
      status: "ghost",
      found: false
    };
  }
};
