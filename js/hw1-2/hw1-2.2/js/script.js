var nameArr = [];

for (var i = 0; i < 5; i++) {
  nameArr[i] = prompt('Insert Name №' + (i + 1));
}

var user = prompt('Insert user Name');

var key = false;

for (i = 0; i < nameArr.length; i++) {
  if (nameArr[i] == user) {
    key = true;
    i = nameArr.length;
  }
}

if (key == true) {
  alert(user + ', вы успешно вошли');
} else {
  alert('Error')
}

