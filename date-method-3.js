document.write("date and time in 12 hour am/pm"+"<br>")
document.write("------------------------------"+"<br>")

var time=new Date()
document.write(time.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:true}));