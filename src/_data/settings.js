export default {
  name: "Parque Amarillo",
  description:
    "Picnic de opiniones y anécdotas que será Parque Amarillo. En el cesto, temas de actualidad bien fresquitos, junto a aderezos de humor, crítica y análisis.",
  author: "Juan Torregrosa, Jorge Jaramillo y Felipe Moyano",
  url:
    process.env.ELEVENTY_ENV === "production"
      ? "https://parqueamarillo.com"
      : "http://localhost:8080",
  logo: "/static/img/logo.jpg",
  cover: "/static/img/el-arque-amerindio.jpg",
  environment: process.env.ELEVENTY_ENV ?? "development",
};
