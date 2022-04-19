import getConfig from './modules/get_config.mjs';
import createSubjectsList from './modules/create_subjects_list.mjs';


getConfig().then((response) => {
    
    const config = response;

    createSubjectsList(config);
    
});