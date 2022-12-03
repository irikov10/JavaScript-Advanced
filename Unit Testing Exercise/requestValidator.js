function requestValidator(object) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let specialMessage = [`<`, `>`, `\\`, `&`, `'`, `"`];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if(!methods.includes(object.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!object.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if(object.uri !== '*' && !object.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if(!versions.includes(object.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!object.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }
    
    for(let element of object.message) {
        if(specialMessage.includes(element)) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }

    return object;
}
requestValidator({ method: 'POST', uri: 'home.bash', message: 'rm -rf /*' })