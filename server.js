const exp = require('constants');
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))

app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html")
})


app.get("/dashboard",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>  
    <h1>Welcome</h1>
    `)
})

app.get("/dashboard/myaccount",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li  ><a id="select" href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>  
    <h1>My Account</h1>`)
})

app.get("/dashboard/breakfast",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a id="select" href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>  
    <h1>Breakfast</h1>`)
})

app.get("/dashboard/lunch",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a id="select" href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>
    <h1>Lunch</h1>`)
})

app.get("/dashboard/dinner",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a id="select" href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>
    <h1>Dinner</h1>`)
})

app.get("/dashboard/orders",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a id="select" href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>
    <h1>Orders</h1>`)
})

app.get("/dashboard/earnings",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a id="select" href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>
    <h1>Earnings</h1>`)
})

app.get("/dashboard/records",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a id="select" href="/dashboard/records">Records</a></li>
            <li><a href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>
    <h1>Records</h1>`)
})

app.get("/signout",(req,res)=>{
    res.send(`
    <link rel="stylesheet" href="/css/style.css">
    <div class="nav-bar">
        <ul>
            <li><a href="/dashboard/myaccount">My Account</a></li>
            <li><a href="/dashboard/breakfast">Breakfast</a></li>
            <li><a href="/dashboard/lunch">Lunch</a></li>
            <li><a href="/dashboard/dinner">Dinner</a></li>
            <li><a href="/dashboard/orders">Orders</a></li>
            <li><a href="/dashboard/earnings">Earnings</a></li>
            <li><a href="/dashboard/records">Records</a></li>
            <li><a id="select" href="/dashboard/signout">Sign Out</a></li>
        </ul>
    </div>
    <h1>Sign Out</h1>`)
})
app.listen(8080,function(){
    console.log('server running on 8080');
})