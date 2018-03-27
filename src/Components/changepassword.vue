<template>
  <v-container>
      <v-layout row wrap>
          <v-flex lg6 offset-lg3 md6 offset-md3 sm-8 offset-sm2 xs12>
              <v-card flat tile>
                  <v-card-title primary-title>
                      CHANGE PASSWORD
                  </v-card-title>
                  <v-divider></v-divider>  
                  <v-form v-model="valid" ref="form">
                    <v-container text-xs-center>
                        <v-layout row wrap>
                            <v-flex lg11 xs11>
                                <v-text-field
                                v-model="oldpassword"
                                label="Old Password"
                                :rules="oldpasswordRules"
                                prepend-icon="lock"
                                :append-icon="e1 ? 'visibility' : 'visibility_off'" 
                                :append-icon-cb="() => (e1 = !e1)" 
                                :type="e1 ? 'password' : 'text'"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap>
                            <v-flex lg11 xs11>
                                <v-text-field
                                v-model="newpassword"
                                label="New Password"
                                :rules="newpasswordRules"
                                prepend-icon="lock"
                                :append-icon="e2 ? 'visibility' : 'visibility_off'" 
                                :append-icon-cb="() => (e2 = !e2)" 
                                :type="e2 ? 'password' : 'text'"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-layout row wrap>
                            <v-flex lg11 xs11>
                                <v-text-field
                                v-model="confpassword"
                                label="Confirm Password"
                                :rules="confpasswordRules"
                                prepend-icon="vpn_key"
                                :append-icon="e3 ? 'visibility' : 'visibility_off'" 
                                :append-icon-cb="() => (e3 = !e3)" 
                                :type="e3 ? 'password' : 'text'"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-flex class="buyButton">
                            <v-btn @click="post" type="submit" large style="border-radius: 4px" color="blue-grey lighten-1">SUBMIT</v-btn>
                        </v-flex>
                    </v-container>
                </v-form>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
    
  data: () =>({
      valid: false,
      oldpassword: '',
      oldpasswordRules: [
        v => !!v || 'Old Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters long'
      ],
      newpassword: '',
      newpasswordRules: [
        v => !!v || 'Mandtory to type new password',
        v => (v && v.length >=6 && v.newpassword != this.oldpassword) || 'Password must be at least 6 characters long'
      ],
      confpassword: '',
      confpasswordRules: [
        v => !!v || 'Mandtory to type new password',
        v => (v && v.confpassword === this.newpassword) || 'This field should be same as the previous one'
      ],
      e1: true,
      e2: true,
      e3: true,
  }),

    methods: {
        post () {
            if (this.$refs.form.validate()) {
            // Native form submission is not yet supported
            axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                oldpassword: this.oldpassword,
                newpassword: this.newpassword,
                confpassword: this.confpassword
            })
            .then(response => {
            console.log(response)
            })
            .catch(e => {
                // 
                // 
            })
            }
        },
        
        clear () {
            this.$refs.form.reset()
            oldpassword: '';
            newpassword: '';
            confpassword: '';
        }
    }
}
</script>

<style scoped>

</style>
