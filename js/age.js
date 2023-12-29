//生年月日
const birthday = {
    year: 1995,
    month: 4,
    date: 27
  };

function getAge(birthday){

    //今日
    var today = new Date();
 
    //今年の誕生日
    var thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
 
    //年齢
    var age = today.getFullYear() - birthday.year;

    if(today < thisYearsBirthday){
        //今年まだ誕生日が来ていない
        age--;
    }
    return age;
}

var age = document.getElementById("age");
age.innerHTML = getAge(birthday);
