    let hour = document.getElementById("Hour")
    let minute = document.getElementById("Minutes")
    let spans = document.getElementById('spans').innerHTML
    let frame = document.querySelector('.frame')
    let but = document.getElementById('color');
    let date = new Date()
    let h = document.getElementById('h')
    let m = document.getElementById('m')
    let s = document.getElementById('s')
    let stopAlarm = false

    
    setInterval(() => {
        let date = new Date()
            h.innerHTML = date.getHours()
            m.innerHTML = date.getMinutes()
            s.innerHTML = date.getSeconds()
        // if (hour.value == date.getHours() && minute.value == date.getMinutes()) {
        //     document.getElementById('audio').play() 
        // }
    }, 1000);

    // console.log(date.toLocaleDateString);
    // console.log(date.toLocaleTimeString);
    // console.log(date.getMinutes);
    // console.log(date.getHours);
    // console.log(date.getTime() * 60);
    // console.log(Date.now());
    // console.log(date.getMonth()+1);
    // console.log(date.getFullYear);
    // for (let index = 0; index < 24; index++) {
    //     const element = index;
    //     document.getElementById("sel").innerHTML += `<option value="${element}">${element}</option>`
    // }
    
    // for (let index = 0; index < 60; index++) {
    //     const element = index;
    //     document.getElementById("sel2").innerHTML += `<option value="${element}">${element}</option>`
    // }

        function set() {
            if (stopAlarm) {
                hour.value = '';
                minute.value = '';
                but.innerText = 'Set Alarm';
                document.getElementById('audio').pause()
                return stopAlarm = false
                
            }

            if (hour.value == '' || minute.value == '') {
            alert('Please, set time')
            }else if(minute.value > 59) {
            alert('Invalid time, pls reset')
        }
            but.innerText = 'Clear Alarm'
            
            setInterval(() => {
             let date = new Date()
             if (hour.value == date.getHours() && minute.value == date.getMinutes()) {
            document.getElementById('audio').play() 
        }
         }, 1000);
             stopAlarm = true
        }


    //     setInterval(SetAlarm, 1000);
    //     let date = new Date()
    //     // console.log(min.value == date.getMinutes());
    //     if (hour.value == date.getHours() && min.value == date.getMinutes) {
    //     alert("Wake up")
    // }


    
    