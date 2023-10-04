const go_back_home_link = document.getElementById('go_back_home_link');

let original_text = go_back_home_link.innerHTML;
let add_new_text = 'Home';

go_back_home_link.addEventListener('mouseover', () => {

  go_back_home_link.innerHTML += add_new_text;

});

go_back_home_link.addEventListener('mouseleave', () => {

  go_back_home_link.innerHTML = original_text;

});