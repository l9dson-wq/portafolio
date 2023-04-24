const go_back_home_link = document.getElementById('go_back_home_link');

let original_text = go_back_home_link.innerHTML;
let add_new_text = 'Home';

go_back_home_link.addEventListener('mouseover', () => {

  go_back_home_link.innerHTML += add_new_text;

});

go_back_home_link.addEventListener('mouseleave', () => {

  go_back_home_link.innerHTML = original_text;

});

const extra_information = document.getElementById('extra_infomation');
const big_text_section_event = document.getElementById('big_text_section_event');
const icon_direction_link = document.getElementById('icon_direction_link');

icon_direction_link.addEventListener('click', () => {

  big_text_section_event.style.marginBottom = '10%';
  extra_information.style.display = 'block';

});