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
      newTask:'',

    }
  },

  methods: {
    deleTe (index){
      this.toDolist.splice(index,1)
    },  
    
    aDD (){
      const newElement = {text:this.newTask, done:false};
      this.toDolist.unshift(newElement);
      this.newTask = ''
    }
  },

}).mount('#app');

