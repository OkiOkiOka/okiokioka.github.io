window.addEventListener('load', function(){
    $('html').toggleClass('loading')
  });
  
   let secretCode = [79,75,73];
  //宣告一個含有指令串keyCode的陣列
  let userInput = [];   //宣告一個可接收用戶輸入的keyCode的空陣列
  window.addEventListener('keyup',function(e){
    console.log('typing...')
      userInput.push(e.keyCode);   //在末端新增用戶新輸入的keyCode
      userInput.splice(-secretCode.length - 1, userInput.length - secretCode.length);
      //userInput.splice( 起始值 / 新增keyCode的放置位置,  );
      if(userInput.join() === secretCode.join()){
          location.href = 'https://ithelp.ithome.com.tw/questions'
      };
  });
  //userInput.splice( 起始值 / 新增keyCode的放置位置,  );