function  select_people()
{
    str="";
    for(var i=0;i<users.length;i++)
    {
        str += '<li><a onclick="select_people_end(' + i + ')">'+users[i].name+'</a></li>';
    }
    $("#list_people").html(str);
    try{
        $("#list_people").listview('refresh');
    } catch(e) {}
}

function  select_people_end(id)
{
    localStorage.people=users[id].name;
}

function  select_field(){
var str="";
for(var i=0;i<restaurants.length;i++)
  {
     str += '<li><a>'+restaurants[i].name+'</a></li>';
     $("#select_field").html(str);
  }
   try
   {
    $("#select_field").listview('refresh');
   }
 catch(e){}
}
