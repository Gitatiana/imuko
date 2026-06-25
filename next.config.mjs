/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // build autocontenido para Docker/Dokploy
  async redirects() {
    return [
      // El home en inglés del sitio original mandaba directo al registro de
      // desarrolladores en la app (regla del plugin IRRP). Lo replicamos.
      // Next normaliza la barra final (/en/home/ → /en/home) antes de aplicar esta regla.
      {
        source: "/en/home",
        destination: "https://app.imuko.co/#/registro-desarrollador",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
