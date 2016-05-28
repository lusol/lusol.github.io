function displayDate(){
    var today = new Date();
    var month = today.getMonth()+1;
    document.write("Today is " + today.getDate() + "/" + month + "/" + today.getFullYear());
    document.write("<br> The time right now is " +today.getHours() + ":" + today.getMinutes() +":" + today.getSeconds());
}