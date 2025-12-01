/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/process-audio',
        destination: 'http://143.244.147.12:8000/process-audio/',
      },
      {
        source: '/api/process-audio/status/:task_id',
        destination: 'http://143.244.147.12:8000/status/:task_id',
      },
      {
        source: '/api/process-audio/result/:task_id',
        destination: 'http://143.244.147.12:8000/result/:task_id',
      },
      {
        source: '/tracks/:path*',
        destination: 'http://143.244.147.12:8000/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Accel-Buffering', value: 'no' },
        ],
      },
      {
        source: '/tracks/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: '*' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig}*/ 
/** const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/process-audio',
        destination: 'http://143.244.147.12:8000/process-audio/',
      },
      {
        source: '/api/process-audio/status/:task_id',
        destination: 'http://143.244.147.12:8000/status/:task_id',
      },
      {
        source: '/api/process-audio/result/:task_id',
        destination: 'http://143.244.147.12:8000/result/:task_id',
      },
      {
        source: '/tracks/:path*',
        destination: 'http://143.244.147.12:8000/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Accel-Buffering', value: 'no' }, // Disable buffering for large uploads
        ],
      },
    ];
  },
};

module.exports = nextConfig; */
/** @type {import('next').NextConfig} */
/**const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/process-audio',
        destination: 'http://143.244.147.12:8000/process-audio/',
      },
      {
        source: '/tracks/:path*',
        destination: 'http://143.244.147.12:8000/:path*',
      },
    ];
  },
};

module.exports = nextConfig; **/

