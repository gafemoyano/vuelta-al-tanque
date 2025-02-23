export default {
  url:
    process.env.ELEVENTY_ENV === "production"
      ? "https://parqueamarillo.com"
      : "http://localhost:8080",
  environment: process.env.ELEVENTY_ENV ?? "development",
};
