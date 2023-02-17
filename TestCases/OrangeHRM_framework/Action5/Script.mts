fnMyInfo()

'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=My Info").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=firstName").Set "Rio" @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("name:=lastName").Set "Walt" @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("xpath:=//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input").Set "1975-10-08" @@ script infofile_;_ZIP::ssf7.xml_;_
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("xpath:=//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[5]/button").Click @@ script infofile_;_ZIP::ssf9.xml_;_

'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebElement("xpath:=//*[@id='app']/div[1]/div[1]/header/div[1]/div[2]/ul/li/span").Click
'Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebMenu("xpath:=//*[@id='app']/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a").Select "Logout"
'wait(10)

