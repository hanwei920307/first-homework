function  myFunction(){
var str="";
for(var i=0;i<users.length;i++)
 {
    str += '<li><a href="#selectpeople">'+users[i].name+'</a></li>';
    $("#selectpeople").html(str);

 }
}

