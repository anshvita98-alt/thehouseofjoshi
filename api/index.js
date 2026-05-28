module.exports = async function handler(req, res) {
    const { Buffer } = await import('node:buffer');
    const serverModule = await import('../dist/server/server.js');
    const server = serverModule.default ?? serverModule;

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);

    const request = new Request(url.toString(), {
        method: req.method,
        headers: req.headers,
        body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req,
    });

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
        if (key.toLowerCase() === 'transfer-encoding') return;
        res.setHeader(key, value);
    });

    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
};
