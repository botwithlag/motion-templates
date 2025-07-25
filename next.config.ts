import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns:
       [new URL('https://cdn.allbirds.com/image/**'),new URL('https://assets.aceternity.com/**')
        ,new URL('https://d6f6d0kpz0gyr.cloudfront.net/**')
       ],
     
    
},
};

export default nextConfig;
