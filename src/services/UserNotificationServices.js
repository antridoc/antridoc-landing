const axios = require('axios')

class UserNotificationService {
    constructor() {
        this.baseUrl = process.env.VUE_APP_USER_NOTIFICATION_SERVICE_BASE_URI + '/api/auth/reset-password'
        this.token = ''
        this.input = null
        this.method = 'get'
    }

    async run(successCallBack) {

        const response = await axios({
            method: this.method,
            url: this.baseUrl + '?resetPasswordToken=' + this.token,
            data: this.input
        })

        return successCallBack(response);
    }

    forgotPassword(input, token){
        this.method = 'post'
        this.token = token
        this.input = input

        return this
    }
}

module.exports = new UserNotificationService()