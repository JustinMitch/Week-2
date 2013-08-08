function submitForm() {
  	var email = document.getElementById('email');
		var err_email = document.getElementById('err_email');
		
		var first = document.getElementById('first');
		var err_first = document.getElementById('err_first');
	
		
		//First Name ERRORS
			var hasErrors = false;
			
			if ( first.value == "")
			{
				err_first.innerHTML = "<em>*</em>";
				first.className = "*";
				hasErrors = true;
			} else {
				err_first.innerHTML = "";
				first.className = "Thank You";
			}
			
			
			//last Name ERRORS
			var last = document.getElementById('last');
		var err_last = document.getElementById('err_last');
	
		
			var hasErrors = false;
			
			if ( last.value == "")
			{
					err_last.innerHTML = "<em>*</em>";
					last.className = "*";
					hasErrors = true;
			} 
			else {
					err_last.innerHTML = "";
					last.className = "Thank You";
				}
			
			
			//comment ERRORS
			
			var comment = document.getElementById('comment');
			var err_comment = document.getElementById('err_comment');
	
		
		
			var hasErrors = false;
			
			if ( comment.value == "")
				{
						err_comment.innerHTML = "<em>*</em>";
						comment.className = "*";
						hasErrors = true;
				} 
			else {
					err_comment.innerHTML = "";
					comment.className = "Thank You";
			}
			
			
			
			
			
			
			
			//EMAIL ERRORS
			
		var hasErrors = false;
			//email.value ==""
		if ( !email.value.length || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) 
			{
				err_email.innerHTML = "<em>please enter vaild email</em>";
				email.className = "bad";
				hasErrors = true;
			} 
				else {
				err_email.innerHTML = "";
				email.className = "good";
			}
		
		
		if ( hasErrors ) 
		{
			alert("Email is no good");
		} 
		else 
		{
			alert("Email is good");
		}
			
			
}
