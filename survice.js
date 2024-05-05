let name = document.getElementById('name');
let age = document.getElementById('age');
let country = document.getElementById('country');
let role = document.getElementById('role');
let languech_programation = document.getElementById('languech_programation');
let b_p_f_y = document.getElementById('b_p_f_y');
let text = document.getElementById('text');
let texture = document.getElementById('texture');

function creatProfile(){
   text.innerHTML = `hello ${name.value}`;


   if(age.value <= 15){
    texture.innerHTML = `Hello ${name.value}, your age is ${age.value} <br>
    you are sow smal for the project<br>
    and you are a ${role.value} programming. <br>
     You live in ${country.value}, <br>
    so there are not many workhorses. <br>
     You have a lot of jobs. <br>
      Well, this is your profile.`
   }else{
    texture.innerHTML = `Hello ${name.value}, your age is ${age.value} <br>
    and you are a ${role.value} programming. <br>
     You live in ${country.value}, <br>
    so there are not many workhorses. <br>
     You have a lot of jobs. <br>
      Well, this is your profile.`
   }
    
}
