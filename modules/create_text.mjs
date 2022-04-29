import setDateToBrFormat from "./utils/set_date_to_br_format.mjs";

export default async function createText(form,subject){
    const response = await fetch("./template/" + subject + ".txt")
    const text = await response.text()
    let template = text;

    template = template.replace(/\n/g, "<br>")

    const fields = form.elements;

    for (let i = 0; i < (form.elements.length - 1); i++){

        let value;

        if (fields[i].type === 'date'){

            value = setDateToBrFormat(fields[i].value);

        } else {
            value = fields[i].value;
        }

        const searchValue = '{{' + fields[i].name + '}}'
        const fldValue = '<strong>' + value + '</strong>';

        template = template.replace(searchValue, fldValue);

    }

    const textContainerDOM = document.querySelector('.gtxt-text-container');
    textContainerDOM.classList.add('p-3');

    textContainerDOM.innerHTML = "";

    const textDiv = document.createElement('div');
    textDiv.innerHTML = template;

    textContainerDOM.appendChild(textDiv);
    textContainerDOM.style.display = "block";

}