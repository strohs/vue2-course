<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                        <!-- v-model.lazy will only bind the entered password once you click on a different field -->
                        <p>{{ userData.password }}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            :placeholder="message"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 form-group">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="sendmail">
                            <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                            <!-- Vue automatically binds the string 'Send Mail' into our sendMail array -->
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="sendInfomail">
                            <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                            <!-- Vue automatically binds the string 'Send Infomail' into our sendMail array -->
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 form-group">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="male">Male</label>
                        <!-- when we 2-way bind, Vue automatically knows only one of the radios can be selected, and will deselect the other -->
                        <input class="form-check-input mx-2"
                               type="radio"
                               id="male"
                               value="Male"
                               v-model="gender">
                    </div>
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="female">Female</label>
                        <!-- when we 2-way bind, Vue automatically knows only one of the radios can be selected, and will deselect the other -->
                        <input class="form-check-input mx-2"
                               type="radio"
                               id="female"
                               value="Female"
                               v-model="gender">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6 form-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <!-- :selected will only work if we are not pre-populating using v-model above -->
                        <option v-for="priority in priorities"
                                :selected="priority == 'Medium'"> {{priority}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <!-- this is a custom control, toggle switch -->
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-md-6">
                    <!-- @click.prevent, prevents form being submitted to a server -->
                    <button
                            class="btn btn-primary" @click.prevent="submitForm">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>Your Data</h4>
                    </div>
                    <div class="card-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <!-- white-space: pre  used to preserve any line-breaks entered into the textarea field -->
                        <p style="white-space: pre">Message: {{message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority: {{selectedPriority}}</p>
                        <p>Switched: {{dataSwitch}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch';

    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                },
                message: 'edit me',
                sendMail: [],
                gender: 'Male',
                priorities: ['High', 'Medium', 'Low'],
                selectedPriority: 'High',
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
            submitForm() {
                this.isSubmitted = true;
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
