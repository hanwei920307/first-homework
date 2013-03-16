function  select_people(){
var str="";
for(var i=0;i<users.length;i++)
 {
    str += '<li><a href="#select_people">'+users[i].name+'</a></li>';
    $("#select_people").html(str);
 }
try{
    $("#select_people").listview('refresh');
}
 catch(e){}
}
function  select_field(){
 var str="";
 for(var i=0;i<restaurants.length;i++)
 {
     str += '<li><a href="#select_field">'+restaurants[i].name+'</a></li>';
     $("#select_field").html(str);
 }
try{
    $("#select_field").listview('refresh');
}
 catch(e){}
}
