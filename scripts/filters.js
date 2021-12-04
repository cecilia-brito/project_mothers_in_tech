const job1 = document.getElementById('1');
const job2 = document.getElementById('2');
const job3 = document.getElementById('3');
const job4 = document.getElementById('4');
const job5 = document.getElementById('5');
const checkvagas = document.getElementById('check-vagas');
const checkcursos = document.getElementById('check-cursos');
const heckoutros = document.getElementById('check-outros');

    if(checkvagas.checked == true){
        job2.classList.toggle('active');
        job3.classList.toggle('active');
        job1.classList.toggle('active');
        job4.classList.toggle('desactive');
        job5.classList.toggle('desactive');
    }
    if(checkcursos.checked == true){
        job4.classList.toggle('active');
        job5.classList.toggle('active');
        job1.classList.toggle('desactive');
        job3.classList.toggle('desactive');
        job2.classList.toggle('desactive');
    }
    if(checkoutros.checked == true){
        job1.classList.toggle('active');
        job2.classList.toggle('desactive');
        job3.classList.toggle('desactive');
        job4.classList.toggle('desactive');
        job5.classList.toggle('desactive');
    }

