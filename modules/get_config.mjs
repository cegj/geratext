export default async function getConfig(){
    try {
        const response = await fetch("./config.json");
            const json = await response.json();
            const data = await json;
            return data;
    } catch(e) {
        console.log('UNABLE TO GET CONFIG. ERROR: ' + e);
    }
}