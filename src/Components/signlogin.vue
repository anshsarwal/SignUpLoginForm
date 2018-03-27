<template>
  <div id="signlogin">
      <!-- In a container we will have a layout and 2 flexes adj to each other and each will contain card -->
    <v-container text-xs-center style="margin-top:70px ; margin-left:220px ;">
      <v-layout row wrap>
        <!-- Left Side Card , will contain image and will be on top in mobile -->
        <v-flex id="left" lg6 md6 xs12 order-sm1>
          <v-card flat height="434px">
            <v-card-text> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit praesentium numquam sunt at quam sed modi sint nihil atque mollitia dolore quod ducimus, autem aliquam eaque tenetur adipisci eos?
            </v-card-text>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit praesentium numquam sunt at quam sed modi sint nihil atque mollitia dolore quod ducimus, autem aliquam eaque tenetur adipisci eos?
            </v-card-text>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit praesentium numquam sunt at quam sed modi sint nihil atque mollitia dolore quod ducimus, autem aliquam eaque tenetur adipisci eos?
            </v-card-text>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit praesentium numquam sunt at quam sed modi sint nihil atque mollitia dolore quod ducimus, autem aliquam eaque tenetur adipisci eos?
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- Right hand Side Card , will contain the tabs and will be below the image in mobile -->
        <v-flex id="right" lg6 md6 xs12 order-sm2>
          <v-tabs v-model="active" grow color="light-blue lighten-1" class="navTabs" slider-color="black">
            <v-tab v-for="(detail,i) in details" :key="i" style="margin-top: 15px">
              <p class="detailStyle">{{ detail }}</p>
            </v-tab>
            <!-- The Items are 2 forms for Login and Sign-Up -->
            <v-tab-item class="itemStyle">
              <!-- Sign-Up Form inside the Card -->
              <v-card flat>
                <v-form @submit.prevent="validateBeforeSubmit()">
                  <v-container text-xs-center>
                    <!-- Text-Field Email -->
                    <v-layout row wrap>
                      <v-flex lg11 xs11>
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                          :error-messages="errors.collect('email')"
                          v-validate="'required|email'"
                          data-vv-name="email"
                          prepend-icon="email"
                          clearable
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <!-- Text-Field Phone No. -->
                    <v-layout  row wrap>
                      <v-flex lg11 xs11>
                        <v-text-field
                          v-model="contact"
                          label="Contact Number"
                          :error-messages="errors.collect('contact')"
                          v-validate="'required|min:10|max:10'"
                          data-vv-name="contact"
                          prepend-icon="phone"
                          clearable                          
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <!-- Text-Field Password -->
                    <v-layout row wrap>
                      <v-flex lg11 xs11>
                        <v-text-field
                          v-model="password"
                          label="Password"
                          :error-messages="errors.collect('password')"
                          v-validate="'required|min:6'"
                          data-vv-name="password"
                          prepend-icon="lock"
                          :append-icon="e1 ? 'visibility' : 'visibility_off'" 
                          :append-icon-cb="() => (e1 = !e1)" 
                          :type="e1 ? 'password' : 'text'"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <!-- Text-Field Confirm Password -->
                    <v-layout row wrap>
                      <v-flex lg11 xs11>
                        <v-text-field 
                          v-model="confPassword"
                          label="Confirm Password"
                          :error-messages="errors.collect('confPassword')"
                          v-validate="'required|min:6|confirmed:confPassword'"
                          :append-icon="e2 ? 'visibility' : 'visibility_off'" 
                          :append-icon-cb="() => (e2 = !e2)" 
                          :type="e2 ? 'password' : 'text'"
                          data-vv-as="password"
                          prepend-icon="vpn_key"
                          required
                        ></v-text-field>
                        <!-- Something for Password Confirmation for v-validate -->
                        <v-layout row wrap>
                          <v-flex v-if="errors.has('confPassword')">
                            {{ errors.first('confPassword') }}
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                    <!-- The Submit and CLear Buttons -->
                    <v-layout row-wrap>
                      <v-flex lg6 xs12 order-sm1>
                        <v-btn @click="submitSignUp" type="submit" large style="border-radius: 4px" color="blue-grey lighten-1">SIGN-UP</v-btn>
                      </v-flex>
                      <v-flex lg6 xs12 order-sm2>
                        <v-btn @click="clear" large style="border-radius: 4px" color="blue-grey lighten-1">CLEAR</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>
            </v-tab-item>

            <v-tab-item class="itemStyle">
              <!-- Login Form inside the Card -->
              <v-card flat height="384px">
                <v-form @submit.prevent="validateBeforeSubmit()">
                  <v-container text-xs-center>
                    <!-- Text-Field Email -->
                    <v-layout row wrap>
                      <v-flex lg11 xs11>
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                          :error-messages="errors.collect('email')"
                          v-validate="'required|email'"
                          data-vv-name="email"
                          prepend-icon="email"
                          clearable
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <!-- Text Field Password -->
                    <v-layout row wrap>
                      <v-flex lg11 xs11>
                        <v-text-field
                          v-model="password"
                          label="Password"
                          prepend-icon="lock"
                          :error-messages="errors.collect('password')"
                          v-validate="'required|min:6'"
                          data-vv-name="password"
                          :append-icon="e3 ? 'visibility' : 'visibility_off'" 
                          :append-icon-cb="() => (e3 = !e3)" 
                          :type="e3 ? 'password' : 'text'"
                          required 
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <!-- The Forgot Password and Change Password Buttons(need to attach events) -->
                    <v-layout row wrap>
                      <v-flex lg6 xs12 order-sm1>
                        <router-link to="/forgot"><v-btn  block depressed color="white">Forgot Password?</v-btn></router-link>
                      </v-flex>
                      <v-flex lg6 xs12 order-sm2>
                        <router-link to="/change"><v-btn block depressed color="white">Change Password?</v-btn></router-link>
                      </v-flex>
                    </v-layout>
                    <!-- The Submit and CLear Buttons -->
                    <v-layout row wrap>
                      <v-flex lg6 xs12 order-sm1>
                        <v-btn @click="submitLogin" type="submit" large style="border-radius: 4px" color="blue-grey lighten-1">LOGIN</v-btn>
                      </v-flex>
                      <v-flex lg6 xs12 order-sm2>
                        <v-btn @click="clear" large style="border-radius: 4px" color="blue-grey lighten-1">CLEAR</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>  
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'
import forgotpassword from './forgotpassword'
import changepassword from './changepassword'

export default {
    components:{
        'forgotpass': forgotpassword,
        'changepass': changepassword
    },

     $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      active: null,
      email: '',
      contact: '',
      password: '',
      confPassword: '',
      e1: true,
      e2: true,
      e3: true,
      details: ['SIGN-UP', 'LOGIN'],
      confPasswordRules: [
        v => !!v || 'Confirmation is required',
        v => (v && v.confPassword === this.password) || 'Password should match'
      ],

      dictionary: {
        attributes: {
          email: 'E-mail Address',
          contact: 'Contact Number',
          password: 'Password',
          // custom attributes
        },

        custom: {
          email: {
            required: () => 'Email can not be empty',
            valid: 'The email field must be valid'
            // custom messages
          },
          contact: {
            required: () => 'Contact Number can not be empty',
            valid: 'The contact number field should be exactly 10 characters'
            // custom messages
          },
          password: {
              required: () => 'Password can not be empty',
              min: 'The password field should not be lesser than 6 characters'
              // custom messages
          },
          confPassword: {
            required: () => 'This Field Must be the same as the previous one',
            min: 'This field must contain at least 6 characters',
            confirmed: 'The Field should be same as that above'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      validateBeforeSubmit(){
        this.$validator
        .validateAll()
        .then(function(response) {
          // Validation success if response === true
        })
        .catch(function(e) {
          // Catch errors
        })
      },

      submitSignUp () {
        this.$validator.validateAll()
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
            email: this.email,
            phoneno: this.contact,
            password: this.password
          })
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            // 
            // 
          })
      },
      submitLogin () {
        this.$validator.validateAll()
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
            body: this.email,
            password:this.password
          })
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            // this.emailRules.push(e),
            // this.passwordRules.push(e)
          })
      },

      clear () {
        this.email = ''
        this.contact = ''
        this.password = ''
        this.confPassword = ''
        this.$validator.reset()
      }
    } 
}
</script>

<style scoped>
#left{
  max-width: 450px;
  border: solid grey 1px;
  font-family: 'Cagliostro', sans-serif;
  font-size: 14px;
}
#right{
  max-width: 450px;
  border: solid grey 1px;
}
.detailStyle{
  font-family: 'Cagliostro', sans-serif;
  font-size: 18px;
}
.itemStyle{
  font-family: 'Cagliostro', sans-serif;
  font-size: 14px;
}
</style>