function validateForm(){
				var name = document.getElementById("name").value;
				var phone = document.getElementById("phone").value;
				var email = document.getElementById("email").value;
				var message = "";
				if (name == "")
				{
					message = "Name is required.\r\n "
				}
				if (email == "")
				{
					message = message + "Email is required.\r\n "
				}
				if (phone == "")
				{
					message = message + "Phone is required.\r\n "
				}
				if (!document.getElementById('r1').checked && !document.getElementById('r2').checked ) {
					 message = message + "You must select yes or no if you visited. \r\n"
					}
					
				if (!document.getElementById('checkMon').checked && !document.getElementById('checkTue').checked && !document.getElementById('checkWed').checked && !document.getElementById('checkThu').checked && !document.getElementById('checkFri').checked){
					message = message + "Please select a day you are free";
				}
				
				
				if (message == ""){
					alert("Form is filled out correctly you will be contacted shortly");
					return false;
				}
				else
				{
					alert(message);
				}
				return false;
			}
			
			
			
			
			