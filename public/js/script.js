
document.getElementById("create_an_account").addEventListener("click",showSignUpForm,false);
document.getElementById("add_restaurant").addEventListener("click",showAddRestaurant,false);

function showSignUpForm()
{
    document.getElementById("signup_form_id").style.display='block';
    document.getElementById("add_restaurant_form_id").style.display='none';
    document.getElementById("login_form_id").style.display='none';
}
function showAddRestaurant()
{
    document.getElementById("add_restaurant_form_id").style.display='block';
    document.getElementById("signup_form_id").style.display='none';
    document.getElementById("login_form_id").style.display='none';
}
