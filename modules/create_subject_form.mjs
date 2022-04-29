import createText from "./create_text.mjs";

export default function createSubjectForm(event, config){
    try {

        event.preventDefault();

        const subject = event.target.innerText;

        const {fields, labels, attributes} = config[subject];
        const formId = subject.replace(/\s/g,'').toLocaleLowerCase();
        const formContainerDOM = document.querySelector('.gtxt-form-container')

        formContainerDOM.innerHTML = "";

        //Create form element
        const form = document.createElement('form')
        form.classList.add('p-3')
        form.id = formId;
        form.name = subject;

        // Create label and imput for each form field and append to form
        fields.forEach((field, i) => {

            const label = document.createElement('label');
            label.classList.add('form-label');
            label.setAttribute('for', field);
            label.innerText = (labels[i]);

            function createInput(){
                if (Array.isArray(field)){
                    const element = document.createElement('select');
                    element.classList.add('form-select'); 
                    return element;
                } else {
                    const element = document.createElement('input');
                    element.classList.add('form-control'); 
                    return element;
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
                    
                    input.setAttribute('placeholder', label);
                }
            }

            setAttributesOrOptions();

            const wrapDiv = document.createElement('div');
            wrapDiv.classList.add('form-floating');
            wrapDiv.classList.add('mb-3');

            wrapDiv.appendChild(input);
            wrapDiv.appendChild(label);

            form.appendChild(wrapDiv);
        })

        //Create form button
        const formBtn = document.createElement('input');
        formBtn.setAttribute('type', 'submit');
        formBtn.classList.add('btn');
        formBtn.classList.add('btn-primary');
        formBtn.dataset.form = subject;
        formBtn.value = 'Preencher';

        form.appendChild(formBtn);
        
        // Inserts form at DOM
        formContainerDOM.appendChild(form)
        formContainerDOM.style.display = "block";

        
        const submitBtn = form.querySelector('[type="submit"]');

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            createText(form,subject);
        })


    } catch(e) {
        ('UNABLE TO CREATE SUBJECT FORM: ' + e)
    }
}