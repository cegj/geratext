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
            formBtn.value = 'Preencher'

            form.appendChild(formBtn)
            
            // Inserts form at DOM
            formContainerDOM.appendChild(form)
            
            // Add eventListener to btn
            formBtn.addEventListener('click', (event) => {
                event.preventDefault();
            })

        })

    } catch(error) {
        console.log('THERE WAS AN ERROR AT GERATEXT: ' + error)
    }
}

function fillText(){

    async function getText(){
        const response = await fetch("./template/Incentivo à qualificação.txt")
        const text = await response.text()
        const template = text;
        
        // console.log(template)
    }

    getText();
}

constructForms()

fillText()