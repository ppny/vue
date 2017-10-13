/**
 * fetch data
 */

import axios from 'axios'

class Http {

    get(url, params) { // GET请求
        url = params ? this.build(url, params) : url
        return this.request(url, {
            method: 'GET'
        })
    }

    post(url, body) { // POST请求
        let options = {
            method: 'POST',
        }
        return this.request(url, options)
    }

    request(url, options) { // 根请求
        options.headers = this.defaultHeader()
        return axios(url, options)
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch( err => console.error(url + ":" + err))
    }

    defaultHeader() { // 默认头
        let header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer${localStorage.getItem('token')}`,
        };
        return header
    }

    buildWithToken(url) {
        return this.build(url, {token: localDb.get('session')})
    }

    build(url, params) { // URL构建方法
        var ps = []
        if (params) {
            for (var p in params) {
                if (p) {
                    // ps.push(p + '=' + encodeURIComponent(params[p]));
                    ps.push(p + '=' + params[p]);
                }
            }
        }
        return url + "?" + ps.join('&')
    }

}

export default new Http()