
//counter code
var button=document.getElementById("counter");
button.onclick= function(){
  //make a request to the counter endpoint
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange= function(){
      if(request.readyState===XMLHttpRequest.DONE){
          
          if(request.status===200){
              var counter=request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
      
      else{alert("errors occured");}
      }
  };
    
    //make the request
    request.open('GET','http://mtienkoua.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
};
