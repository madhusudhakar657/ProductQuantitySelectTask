
let labelElementTwo = document.getElementById("sectionUnit_two");
let labelElementOne = document.getElementById("sectionUnit_one");
let labelElementThree = document.getElementById("sectionUnit_three");
let totalPriceElement = document.getElementById('totalPrice');
let propertiesOptionOneElement = document.getElementById('unit_content_one');
let propertiesOptionTwoElement = document.getElementById('unit_content_two');
let propertiesOptionThreeElement = document.getElementById('unit_content_three');

// totalPriceElement.textContent='Total : $18.00 USD';



function createPropertyOption(value) {
    // Get the container element
    const container = document.createElement('div');
    container.className = 'eachOptionDropdowns'

    // Create the label "#1"
    const label = document.createElement('span');
    label.className = 'label';
    label.innerText = `#${value}`;
    label.style.margin = '5px';


    // Create the first dropdown for "S"
    const sizeDropdown = document.createElement('select');
    sizeDropdown.className = 'dropdown';
    sizeDropdown.style.margin = '5px';
    sizeDropdown.style.padding = '5px 10px';

    sizeDropdown.style.borderRadius = '3px';
    const sizes = ['S', 'M', 'L', 'XL'];
    sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size;
        option.innerText = size;
        option.style.padding = '0px 2px';
        sizeDropdown.appendChild(option);
    });

    // Create the second dropdown for "Black"
    const colorDropdown = document.createElement('select');
    colorDropdown.className = 'dropdown';
    colorDropdown.style.margin = '6px';
    colorDropdown.style.padding = '5px 10px';
    colorDropdown.style.borderRadius = '3px';
    const colors = ['Black', 'White', 'Red', 'Blue'];
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = color;
        option.style.padding = '0px 2px';
        colorDropdown.appendChild(option);
    });

    // Append the elements to the container
    container.appendChild(label);
    container.appendChild(sizeDropdown);
    container.appendChild(colorDropdown);

    return container;
}


function firstOptionUnitOne(value,total){
    labelElementTwo.style.backgroundColor = '';
    labelElementTwo.style.border = '';
    labelElementThree.style.backgroundColor = '';
    labelElementThree.style.border = '';
    propertiesOptionTwoElement.innerHTML = '';
    propertiesOptionThreeElement.innerHTML = '';
    labelElementOne.style.height = "auto"
    labelElementOne.style.backgroundColor = '#FFF9FA';
    labelElementOne.style.border = 'solid 2px #FF6B82';


    document.getElementById('lower_section_three').style.display = 'none';
    document.getElementById('lower_section_two').style.display = 'none';
    document.getElementById('lower_section_one').style.display = 'block';
    for (let i = 1; i <= Number(value); i++) {
        propertiesOptionOneElement.appendChild(createPropertyOption(i))
    }

}


function onSelectOption(value, total = '18') {
    totalPriceElement.textContent = `$${total} USD`;
    if (value == "1") {
        firstOptionUnitOne(value,total);

    }
    else if (value == "2") {

        labelElementThree.style.backgroundColor = '';
        labelElementThree.style.border = '';
        labelElementOne.style.backgroundColor = '';
        labelElementOne.style.border = '';
        propertiesOptionOneElement.innerHTML = '';
        propertiesOptionThreeElement.innerHTML = '';
        labelElementTwo.style.height = "auto";
        labelElementTwo.style.backgroundColor = '#FFF9FA';
        labelElementTwo.style.border = 'solid 2px #FF6B82';
        document.getElementById('lower_section_three').style.display = 'none';
        document.getElementById('lower_section_two').style.display = 'block';
        document.getElementById('lower_section_one').style.display = 'none';
        for (let i = 1; i <= Number(value); i++) {
            propertiesOptionTwoElement.appendChild(createPropertyOption(i))
        }


    }
    else if (value == "3") {
        propertiesOptionOneElement.innerHTML = '';
        propertiesOptionTwoElement.innerHTML = '';
        labelElementTwo.style.backgroundColor = '';
        labelElementTwo.style.border = '';
        labelElementOne.style.backgroundColor = '';
        labelElementOne.style.border = '';
        labelElementThree.style.height = "auto"
        labelElementThree.style.backgroundColor = '#FFF9FA';
        labelElementThree.style.border = 'solid 2px #FF6B82';
        document.getElementById('lower_section_three').style.display = 'block';
        document.getElementById('lower_section_two').style.display = 'none';
        document.getElementById('lower_section_one').style.display = 'none';
        for (let i = 1; i <= Number(value); i++) {
            propertiesOptionThreeElement.appendChild(createPropertyOption(i))
        }

    }
}







firstOptionUnitOne('1','10');
onSelectOption();