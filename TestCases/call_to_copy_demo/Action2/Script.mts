Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("REGISTER").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName").Set "George" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName").Set "D" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("phone").Set "9864672778" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("userName").Set DataTable("username99", dtLocalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("address1").Set "123,Kumbakonam Road" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("city").Set DataTable("city",dtLocalSheet) @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("state").Set "Tamil Nadu" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("postalCode").Set "607203" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebList("country").Select "INDIA" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("email").Set DataTable("username99", dtLocalSheet) @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("password").Set DataTable("password99", dtLocalSheet) @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("confirmPassword").Set DataTable("password99", dtLocalSheet) @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebButton("Submit Query").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Register: Mercury Tours").Page("Register: Mercury Tours").Link("REGISTER").Click
'Browser("Register: Mercury Tours").Page("Register: Mercury Tours_2").WebElement("SIGN-OFF").Click

