import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns:
       [new URL('https://cdn.allbirds.com/image/**'),new URL('https://assets.aceternity.com/**')],
       
    
},
};

export default nextConfig;
