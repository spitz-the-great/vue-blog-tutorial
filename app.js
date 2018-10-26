new Vue({
    el: '#vue-app',
    data: {

        name: 'vue is linked correctly',
        website: 'https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd',
        websiteTag: '<a href="https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd">a link</a>'
    },

    methods: {
        greet: function(){
            return 'sup ' + this.name
        }
           
        
    }

})