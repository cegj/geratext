async function constructForms(){
    try {
        const response = await fetch("./config.json")
        const json = await response.json()
        const data = json;
    
        const subjects = Object.keys(data);

        body = document.querySelector('body')

        subjectsListDOM = document.querySelector(".subjects.list")
        formContainerDOM = document.querySelector(".form.container")
        textContainerDOM = document.querySelector(".text.container")

        subjects.forEach((subject) => {

            const {fields, labels, attributes} = data[subject];
            const formId = subject.replace(/ /g,'').toLocaleLowerCase();

            // Insert subject in the list of subjects
            subjectItem = document.createElement('li');
            subjectItem.innerHTML = subject;
            subjectsListDOM.appendChild(subjectItem)

            // Create form
            form = document.createElement('form')
            form.id = formId;
            form.name = subject;

            // Create label and imput for each form field and append to form
            fields.forEach((field, i) => {

                const label = document.createElement('label');
                label.setAttribute('for', field)
                label.innerText = (labels[i])

                const input = document.createElement('input');
                input.id = field;
                input.name = field;
                   
                attributesArray = Object.entries(attributes[i])

                for (let n = 0; n < attributesArray.length; n++){
                    attName = attributesArray[n][0];
                    attValue = attributesArray[n][1];
                    
                    input.setAttribute(attName, attValue)
                }

                form.appendChild(label)
                form.appendChild(input)    
            })

            //Create form button
            formBtn = document.createElement('input')
            formBtn.setAttribute('type', 'submit')
            formBtn.dataset.form = subject;
            formBtn.value = 'Preencher'

            form.appendChild(formBtn)
            
            // Inserts form at DOM
            formContainerDOM.appendChild(form)

        })
        
        const formBtns = document.querySelectorAll('[type="submit"')

        formBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(btn.dataset.form)
                fillText(btn.dataset.form)
            })
        })

    } catch(error) {
        console.log('THERE WAS AN ERROR AT GERATEXT: ' + error)
    }
}

async function fillText(subject){
    const response = await fetch("./template/" + subject + ".txt")
    const text = await response.text()
    const template = text;
    
    console.log(template)

    console.log(document.forms["Incentivo à qualificação"][0].value)
    console.log(document.forms["Incentivo à qualificação"][1].value)
    console.log(document.forms["Incentivo à qualificação"][2].value)
}

constructForms()

fillText()