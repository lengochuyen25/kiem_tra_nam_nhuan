let year = prompt('Hãy nhập năm để kiểm tra: ');
let isleapyear = false;
let yeardivision4 = year % 4 == 0;

if (yeardivision4) {
    let yeardivision100 = year % 100 == 0;
    if (yeardivision100) {
        let yeardivison400 = year % 400 == 0;
        if (yeardivison400)
            isleapyear = true;
    }
    else {
        isleapyear = true;
    }
}


if (isleapyear){
    alert(year+ " là năm nhuận");
}else {
    alert(year+ " không là năm nhuận");
}

