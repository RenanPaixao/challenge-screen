import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  theme: {
    light: {
      primary: '#009AE4',
      secondary: '#EAEAEA',
    },
  },
});

export default new Vuetify({});
