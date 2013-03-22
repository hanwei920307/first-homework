function  select_people()
{
    var str="";
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
    done_select_people +="*" + localStorage.people;
    localStorage.people.count ++;
    done_select_field +="*"+ localStorage.field;
    done_select_meal +="*"+ localStorage.meal ;
    meal_price += "*" + localStorage.price ;
    clear_text();
    get_information_from_text();
}

function clear_text()
{
    $("#text_select_people").val("");
    $("#text_select_meal").val("");
}

function get_information_from_text()
{
    choice_name=done_select_people.split('*');
    choice_field=done_select_field.split('*');
    choice_meal=done_select_meal.split('*');
    choice_price=meal_price.split('*');
}


function  list_order_information()
{
    var show_order_information="";
    for (var i=1;i<choice_name.length;i++)
        {
            var color="";
            if(parseInt(choice_price[i])>12)
            {
                color='style="color: red"'
            }
            show_order_information += '<li><h3 style="font-size: large" >' + choice_name[i]
                + '</h3><p class="ui-li-aside ui-li-desc"><strong>￥'
                + choice_price[i] + '</p><h3 class="ui-li-desc" style="font-size: medium">' +choice_field[i] + '  '
                + choice_meal[i] + '</strong></h3></li>'
        }
    $("#show_order_form").html(show_order_information);
    try
    {
    $("#show_order_form_page").listview('refresh');
    } catch(e) {}

}



