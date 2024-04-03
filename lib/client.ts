import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID || "23iWbzLZLdPmb-tcA3fGJSKBRPrf4mMvbym2OZ0DRek",
  accessToken: process.env.TOKEN || "e5zcpznyreto",
});

export default client