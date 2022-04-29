import createSubjectForm from "./create_subject_form.mjs";

export default function createSubjectsList(config){

    const subjects = Object.keys(config)

    const subjectsListDOM = document.querySelector(".gtxt-subjects-list")

    subjects.forEach((subject) => {
        const subjectLi = document.createElement('li');
        subjectLi.classList.add("nav-item");

        const subjectA = document.createElement('a');
        subjectA.classList.add('nav-link');
        subjectA.setAttribute('href', '');
        subjectA.innerHTML = subject;

        subjectLi.appendChild(subjectA);
        subjectsListDOM.appendChild(subjectLi);
        
        subjectLi.addEventListener('click', (event) => {createSubjectForm(event, config)})
    })

}