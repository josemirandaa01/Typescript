let x = 5;
let y = 'Kelvin';

temperature(50,'celsius')

function temperature(x:number, y:string)
{
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

if(y === 'kelvin')
{
    celsius = x - 273.15;
    fahrenheit = (x - 273.15) * 9/5 + 32;
    kelvin = x;
}

else if(y === 'celsius')
{
    celsius = x
    fahrenheit = (x * 1.8) + 32
    kelvin = x + 273.15

    
}

else if (y === 'farenheit')
{

    celsius = (x - 32) * 5/9;
    fahrenheit = x;
    kelvin = (x - 32) * 5/9 + 273.15;

}


console.log(celsius,fahrenheit,kelvin)

return 0;
}