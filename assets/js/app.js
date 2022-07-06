
  let inn = prompt('Введите ИНН:');

  let arr = [...inn].map( (item) => +item );

  let sum = arr[0] * -1 + arr[1] * 5 + arr[2] * 7 + arr[3] * 9 + arr[4] * 4 + arr[5] * 6 + arr[6] * 10 + arr[7] * 5 + arr[8] * 7;

  let checkN = sum % 11;

  if (checkN == 10){
    checkN = 0;
  }

  if (checkN == arr[9]){

    console.log('Код корректный');

    let daysPassed = +inn.slice(0, 5);
    let innDate = new Date(1899, 11, 31);
    let birthDate = new Date(innDate.setDate(innDate.getDate() + daysPassed));
    console.log(`Дата Рождения: ${birthDate}`);

    let now = new Date();
    let nowTS = now.getTime();
    let birthDateTS = birthDate.getTime();
    let fullYears = Math.floor((nowTS - birthDateTS) / 1000 / 60 / 60 / 24 / 365);
    console.log(`Полных лет: ${fullYears}`);

    if (arr[8] % 2 == 0){
      console.log('Пол женский');
    }else {
      console.log('Пол мужской');
    }

  }else {
    console.log('Код некорректный');
  }

