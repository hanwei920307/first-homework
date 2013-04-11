function clear_and_increase_count_attribute()
{
    localStorage.field = "";
}

function increase_count_attribute()
{
    for(var i=0;i<users.length;i++)
    {
    users[i].count=0;
    }
}

function convey_person_id(person_id)
{
    localStorage.person_id=person_id;
}

function translate_users_name_list_html() {
    var str = "";
    for (var i = 0; i < users.length; i++) {
        str += '<li><a href="#order_meal"  onclick="select_people_end(' + i + ')">' + users[i].name + '</a></li>';
    }
    return str;
}
function render_users_name(users_name_list_html)
{
    restructure("list_people",users_name_list_html)
}
function  select_people()
{
    var name = translate_users_name_list_html()
    render_users_name(name);
}

function  select_people_end(person_id)
{
     convey_person_id(person_id);
     var people_name=users[person_id].name
     $("#text_select_people").val(people_name);

}

function  translate_restaurants_name_list_html()
{
    var str="";
    for(var i=0;i<restaurants.length;i++)
    {
     str += '<li><a href="#order_meal"  onclick="select_field_end(' + i + ')" >'+restaurants[i].name+'</a></li>';
    }
    return str;
}
function render_restaurants_name(restaurants_name_list_html)
{
   restructure("select_field",restaurants_name_list_html)
}


function select_field()
{
    var field= translate_restaurants_name_list_html();
    render_restaurants_name(field);
}

function  select_field_end(a)
{
    localStorage.field = restaurants[a].name;
}
function  deliver_field_end()
{
    $("#text_select_field").val(localStorage.field);
}

function  translate_meal_name_list_html()
{
    var str="";
    for(var i=0;i<foods[localStorage.field].length;i++)
    {
    str += '<li><a href="#order_meal"  onclick="select_meal_end(' + i + ')" >' + foods[localStorage.field][i].name +
        '<span class="ui-li-aside" font-size: small>￥' + foods[localStorage.field][i].price + '</span></a></li>';
    }
    return str;
}

function render_meal_name(meal_name_list_html)
{
    restructure("select_meal",meal_name_list_html)
}

function select_meal()
{
    var meal_name=translate_meal_name_list_html()
    render_meal_name(meal_name)
}

function select_meal_end(meal_id)
{
    localStorage.meal= foods[localStorage.field][meal_id].name;
    localStorage.price=foods[localStorage.field][meal_id].price;
}

function deliver_meal_end()
{
    $("#text_select_meal").val(localStorage.meal);
}
function save_all_order()
{
    if(localStorage.all_orders == "[]")
    {
        localStorage.all_orders = JSON.stringify(users);
    }
    else
    {
        users = JSON.parse(localStorage.all_orders);
    }
}

function save_orders()
{
    var name=$("#text_select_people").val()
    var field=$("#text_select_field").val()
    var meal=$("#text_select_meal").val()
    var price=localStorage.price
    var order_menu={"select_name":name,"select_field":field,"select_meal":meal,"select_price":price}
    localStorage.all_order_menu=localStorage.all_order_menu || "[]";
    var all_order_menu=JSON.parse(localStorage.all_order_menu)
    all_order_menu.push(order_menu)
    localStorage.all_order_menu=JSON.stringify(all_order_menu)
}
function confirm()
{
    save_orders()
    clear_text()

}

function clear_text()
{
    $("#text_select_people").val("");
    $("#text_select_meal").val("");
}

function display_all()
{
    list_order_meal_name()
    list_not_orders()
    list_total()
}

function display_orders()
{
    var orderPeopleNum=JSON.parse(localStorage.all_order_menu)
    var str="";
    str='<li data-role="list-divider">' +  orderPeopleNum.length + '人已定</li>';
    var show_order_people_name="";
    var order_meal_people_num = JSON.parse(localStorage.all_order_menu)
    for (var i=0;i<order_meal_people_num.length;i++)
        {
            var color="";
            if(parseInt(order_meal_people_num[i].select_price)>12)
            {
                color='style="color: red"';
            }
            show_order_people_name += '<li><h3 data-role="list_divider"  style="font-size: large" >' + order_meal_people_num[i].select_name
                + '</h3><p class="ui-li-aside ui-li-desc" ' + color + '><strong>￥'
                + order_meal_people_num[i].select_price + '</p><h3 class="ui-li-desc" style="font-size: medium">' +order_meal_people_num[i].select_field + '  '
                + order_meal_people_num[i].select_meal + '</strong></h3></li>'
        }
    return  str+show_order_people_name ;

}

function render_order_meal_name(order_meal_name)
{
    restructure("show_order_form",order_meal_name)
}

function  list_order_meal_name()
{
    var list_orders=display_orders()
    render_order_meal_name(list_orders)
}

function  list_have_not_meal_people()
{
    var orders_people = JSON.parse(localStorage.all_order_menu)
    var have_not_order_name="";
    var str="";
    for(var i=0;i<users.length;i++)
    {
        var is_ordered = false;
        for(var j=0;j<orders_people.length;j++)
        {
            if(users[i].name == orders_people[j].select_name)
            {
                is_ordered = true;
                break;
            }
        }
        !is_ordered ? str += '<li>' + users[i].name + '</li>' : "";
    }
    return str;
}

function show_not_order_meal_list()
{
    var orderPeopleNum=JSON.parse(localStorage.all_order_menu)
    var no_order_meal_people_num=users.length-orderPeopleNum.length;
    var show_not_order_meal_num='<li data-role="list-divider">' + no_order_meal_people_num + '人未定</li>'
    var noOrderName=list_have_not_meal_people();
    return show_not_order_meal_num + noOrderName
}
function render_show_not_order_meal_list(not_order_meal_list)
{
    restructure("show_not_order_form",not_order_meal_list)
}

function  list_not_orders()
{
    var not_orders_meal_name= show_not_order_meal_list()
    render_show_not_order_meal_list(not_orders_meal_name)
}

function count_people_and_price()
{
    var orders_num = JSON.parse(localStorage.all_order_menu)
    var no_order_meal_num=users.length - orders_num.length;
    var total_prices=0;
    var order_meal_people_num = JSON.parse(localStorage.all_order_menu)
    for (var i=0;i<order_meal_people_num.length;i++)
    {
        total_prices += parseFloat(order_meal_people_num[i].select_price);
    }
    var total=orders_num.length+ '人已定，' + no_order_meal_num + '人未定，总计' + total_prices + '元'
    return total;
}

function render_count_people_and_price(total)
{
    restructure("show_total",total)
}

function list_total()
{
    var total=count_people_and_price()
    render_count_people_and_price(total)
}
function all_onload()
{
    try
    {
        clear_and_increase_count_attribute()
        increase_count_attribute();
        save_all_order();
        display_all();
        select_meal()
        select_people();
        select_field();
    }  catch(e) {}
}

function restructure(id,str)
{
    {
        $("#"+id).html(str)
    }
    try
    {
        $("#"+id).listview('refresh')
    }   catch(e){
    }
}

