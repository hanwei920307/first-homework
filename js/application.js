function  select_people()
{
    str="";
    for(var i=0;i<users.length;i++)
    {
        str += '<li><a href="#order_meal"  onclick="select_people_end(' + i + ')">'+users[i].name+'</a></li>';
    }
    $("#list_people").html(str);
    try
    {
        $("#list_people").listview('refresh');
    } catch(e) {}

}

function  select_people_end(i)
{
    localStorage.people = users[i].name;
}

function   deliver_people_name()
{
     $("#text_select_people").val(localStorage.people);

}

function  select_field(){
var str="";
for(var i=0;i<restaurants.length;i++)
  {
     str += '<li><a href="#order_meal"  onclick="select_field_end(' + i + ')" >'+restaurants[i].name+'</a></li>';
  }
     $("#select_field").html(str);
   try
   {
    $("#select_field").listview('refresh');
   } catch(e) {}
}

function  select_field_end(a)
{
    localStorage.field = restaurants[a].name;
}
function  deliver_field_end()
{
    $("#text_select_field").val(localStorage.field);
}

function  select_meal()
{
var meal="";
for(var i=0;i<foods[localStorage.field].length;i++)
   {
    meal += '<li><a href="#order_meal"  onclick="select_meal_end(' + i + ')" >' + foods[localStorage.field][i].name +
        '<span class="ui-li-aside" font-size: small>￥' + foods[localStorage.field][i].price + '</span></a></li>';
   }
    $("#select_meal").html(meal);
    try
    {
        $("#select_meal").listview('refresh');
    }catch(e) {}
}

function select_meal_end(id)
{
    localStorage.meal= foods[localStorage.field][id].name;
    localStorage.price=foods[localStorage.field][id].price;
}

function deliver_meal_end()
{
    $("#text_select_meal").val(localStorage.meal);
}

done_select_people="";
done_select_field="";
done_select_meal="";
meal_price="";


function confirm()
{
    done_select_people = localStorage.people;
    done_select_field =  localStorage.field;
    done_select_meal =  localStorage.meal;
    meal_price = localStorage.price ;
    clear_text();
}

function clear_text()
{
    $("#text_select_people").val("");
    $("#text_select_meal").val("");
}


