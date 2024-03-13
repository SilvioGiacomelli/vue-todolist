const { createApp} =Vue;

createApp({
  data(){
    return{
      toDolist: [
        {
          text: 'fare la spesa',
          done: false,
        },
        {
          text: 'allenarsi',
          done: false,
        },
        {
          text: 'guardare un film',
          done: true,
        }
      ],    
    }
  },

  methods: {
    deleTe (index){
      this.toDolist.splice(index,1)
    }   
  },

}).mount('#app');

