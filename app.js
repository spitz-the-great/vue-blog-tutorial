new Vue({
    el: '#vue-app',
    data: {

        name: 'vue is linked correctly',
    },

    methods: {
        greet: function(){
            return 'sup ' + this.name
        }
           
        
    }

})