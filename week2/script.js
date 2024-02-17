

function open_box1(){
  var y = document.getElementById('main');
  y.style.opacity = '0.5';
  $('#good1').show()
  $('#index-q1').empty()
  $.ajax({
    type: "GET",
    url: "https://api.manana.kr/exchange/rate.json?base=INR&code=INR,USD",
    data: {},
    success: function(response){ 
      
      let dates = response;
      
       
          let day = dates[1]['name']
          let avg = dates[1]['rate']
          
            
          let temp_html = `<li>&#36;1 = &#8377;${avg} </li>`
            $('#index-q1').append(temp_html)
        
      
  }
})
}

function close_box1(){
  var y = document.getElementById('main');
  y.style.opacity = '0.5';
  var y = document.getElementById('main');
  y.style.opacity = '1';
  $('#good1').hide()
}





function open_box2(){
  var y = document.getElementById('main');
  y.style.opacity = '0.5';
  $('#good2').show()
  $('#index-q2').empty()
  $.ajax({
    type: "GET",
    url: "https://api.manana.kr/exchange/rate.json?base=INR&code=INR,USD",
    data: {},
    success: function(response){ 
      
      let dates = response;
      
       
          let day = dates[1]['name']
          let avg = dates[1]['rate']
          
            
          let temp_html = `<li>&#36;1 = &#8377;${avg} </li>`
            $('#index-q2').append(temp_html)
        
      
  }
})
}
function close_box2(){
  var y = document.getElementById('main');
  y.style.opacity = '1';
  $('#good2').hide()
}


function open_box3(){
  var y = document.getElementById('main');
  y.style.opacity = '0.5';
  $('#good3').show()
  $('#index-q3').empty()
  $.ajax({
    type: "GET",
    url: "https://api.manana.kr/exchange/rate.json?base=INR&code=INR,USD",
    data: {},
    success: function(response){ 
      
      let dates = response;
      
       
          let day = dates[1]['name']
          let avg = dates[1]['rate']
          
            
          let temp_html = `<li>&#36;1 = &#8377;${avg} </li>`
            $('#index-q3').append(temp_html)
        
      
  }
})
}
function close_box3(){
  var y = document.getElementById('main');
  y.style.opacity = '1';
  $('#good3').hide()
}


function open_box4(){
  var y = document.getElementById('main');
   y.style.opacity = '0.5';
  $('#good4').show()
  $('#index-q4').empty()
  $.ajax({
    type: "GET",
    url: "https://api.manana.kr/exchange/rate.json?base=INR&code=INR,USD",
    data: {},
    success: function(response){ 
      
      let dates = response;
      
       
          let day = dates[1]['name']
          let avg = dates[1]['rate']
          
            
            let temp_html = `<li>&#36;1 = &#8377;${avg} </li>`
            $('#index-q4').append(temp_html)
        
      
  }
})
 
}
        

function close_box4(){
  var y = document.getElementById('main');
  y.style.opacity = '1';
  $('#good4').hide()

}



function function1(e) 
        {
            event.preventDefault();
           
            swal("Your order is complete!", "Thank you!", "success");
            
            
        }
        
        function red1(){
          
          var data1 = document.getElementById('Username1').value;
          var data2 = document.getElementById('Quantity1').value;
          var data3 = document.getElementById('Address1').value;
          var data4 = document.getElementById('Number1').value;
          if(data1=="" || data2=="" || data3==""||data4=="")
          {
            alert("Please fill out ~");
            
          }   
        }
         
        function red2(){
          var data1 = document.getElementById('Username2').value;
          var data2 = document.getElementById('Quantity2').value;
          var data3 = document.getElementById('Address2').value;
          var data4 = document.getElementById('Number2').value;
          if(data1=="" || data2=="" || data3==""||data4=="")
          {
            alert("Please fill out ~");
            
          }   
        }
         
        function red3(){
          var data1 = document.getElementById('Username3').value;
          var data2 = document.getElementById('Quantity3').value;
          var data3 = document.getElementById('Address3').value;
          var data4 = document.getElementById('Number3').value;
          if(data1=="" || data2=="" || data3==""||data4=="")
          {
            alert("Please fill out ~");
            
          }   
        }
         
        function red4(){
          var data1 = document.getElementById('Username4').value;
          var data2 = document.getElementById('Quantity4').value;
          var data3 = document.getElementById('Address4').value;
          var data4 = document.getElementById('Number4').value;
          if(data1=="" || data2=="" || data3==""||data4=="")
          {
            alert("Please fill out ~");
            
          }   
        }