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
                                v-model="email"
                                label="Email"
                                :rules="emailRules"
                                prepend-icon="EMail"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>

                        <v-flex>
                            <v-btn @click="send" type="submit" large style="border-radius: 4px" color="blue-grey lighten-1">SUBMIT</v-btn>
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
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
    }),

    methods: {
        send () {
            if (this.$refs.form.validate()) {
            // Native form submission is not yet supported
            axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                email: this.email
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
            email: '';
        }
    }
}
</script>

<style scoped>

</style>
