import './pollyfills'
import './axios.js'
import './vee-validate'

import store from '../store'
import router from '../router'
import { sync } from 'vuex-router-sync'

sync(store, router)
