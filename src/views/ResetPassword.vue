<template>
    <div class="xs-section-padding rest-password ">
        <div class="demo-title-wraper text-center">
            <img style="max-width: 150px;" class="mb-5" src="assets/antridoc/Antridoc-logo.png" draggable="false">
            <h4 class="title  mb-3">Rest Password</h4>
        </div><!-- .demo-title-wraper END -->
        <div class="container">
           
                <div class="from-wraper">
                        <form v-on:submit.prevent="submitForm" action="#" class="contact-form style2">
                            <div class="row" v-if="messageData.message">
                                <div class="col-lg-4 mx-auto">
                                    <div class="alert" v-bind:class="{ 'alert-success': messageData.success, 'alert-danger': !messageData.success }" role="alert">
                                        <div v-html="messageData.message"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 mx-auto">
                                    <input v-model="newPassword" type="password" placeholder="New Password" name="new_password" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 mx-auto">
                                    <input v-model="confirmedPassword" type="password" placeholder="Confirm Password" name="re_new_password" class="form-control">
                                </div>
                            </div>
                            <div class="btn-wraper">
                                <button class="btn btn-primary style5 icon-right">Reset<i class="icon icon-arrow-right"></i></button>
                            </div>
                        </form>
                </div>
        </div>
    </div>
</template>


<script>

const UserNotificationServices = require('./../services/UserNotificationServices')

export default {
    name: 'VerifiedAccount',
    data: () => {
        return {
            messageData: {
                success: false,
                message: '',
            },
            newPassword: '',
            confirmedPassword: '',
        }
    },
    methods: {
        async submitForm() {
            this.messageData.message = ''
            this.$loading(true)

            // Get token
            const params = new URLSearchParams( window.location.search )
            const token = params.get('token')
            
            try {
                await UserNotificationServices.forgotPassword({
                    password: this.newPassword,
                    re_password: this.confirmedPassword,
                }, token).run( res => {
                    this.messageData.success = true
                    this.messageData.message = 'Success'
                    this.$loading(false)
                })
            } catch(err) {
                this.messageData.success = false
                this.messageData.message = err.response.data ? err.response.data.error : err.message
                this.$loading(false)
            }
        }
    },
}
</script>