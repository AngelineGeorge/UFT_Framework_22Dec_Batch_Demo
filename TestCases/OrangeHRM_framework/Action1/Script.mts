sSheetName = Environment.Value("TestName")
fnOpenWebApp
row = 1
'fnLoadDataSheet

For Iterator = 1 To 3 Step 1
	fnLogin
	
	fnLogout
	row = row + 1
Next
fnClose
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=username").Set "Admin" @@ script infofile_;_ZIP::ssf17.xml_;_
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=password").SetSecure "63eb984214495f7dae03e1e0a08164ab5dee11ed7412" @@ script infofile_;_ZIP::ssf18.xml_;_
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("name:=login").Click @@ script infofile_;_ZIP::ssf19.xml_;_
