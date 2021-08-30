function updateTime() {
    var fullDate = new Date();

    let HH = fullDate.getHours();
    let MM = fullDate.getMinutes();
    let SS = fullDate.getSeconds();

    HH = (HH < 10) ? "0" + HH : HH;
    MM = (MM < 10) ? "0" + MM : MM;
    SS = (SS < 10) ? "0" + SS : SS;

    let time = '${HH}:${MM}:${SS}';
    document.querySelector('#time').innerText = time;
    setTimeout(updateTime,1000);


}