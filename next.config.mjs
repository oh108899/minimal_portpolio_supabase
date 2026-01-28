/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://ajvzotekacvyhfetkebn.supabase.co/storage/v1/object/public/portfolio/**'),new URL('https://dummyimage.com/364x209/ccc/fff')],
  },
};

export default nextConfig;
