// declare time zone formatting
let options = {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
},
formatter = new Intl.DateTimeFormat([], options);

// set time
setInterval(
    () => {
        document.querySelector("#time").innerText = formatter.format(new Date());
    }
, 1000)

// i dont know how to do js. taken from jvscholz
// main site is inspired... definitely.