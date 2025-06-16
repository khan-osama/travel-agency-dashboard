import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://eea755a6aaef2783bf3c67f2666d589f@o4509501279961088.ingest.us.sentry.io/4509501284155392",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
