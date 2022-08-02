$(document).ready(function () {

    let initiate = false;
    let now = moment().format('LLLL'); 

    let now24 = moment().format('H'); 
    let now12 = moment().format('h');
    if (initiate) {
        now24 = 13;
        now12 = 1;
    }
    const currentDate = $('#currentDay');
    currentDate.text(now);

    let cal = new Date();
    let currentHour = cal.getHours(); 

    for (var i = 9; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }

     {
        $('.saveBtn').click(function () {
			let hr9 = document.getElementById('9').value;
			localStorage.setItem('text9', hr9);
			let hr10 = document.getElementById('10').value;
			localStorage.setItem('text10', hr10);
			let hr11 = document.getElementById('11').value;
			localStorage.setItem('text11', hr11);
			let hr12 = document.getElementById('12').value;
			localStorage.setItem('text12', hr12);
			let hr13 = document.getElementById('13').value;
			localStorage.setItem('text13', hr13);
			let hr14 = document.getElementById('14').value;
			localStorage.setItem('text14', hr14);
			let hr15 = document.getElementById('15').value;
			localStorage.setItem('text15', hr15);
			let hr16 = document.getElementById('16').value;
			localStorage.setItem('text16', hr16);
			let hr17 = document.getElementById('17').value;
			localStorage.setItem('text17', hr17);
        });
     }

     // Saved Times

     let saved9 = localStorage.getItem('text9');
     document.getElementById('9').value = saved9;
     let saved10 = localStorage.getItem('text10');
     document.getElementById('10').value = saved10;
     let saved11 = localStorage.getItem('text11');
     document.getElementById('11').value = saved11;
     let saved12 = localStorage.getItem('text12');
     document.getElementById('12').value = saved12;
     let saved13 = localStorage.getItem('text13');
     document.getElementById('13').value = saved13;
     let saved14 = localStorage.getItem('text14');
     document.getElementById('14').value = saved14;
     let saved15 = localStorage.getItem('text15');
     document.getElementById('15').value = saved15;
     let saved16 = localStorage.getItem('text16');
     document.getElementById('16').value = saved16;
     let saved17 = localStorage.getItem('text17');
     document.getElementById('17').value = saved17;
});