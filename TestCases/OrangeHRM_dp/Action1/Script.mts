Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=username").Set "Admin" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=password").SetSecure "63ec529fd3847ca42428fefab0aef6044ce6fedccd7a" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("name:=Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
