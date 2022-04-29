export default function setDateToBrFormat(originalDate){

    const date = originalDate.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$3/$2/$1');

    return date;

}