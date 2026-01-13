/** @type {import('next').NextConfig} */
module.exports = {
  // Using Next.js 13.5.x defaults
  // Do not upgrade to Next.js 16 until Netlify's runtime adapter supports it
  eslint: {
    // Skip ESLint during builds - run separately via npm run lint
    ignoreDuringBuilds: true,
  },
};
