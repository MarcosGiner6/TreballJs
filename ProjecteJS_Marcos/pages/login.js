export {LoginForm}
export {login};

function LoginForm() {
    let loginForm = document.createElement('div');
    loginForm.id='formulari';
    loginForm.innerHTML = `
    <div id="main">
	<div class="h-tag">
	<h2>Login</h2>
	</div>
	<!-- Login box -->
	<div class="login">
	<table cellspacing="2" align="center" cellpadding="8" border="0">
	<tr>
	<td>Nombre de usuario :</td>
	<td><input type="text" placeholder="Enter user name here" id="email" class="tb" /></td>
	</tr>
	<tr>
	<td>Contrasenya :</td>
	<td><input type="password" placeholder="Enter Password here" id="pwd1" class="tb" /></td>
	</tr>
    <tr>
	<td>Repite la contrasenya :</td>
	<td><input type="password" placeholder="Enter Password here" id="pwd2" class="tb" /></td>
	</tr>
	<tr>
	<td></td>
	<td>
	<input type="submit" value="Limpiar" onclick="clearFunc()" class="btn" />
	<input type="submit" value="Login" class="btn" onClick="login()" /></td>
	</tr>
	</table>
	</div>
  	 <!-- login box div ending here.. -->
	</div>
`
/*<h2>Javascript Login Form Validation</h2>
    <form id="form_id" method="post" name="myform">
    <label>User Name :</label>
    <input type="text" name="username" id="username"/>
    <label>Password :</label>
    <input type="password" name="password" id="password"/>
    <input type="button" value="Login" id="submit" onclick="validate()"/>
    </form>*/


return loginForm;
}

function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
        var pwd2 = document.getElementById("pwd2").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
        else if(pwd2=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6 || pwd.length > 15)
		{
			alert("Password min is 6 and max length is 15.");
		}
        else if(pwd != pwd2)
		{
			alert("Las contrasenyas no coinciden");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to Campuslife Website');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location = "https://www.campuslife.co.in";
			}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}

    LoginForm();