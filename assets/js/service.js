const servicesBlockItem = document.getElementsByClassName("services_block_item");

const enableMouseCircle = function () {
    document.getElementById('mouse-circle').classList.remove('hidden');
};

const disableMouseCircle = function () {
    document.getElementById('mouse-circle').classList.add('hidden');
};

for (var i = 0; i < servicesBlockItem.length; i++) {
    servicesBlockItem[i].addEventListener('mouseover', disableMouseCircle, false);
    servicesBlockItem[i].addEventListener('mouseout', enableMouseCircle, false);
}
disableMouseCircle('.services_block_item')