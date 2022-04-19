export default async function createText(form,subject){
    const response = await fetch("./template/" + subject + ".txt")
    const text = await response.text()
    let template = text;

    console.log(template)

    template = template.replace(/\n/g, "<br>")

    console.log(template)

    const fields = form.elements;

    for (let i = 0; i < (form.elements.length - 1); i++){

        const searchValue = '{{' + fields[i].name + '}}'
        const fldValue = '<strong>' + fields[i].value + '</strong>';

        template = template.replace(searchValue, fldValue);

    }

    const textContainerDOM = document.querySelector('.text.container');

    textContainerDOM.innerHTML = "";

    const textDiv = document.createElement('div');
    textDiv.innerHTML = template;

    textContainerDOM.appendChild(textDiv);

    console.log(template);
}