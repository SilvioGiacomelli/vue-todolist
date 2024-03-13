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

  

}).mount('#app');

