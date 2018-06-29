<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">

                    <!--<div class="form-group">-->
                      <!--<label for="firstname">First Name</label>-->
                      <!--<input-->
                        <!--type="text"-->
                        <!--id="firstname"-->
                        <!--class="form-control"-->
                        <!--v-model="userData.name.first">-->

                      <!--<label for="lastname">Last Name</label>-->
                      <!--<input-->
                        <!--type="text"-->
                        <!--id="lastname"-->
                        <!--class="form-control"-->
                        <!--v-model="userData.name.last">-->
                    <!--</div>-->
                    <app-full-name-control v-model="userData.fullName"></app-full-name-control>

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
                        v-model="userData.password">
                    </div>
                    <div class="form-row">
                      <span class="mr-4">Store Data?</span>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label" for="radio-yes">Yes</label>
                        <!-- when we 2-way bind, Vue automatically knows only one of the radios can be selected, and will deselect the other -->
                        <input class="form-check-input mx-2"
                               type="radio"
                               id="radio-yes"
                               value="true"
                               v-model="userData.storeData">
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label" for="radio-no">No</label>
                        <!-- when we 2-way bind, Vue automatically knows only one of the radios can be selected, and will deselect the other -->
                        <input class="form-check-input mx-2"
                               type="radio"
                               id="radio-no"
                               value="false"
                               v-model="userData.storeData">
                      </div>
                    </div>
                  <div class="form-group my-4">
                    <button
                      class="btn btn-primary" @click.prevent="submitForm">Submit!
                    </button>
                  </div>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <h4>Your Data</h4>
                    </div>
                    <div class="card-body">
                        <p>Full Name: {{userData.fullName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{userData.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import FullNameControl from './FullNameControl';

    export default {
      data() {
        return {
          userData: {
            fullName: '',
            email: '',
            password:'',
            storeData: false
          },
          isSubmitted: false
        }
      },
      methods: {
        submitForm() {
          this.isSubmitted = true;
        }
      },
      components: {
        appFullNameControl: FullNameControl
      }
    }
</script>

<style>
</style>
