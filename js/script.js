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
      msgErr:'',
    }
  },

  methods: {
    deleTe (elemento,index){
      if(elemento.done===true){
        this.toDolist.splice(index,1)
      }else{
        alert('Non hai completato il compito')
      }
    },  
    
    aDD (){
      if(this.newTask.length > 5){
        const newElement = {text:this.newTask, done:false}
        this.toDolist.unshift(newElement)
        this.newTask = '';
        this.msgErr = '';
      }else{
        this.msgErr = 'Attenzione inserisci 5 caratteri';
      }
    },

  },

}).mount('#app');

