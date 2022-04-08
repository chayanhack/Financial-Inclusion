  
    const textarea = document.querySelector("p.fi-def");
    
    const speechBtn = document.querySelector("input.speech-fi");
    
	
	let synth= speechSynthesis,
	isSpeaking = true;
	
	
	window.onload = (event) => {
      synth.cancel();
      speechBtn.value = "Listen";
      };

	 
	function textToSpeech(text){
	     
	    let speech = new SpeechSynthesisUtterance(text);
	    speech.lang = "en";
	    synth.speak(speech);
	}
	
	
	
	speechBtn.addEventListener("click", e =>{
	
	    
	    e.preventDefault();
	    if(textarea.textContent.length !== ""){
	        if(!synth.speaking){
	            
	            textToSpeech(textarea.textContent);
	        }
	        if(textarea.textContent.length > 80){
	            setInterval(()=>{
	                if(!synth.speaking && !isSpeaking){
	                    isSpeaking = true;
	                    speechBtn.value = "Listen";
	                }else{
	                }
	            }, 500);
	            if(isSpeaking){
	                
	                synth.resume();
	                isSpeaking = false;
	                speechBtn.value = "Pause Speech";
	            }else{
	        
	                synth.pause();
	                isSpeaking = true;
	                speechBtn.value = "Resume Speech";
	            }
	        }else{
	            synth.cancel();
	            speechBtn.value = "Listen";
	        }
	    }
	});
	
	
	
	
   $('.nav-link').click(function(){
      if( $('#main-navigation').hasClass('show')){
          $('#main-navigation').removeClass('show');
       }
   });
   
  
   
   
   
   
   

