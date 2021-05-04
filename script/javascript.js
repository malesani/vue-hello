
const app = new Vue({

  el : "#app",
  data:{
    mensaje: "",
    colorClass : ""
  },

  methods:{
    miaFunzione : function(color){
      this.colorClass = color;
    }
  }

});