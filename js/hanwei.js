for(var i=0;i<users.length;i++)
{
    users[i].count=0;
    localStorage.field="";
}

function show_select_person(a)
{
    localStorage.person_id=a;
}


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
    show_select_person(i);
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
    done_select_people +="*"+ localStorage.people;
    users[localStorage.person_id].count ++;
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

function storage_not_order_name()
{
    var user_obj = users;
    var user_name ="";
    for(var i=0;i<user_obj.length;i++)
    {
        if(users[i].count==0)
        {
            user_name += "*" + user_obj[i].name;
        }
    }
    localStorage.not_order_meal_name=user_name;
}

function show_not_order_meal_name()
{
    localStorage.all_people=users.length;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].count==0)
        {
            localStorage.all_people -= 1;
        }
    }
}
function display_all()
{
    storage_not_order_name()
    show_not_order_meal_name()
    list_order()
    show_not_order_meal_list()
    count_people_and_price()
}

function  list_order()
{
    var show_order_information="";
    var str_diliver_name='<li data-role="list-divider">' + localStorage.all_people + '人已定</li>';
    for (var i=1;i<choice_name.length;i++)
        {
            var color="";
            if(parseInt(choice_price[i])>12)
            {
                color='style="color: red"';
            }
            show_order_information += '<li><h3 style="font-size: large" >' + choice_name[i]
                + '</h3><p class="ui-li-aside ui-li-desc" ' + color + '><strong>￥'
                + choice_price[i] + '</p><h3 class="ui-li-desc" style="font-size: medium">' +choice_field[i] + '  '
                + choice_meal[i] + '</strong></h3></li>'
        }
    $("#show_order_form").html(str_diliver_name+show_order_information);
    try
    {
    $("#show_order_form").listview('refresh');
    } catch(e) {}
}

function show_not_order_meal_list()
{
    var no_order_meal_people_num=users.length-localStorage.all_people;
    var show_not_order_meal_num='<li data-role="list_divider" data-theme="b">' + no_order_meal_people_num + '人未定</li>'
    var no_order_meal_name="";
    var no_order_people=localStorage.not_order_meal_name.split('*')
    for(var i=1;i< no_order_people.length;i++)
    {
        no_order_meal_name += '<li><h3>' + no_order_people[i] + '</h3></li>'
    }
    $("#show_not_order_form").html(show_not_order_meal_num+no_order_meal_name);
    try
    {
        $("#show_not_order_form").listview('refresh');
    } catch(e) {}
}

function count_people_and_price()
{
    var no_order_meal_num=users.length - localStorage.all_people;
    var total_prices=0;
    for (var i=1;i<choice_price.length;i++)
    {
        total_prices += parseFloat(choice_price[i]);
    }
    str_text=localStorage.all_people + '人已定，' + no_order_meal_num + '人未定，总计' + total_prices + '元'
    $("#show_total").html(str_text);
    try
    {
        $("#show_total").listview('refresh');
    } catch(e) {}
}


