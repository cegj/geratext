import createText from "./create_text.mjs";

export default function createSubjectForm(event, config){
    try {

        const subject = event.target.innerText;

        const {fields, labels, attributes} = config[subject];
        const formId = subject.replace(/\s/g,'').toLocaleLowerCase();
        const formContainerDOM = document.querySelector('.form.container')

        formContainerDOM.innerHTML = "";

        //Create form element
        const form = document.createElement('form')
        form.id = formId;
        form.name = subject;

        // Create label and imput for each form field and append to form
        fields.forEach((field, i) => {

            const label = document.createElement('label');
            label.setAttribute('for', field)
            label.innerText = (labels[i])

            function createInput(){
                if (Array.isArray(field)){
                    console.log(field + " É ARRAY")
                    return document.createElement('select');
                } else {
                    console.log(field + " NÃO É ARRAY")
                    return document.createElement('input');
                }
            }

            const input = createInput();

            input.id = field;
            input.name = field;

            function setAttributesOrOptions(){
                if (Array.isArray(attributes[i])){
                    attributes[i].forEach((optionValue) => {
                        const option = document.createElement("option");
                        option.value = optionValue;
                        option.innerText = optionValue;
                        input.appendChild(option)
                    })
                } else {

                    let attributesArray = Object.entries(attributes[i])

                    for (let n = 0; n < attributesArray.length; n++){
                        const attName = attributesArray[n][0];
                        const attValue = attributesArray[n][1];
                        
                        input.setAttribute(attName, attValue)
                    }        
                }
            }

            setAttributesOrOptions();
                
            form.appendChild(label);
            form.appendChild(input);
        })

        //Create form button
        const formBtn = document.createElement('input');
        formBtn.setAttribute('type', 'submit');
        formBtn.dataset.form = subject;
        formBtn.value = 'Preencher';

        form.appendChild(formBtn);
        
        // Inserts form at DOM
        formContainerDOM.appendChild(form)

        
        const submitBtn = form.querySelector('[type="submit"]');

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            createText(form,subject);
        })


    } catch(e) {
        ('UNABLE TO CREATE SUBJECT FORM: ' + e)
    }
}