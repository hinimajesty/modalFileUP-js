/**------------------------------------------------------*
 * Author   -> Hini Majesty                              *
 * Date     -> 26/06/2017                                *
 * Job      -> Custom File upload in a Light Box Modal   *
 * version  -> 1.0                                       *
 * Happy Coding :-)                                      *
/**------------------------------------------------------*/
$(window).ready(function(){
	//get the name of the uploaded file 
	//record a count of files 
	//inject the name of the file into the span 
	
	var input = $('.inputfile-1'); 
	var span  = $('#uploaded-file-name');
	var fileName = ''; 

	    input.on("change", function(e){
  		  //get the number of files selected 
  		  countOfFiles = $(this)[0].files.length; 
  		  
  		  if(countOfFiles > 1){
  		  	fileName = ( this.getAttribute( 'data-uploaded-fileName' ) || '' ).replace( '{count}', this.files.length );
  		  }else{
  		  	  fileName = e.target.value.split( '\\' ).pop();
  		  }

  		  if(fileName){
             span.html(fileName); 
  		  }
             
	    });

}); /*end of doucument.ready function*/

