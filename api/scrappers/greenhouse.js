const axios = require("axios");

module.exports = async function greenhouseScraper(url) {
  try {
    const resp = await axios.get(url);

    const exists = resp.status === 200 && resp.data.includes("posting");

    return {
      platform: "greenhouse",
      status: exists ? "real" : "ghost",
      found: exists
    };
  } catch {
    return { platform: "greenhouse", status: "ghost", found: false };
  }
};
