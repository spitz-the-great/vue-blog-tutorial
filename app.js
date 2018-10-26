new Vue({
    el: '#vue-app',
    data: {

        name: 'vue is linked correctly',
        website: 'https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd',
        websiteTag: '<a href="https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd">a link</a>',
        number: 0,
        x: 0,
        y: 0,
        nameInput: '',
        ageInput: '',
        a: 0,
        b: 0,
        age: 20,
    },

    methods: {
        greet: function(){
            return 'sup ' + this.name
        },

        increaseNumber: function(up){
            this.number = this.number + up;
        },

        decreaseNumber: function(down){
            this.number = this.number - down;
        },
        
        updateXY: function(event){
            console.log(event);
            this.x = event.offsetX,
            this.y = event.offsetY
        },
        click: function(){
            alert( 'YOU TRYNA LEAVE MY SITE?!?!?!?!!' )
        },

        logName: function(){
            console.log('name');
        },
        logAge: function(){
            console.log('age');
        }
    },

        // addToA: function(){
        //     return this.age + this.a
        // },
        // addToB: function(){
        //     return this.age + this.b
        // }

        computed: {

            addToA: function(){
                console.log('add to name');
                return this.age + this.a
            },

            addToB: function(){
                console.log('add to age');
                return this.age + this.b
            }
        }
        
    

})