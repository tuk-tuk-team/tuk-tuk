const formatDate = (timestamp) => {
    const arr = timestamp.split('T')[0].split('-');
    let month;
    switch (arr[1]) {
        case '01':
            month = 'січня';
            break;
        case '02':
            month = 'лютого';
            break;
        case '03':
            month = 'березня';
            break;
        case '04':
            month = 'квітня';
            break;
        case '05':
            month = 'травня';
            break;
        case '06':
            month = 'червня';
            break;
        case '07':
            month = 'липня';
            break;
        case '08':
            month = 'серпня';
            break;
        case '09':
            month = 'вересня';
            break;
        case '10':
            month = 'жовтня';
            break;
        case '11':
            month = 'листопада';
            break;
        case '12':
            month = 'грудня';
            break;
        default:
            break;
    }
    return `${arr[2]} ${month} ${arr[0]} г.`;
};

export {
    formatDate
};