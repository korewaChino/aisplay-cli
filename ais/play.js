const lodash = require('lodash');
const crypto = require('crypto');
const axios = require('axios').default;

class AISPlay {
    constructor(defaults) {
        this.defaults = lodash.merge({
            publicid: 'vimmiCB1D0336',
            privateid: undefined,
            udid: undefined,
            baseURL: undefined
        }, defaults);
        if (!this.defaults.baseURL) {
            this.defaults.baseURL = 'https://ss-app-tls.ais-vidnt.com';
        }
        if (!this.defaults.privateid) {
            throw new Error('[privateid] is required.');
        }
        if (!this.defaults.udid) {
            throw new Error('[udid] is required.');
        }
        Object.defineProperty(this.defaults, 'sid', {
            get() {
                return "".concat(this.privateid.replace(/(\+|=|\/)/g, ''), "_").concat(this.udid).toLowerCase();
            }
        });
    }

    api_key(time) {
        var {
            privateid,
            sid,
            udid,
            publicid
        } = this.defaults;
        return crypto.createHash('md5').update(`${privateid}${sid}${udid}${publicid}${time}`).digest('hex');
    }

    calculate_time() {
        return Math.floor(new Date().getTime() / 1000).toString();
    }

    get(type, item) {
        // type is an enum of play, item
        switch (type) {
            case 'play':
                break
            case 'item':
                type = 'get_item'

            default:
                // error
                return new Error('Invalid type. Must be play or item.')
        }

        var {
            sid,
            privateid,
            udid
        } = this.defaults;
        var time = this.calculate_time();

        var api_key = this.api_key(time);
        var headers = {
            sid,
            time,
            api_key,
            privateid,
            udid
        };

        let client = axios.create({
            headers: headers
        })
        try {
            // return the promise result
            var result
            client.get(`${this.defaults.baseURL}/${type}/${item}/`).then(res => {
                // set the result variable's data globally
                result = res.data
            })
            return result
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = AISPlay;
