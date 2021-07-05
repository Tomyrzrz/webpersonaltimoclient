import { BASE_PATH, API_VERSION} from './config';

export function singUpApi(data){
    const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, params).then(response => {
            return response.json();
        }).then( result => {
            if(result.user){
                return {
                    ok: true, message: "Usuario creado correctamente"
                }
            }
            return {
                ok: false, message: result.message
            }
        }).catch( err => {
            return {
              ok: false, message: err.message,
            };
        });
}

export function signInApi(data) {
    const url = `${BASE_PATH}/${API_VERSION}/sign-in`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            contentType: 'application/json'
        }
    }

    return fetch(url, params).then( response => {
        return response.json();
    }).then( result => {
        return result;
    })
    .catch(error => {
        return error.message;
    });

}