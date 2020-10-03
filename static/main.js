let project = [];

project[0] = `<section id="section2"> 
<div class="container">
    <p>📓 In this project we will be working with a fake advertising data set, indicating whether or not a particular internet user clicked on an Advertisement on a company website. We will try to create a model that will predict whether or not they will click on an ad based off the features of that user.
        <br><br>The attributes are deﬁned as follows :-
        <br>👉 <b>Daily Time Spent on Site:- </b>consumer time on site in minutes 
        <br>👉 <b>Age:-</b> cutomer age in years 
        <br>👉 <b>Area Income:-</b> Avg. Income of geographical area of consumer 
        <br>👉 <b>Daily Internet Usage:-</b> Avg. minutes a day consumer is on the internet
        <br>👉 <b>Gender:-</b>  Consumer is male or female               
    </p>
</div>
</section>
<section id="section3">
<div class="container">
    <form action="/result" method="post">
        <!---->
            <div style="display: none;">
                <input name='decision' type="text" value="1">
            </div>
        <!---->
        <div class="formHeading">
        Prediction of Clicking on Adevertisment  📺
        </div>
        <div class="formContainer">
            <div class="formDiv">
                <div class="label">
                    <label title="Daily Time Spent on Site in minutes" for="input1">Daily Time Spent on Site </label>
                </div>
                <div class="input">
                    <input name="input1" type="text" id="input1" title="Daily Time Spent on Site in minutes">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="customer age in years " for="input2">Age</label>
                </div>
                <div class="input">
                    <input name="input2" type="text" id="input2" title="customer age in years ">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Avg. Income of geographical area of consumer " for="input3">Area Income</label>
                </div>
                <div class="input">
                    <input name="input3" type="text" id="input3" title="Avg. Income of geographical area of consumer ">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Avg. minutes a day consumer is on the internet" for="input4">Daily Internet Usage</label>
                </div>
                <div class="input">
                    <input name="input4" type="text" id="input4" title="Avg. minutes a day consumer is on the internet">
                </div>
            </div>            
            <div class="formDiv">
                <div class="label">
                    <label title="Male or Female" for="input5">Gender</label>
                </div>
                <div class="input">
                    <select id="input5" name="input5" title="Male or Female" class="select">
                        <option value="0">Female</option>
                        <option value="1">Male</option>
                    </select>
                </div>
            </div>                         
        </div>
        <div>
            <input type="submit" id="predict" value="Predict">
        </div>
    </form>
</div>
</section>`;

project[1] = `<section id="section2">
<div class="container">
    <p>📓 In this project we will be working with a weather data set, in which we take some feature like Temperature(C), Apparent Temperature(C), humidity, wind speed(km/hr), Visibility(km) and Pressure(millibars) on the basis of features we will predict weather summry (Partly Cloud, Mostly Cloud etc.)
        <br><br>The attributes are deﬁned as follows :-
        <br>👉 <b>Temperature:- </b> temperature in celsius
        <br>👉 <b>Apparent Temperature:- </b> Apparent temperature in celsius
        <br>👉 <b>Humidity:-</b> amount of water vapor in the air (0.0 - 1.0)
        <br>👉 <b>Wind Speed:-</b> wind speed in km/hr
        <br>👉 <b>Visibility:-</b> distance at which an object or light can be clearly discerned in km 
        <br>👉 <b>Pressure:- </b>  pressure in millibars
    </p>
</div>
</section>
<section id="section3">
<div class="container">
    <form action="/result" method="post">
        <!---->
        <div style="display: none;">
            <input name='decision' type="text" value="2">
        </div>
        <!---->
        <div class="formHeading">
        Prediction of weather  ⛈️
        </div>
        <div class="formContainer">
            <div class="formDiv">
                <div class="label">
                    <label title="temperature in celsius" for="input1">Temperature </label>
                </div>
                <div class="input">
                    <input name="input1" type="text" id="input1" title="temperature in celsius">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Apparent temperature in celsius " for="input2">Apparent Temperature</label>
                </div>
                <div class="input">
                    <input name="input2" type="text" id="input2" title="Apparent temperature in celsius ">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="amount of water vapor in the air (0.0 - 1.0) " for="input3">Humidity</label>
                </div>
                <div class="input">
                    <input name="input3" type="text" id="input3" title="amount of water vapor in the air (0.0 - 1.0) ">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="wind speed in km/hr" for="input4">Wind Speed</label>
                </div>
                <div class="input">
                    <input name="input4" type="text" id="input4" title="wind speed in km/hr">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="distance at which an object or light can be clearly discerned in km" for="input5">Visibility</label>
                </div>
                <div class="input">
                    <input name="input5" type="text" id="input5" title="distance at which an object or light can be clearly discerned in kmr">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title=" pressure in millibars" for="input6">Pressure</label>
                </div>
                <div class="input">
                    <input name="input6" type="text" id="input6" title=" pressure in millibars">
                </div>
            </div>             
        </div>
        <div>
            <input type="submit" id="predict" value="Predict">
        </div>
    </form>
</div>
</section>`;

project[2] = `<section id="section2">
<div class="container">
    <p>📓 In this Project we will predict Selling Price Of Car. On the basis of car's Seller type(Individual or Dealer), Owners(1st owner, 2st owner..), KM driven, ex-showroom, fuel and Transmission(Gear transmission of the car Automatic/Manual)
        <br><br>The attributes are deﬁned as follows :-
        <br>👉 <b>Seller Type:- </b> Tells if a Seller is Individual or a Dealer
        <br>👉 <b>owner:- </b> Number of previous owners of the vehicle
        <br>👉 <b>KM driven:-</b> Number of kilometre motorcycle has traveled 
        <br>👉 <b>Fuel:-</b> Fuel type of car (petrol/diesel/CNG/LPG/electric)
        <br>👉 <b>Transmission:-</b> Gear transmission of the car (Automatic/Manual)
        <br>👉 <b>Ex showroom price:-</b> Ex-showroom price of the car in lakh
    </p>
</div>
</section>
<section id="section3">
<div class="container">
    <form action="/result" method="post">
        <!---->
        <div style="display: none;">
            <input name='decision' type="text" value="3">
        </div>  
        <!---->
        <div class="formHeading">
        Predict Selling Price Of Car  🚗
        </div>
        <div class="formContainer">
            <div class="formDiv">
                <div class="label">
                    <label title="Tells if a Seller is Individual or a Dealer" for="input1">Seller Type</label>
                </div>
                <div class="input">
                    <select id="input1" name="input1" title="Tells if a Seller is Individual or a Dealer" class="select">
                        <option value="1">Dealer</option>
                        <option value="0">Individual</option>
                    </select>
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Number of previous owners of the car" for="input2">Owner</label>
                </div>
                <div class="input">
                    <select id="input2" name="input2" title="Number of previous owners of the car" class="select">
                        <option value="0">1st Owner</option>
                        <option value="1">2nd Owner</option>
                        <option value="3">3rd Owner Or Above</option>
                    </select>
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Number of Kilometres the car is driven  " for="input3">KM Driven</label>
                </div>
                <div class="input">
                    <input name="input3" type="text" id="input3" title="Number of Kilometres the car is driven  ">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Fuel type of car (petrol/diesel/CNG)" for="input4">Fuel</label>
                </div>
                <div class="input">
                    <select id="input4" name="input4" title="Fuel type of car (petrol/diesel/CNG)" class="select">
                        <option value="0">Petrol</option>
                        <option value="1">Diesel</option>
                        <option value="2">CNG</option>
                    </select>
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Gear transmission of the car (Automatic/Manual)" for="input5">Transmission</label>
                </div>
                <div class="input">
                    <select id="input5" name="input5" title="Gear transmission of the car (Automatic/Manual)" class="select">
                        <option value="0">Manual</option>
                        <option value="1">Automatic</option>                            
                    </select>
                </div>
            </div>  
            <div class="formDiv">
                <div class="label">
                    <label title="This is ex-showroom price of the car in lakh" for="input6">Ex showroom price</label>
                </div>
                <div class="input">
                    <input name="input6" type="text" id="input6" title="This is ex-showroom price of the car in lakh">
                </div>
            </div>            
        </div>
        <div>
            <input type="submit" id="predict" value="Predict">
        </div>
    </form>
</div>
</section>
`;

project[3] = `<section id="section2">
<div class="container">
    <p><br>📓 In this Project we will predict Selling Price Of Motor Cycle. On the basis of motorcycle's Seller type(Individual or Dealer), Owners(1st owner, 2st owner..), KM driven and ex-showroom
        <br><br><br>The attributes are deﬁned as follows :-
        <br>👉 <b>Seller Type:- </b> Tells if a Seller is Individual or a Dealer
        <br>👉 <b>owner:- </b> Number of previous owners of the vehicle
        <br>👉 <b>KM driven:-</b> Number of kilometre motorcycle has traveled 
        <br>👉 <b>Ex showroom price:-</b> Showroom price of the motorcycle                            
    </p>
</div>
</section>
<section id="section3">
<div class="container">
    <form action="/result" method="post">
        <!---->
        <div style="display: none;">
            <input name='decision' type="text" value="4">
        </div>
        <!---->
        <div class="formHeading">
        Predict Selling Price Of Motor Cycle  🏍️
        </div>
        <div class="formContainer">
            <div class="formDiv">
                <div class="label">
                    <label title="Tells if a Seller is Individual or a Dealer" for="input1">Seller Type</label>
                </div>
                <div class="input">
                    <select id="input1" name="input1" title="Tells if a Seller is Individual or a Dealer" class="select">
                        <option value="1">Dealer</option>
                        <option value="0">Individual</option>
                    </select>
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Number of previous owners of the vehicle" for="input2">Owner</label>
                </div>
                <div class="input">
                    <select id="input2" name="input2" title="Number of previous owners of the vehicle" class="select">
                        <option value="0">1st Owner</option>
                        <option value="1">2nd Owner</option>
                        <option value="2">3rd Owner</option>
                        <option value="3">4th Owner and Above</option>
                    </select>
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Number of kilometre motorcycle has traveled  " for="input3">KM Driven</label>
                </div>
                <div class="input">
                    <input name="input3" type="text" id="input3" title="Number of kilometre motorcycle has traveled  ">
                </div>
            </div>
            <div class="formDiv">
                <div class="label">
                    <label title="Showroom price of the motorcycle" for="input4">Ex showroom price</label>
                </div>
                <div class="input">
                    <input name="input4" type="text" id="input4" title="Showroom price of the motorcycle">
                </div>
            </div>               
        </div>
        <div>
            <input type="submit" id="predict" value="Predict">
        </div>
    </form>
</div>
</section>
`;


selectProject = ()=>{                
projectNo = document.getElementById("selectProject").value[7];
    document.getElementById("activeProject").innerHTML = `${project[projectNo]}`;} 



