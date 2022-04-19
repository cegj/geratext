import createSubjectForm from "./create_subject_form.mjs";

export default function createSubjectsList(config){

    const subjects = Object.keys(config)

    const subjectsListDOM = document.querySelector(".subjects.list")

    subjects.forEach((subject) => {
        const subjectItem = document.createElement('li');
        subjectItem.innerHTML = subject;
        subjectsListDOM.appendChild(subjectItem);
        
        subjectItem.addEventListener('click', (event) => {createSubjectForm(event, config)})
    })

}