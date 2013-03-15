function  selectpeople(){
var str="";
for(var i=0;i<users.length;i++)
 {
    str += '<li><a href="#selectpeople">'+users[i].name+'</a></li>';
    $("#selectpeople").html(str);

 }
}
function  selectfield(){
 var str="";
 for(var i=0;i<restaurants.length;i++)
 {
     str += '<li><a href="#selectfield">'+restaurants[i].name+'</a></li>';
     $("#selectfield").html(str);
 }
}
