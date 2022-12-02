import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';

const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('static/');

const server = http.createServer();

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

server.on('request', (request, response) => {
    if (bare.route_request(request, response)) return true;
    let url = new URL(request.url, `http://${request.headers.host}`);
    if(url.pathname === 'search') {
      let query = url.search.substring(3);
      window.navigator.serviceWorker.register('./static/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = query.trim();
      
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
      return;
    }
    serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});

server.listen(process.env.PORT || 8080);
