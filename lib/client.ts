// import { createClient } from "contentful";

// const client = createClient({
//   space: process.env.SPACE_ID || "23iWbzLZLdPmb-tcA3fGJSKBRPrf4mMvbym2OZ0DRek",
//   accessToken: process.env.TOKEN || "e5zcpznyreto",
// });

// export default client

import { createClient } from "contentful";

const { SPACE_ID, TOKEN } = process.env;

if (!SPACE_ID || !TOKEN) {
  throw new Error("Contentful environment variables are not set.");
}

const client = createClient({
  space: SPACE_ID,
  accessToken: TOKEN,
});

export default client;

