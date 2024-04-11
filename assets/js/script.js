const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    //calculo do imc
    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    //para mostrar mais informações após calculo
    document.getElementById('infos').classList.remove('hidden');

    //imc description
    if (bmi < 18.5){
        description = 'Cuidado!! Você está abaixo do peso ideal...';
    } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Você está no peso ideal!!';
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado!! Você está com sobrepeso...';
    }else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado!! Você esta com obesidade moderada...';
    }else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado!! Você está com obesidade severa...';
    } else {
        description = 'Urgente!! Você está com obesidade morbida!!';
    }


    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});