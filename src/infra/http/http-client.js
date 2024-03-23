const HttpMethod = {
    POST: 'post',
    GET: 'get',
    PUT: 'put',
    DELETE: 'delete'
};

class HttpRequest {
    constructor(url, method, body, headers) {
        this.url = url;
        this.method = method;
        this.body = body;
        this.headers = headers;
    }
}

const HttpStatusCode = {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};

class HttpResponse {
    constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }
}

class HttpClient {
    async request(data) {
        // Implémentez ici la logique pour envoyer une requête HTTP et retourner une réponse HTTP
    }
}

module.exports = {
    HttpMethod,
    HttpRequest,
    HttpStatusCode,
    HttpResponse,
    HttpClient
};
