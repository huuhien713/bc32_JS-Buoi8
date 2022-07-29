// Thêm phần tử 
var arrNumbers = [];
var btnShow = document.querySelectorAll('button');
document.getElementById('btnAdd').onclick = function() {
    var addNumber = Math.floor(Number(document.getElementById('addNumber').value));
    arrNumbers.push(addNumber);
    for (var i = 0; i < arrNumbers.length; i++) {
        arrNumbers[i];
    }
    console.log(arrNumbers)
}
// Tổng các số dương trong mảng.
btnShow[2].onclick = function() {
    var tong = 0;
    for (var i = 0; i < arrNumbers.length; i++) {
        if ( parseInt(arrNumbers[i]) > 0) {
            tong += parseInt(arrNumbers[i]);
        }
    }
    document.getElementById('tagShow').innerHTML = 'Tổng Các Số Dương trong mảng là ' + tong;
} 
// Đếm có bao nhiêu số dương trong mảng
btnShow[3].onclick = function() {
    var dem = 0;
    for( var i = 0; i < arrNumbers.length ; i++) {
        if (arrNumbers[i] > 0) {
            dem++;
        }
    }
    document.getElementById('tagShow').innerHTML = 'Có ' + dem + ' Số Dương trong mảng';
}
// Tìm số nhỏ nhất trong mảng.
btnShow[4].onclick = function() {
    var min = parseInt(arrNumbers[0]);
    for (var i = 0; i < arrNumbers.length; i++) {
        if (min > parseInt(arrNumbers[i])) {
            min = parseInt(arrNumbers[i]);
        }
    }
    document.getElementById('tagShow').innerHTML = 'Số Nhỏ Nhất trong mảng là ' + min;
}
// Tìm số dương nhỏ nhất trong mảng.
btnShow[5].onclick = function() {
    var minDuong = parseInt(arrNumbers[0]);
    for (var i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] >= 0 && minDuong > parseInt(arrNumbers[i])) {
            minDuong = parseInt(arrNumbers[i]);
        } else {
            minDuong = minDuong;
        }
    }
    document.getElementById('tagShow').innerHTML = 'Số Dương Nhỏ Nhất trong mảng là ' + minDuong;
}
// Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
btnShow[6].onclick = function() {
    var soChan = 0;
    for (var i = 0; i < arrNumbers.length; i++) {
        if (soChan == 0) {
            // show[5].value = -1;
            document.getElementById('tagShow').innerHTML = -1;
        }
        if ((arrNumbers[i] % 2 == 0)) {
            var evenNumber = arrNumbers[i];
            // show[5].value = evenNumber;
            document.getElementById('tagShow').innerHTML = 'Số Chẳn Cuối Cùng trong mảng là ' + evenNumber;
            soChan++;
        }
    }
}
// Sắp xếp mảng theo thứ tự tăng dần.
btnShow[7].onclick = function() {  
    arrNumbers.sort(
        function(a, b) {
            return a -  b;
        }
    );
    console.log(arrNumbers)
    var ascending = ' ';
    for (var i = 0; i < arrNumbers.length; i++) {
        ascending =  ascending + ' ' + arrNumbers[i];
        document.getElementById('tagShow').innerHTML = '[' + ascending + ' ]';
    }
}
// Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
btnShow[8].onclick = function() {
    for (var i = 0; i < arrNumbers.length; i++) {
        var dem = 0;
        for (var j = 1; j <= arrNumbers[i]; j++) {
            if (arrNumbers[i] % j === 0) {
                dem +=1;
            } 
        }
        if ( dem === 2) {
            document.getElementById('tagShow').innerHTML = 'Số Nguyên Tố đầu tiên trong mảng là ' + arrNumbers[i];
            break;
        } else {
            document.getElementById('tagShow').innerHTML = '-1';
        }
    }
}
// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
btnShow[10].onclick = function() {
    var soAm = 0;
    var soDuong = 0;
    for (var i = 0; i < arrNumbers.length; i++) {
        if ( Number(arrNumbers[i]) < 0) {
            soAm += 1;
        } else if (Number(arrNumbers[i]) > 0 ) {
            soDuong +=1;
        }
    }
    if (soAm === soDuong) {
        document.getElementById('tagShow').innerHTML = 'số âm có ' + soAm + ', số dương có ' + soDuong + '. <br> Số lượng số âm và số dương bằng nhau';
    } else if (soAm > soDuong) {
        document.getElementById('tagShow').innerHTML = 'số âm có ' + soAm + ', số dương có ' + soDuong + '. <br> Số lượng số âm lớn hơn số dương';
    } else if (soDuong > soAm) {
        document.getElementById('tagShow').innerHTML = 'số âm có ' + soAm + ', số dương có ' + soDuong + '. <br> Số lượng số dương lớn hơn số âm';
    }
}
// Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
btnShow[11].onclick = function() {
    var viTriBD = document.getElementById('viTriBD').value;
    var viTriCD = document.getElementById('viTriCD').value;
    var arrViTriBD = arrNumbers[viTriBD];
    var arrViTriCD = arrNumbers[viTriCD];
    // console.log(viTriBD, viTriCD, arrViTriBD, arrViTriCD)
    arrNumbers.splice(viTriBD, 1, arrViTriCD);
    arrNumbers.splice(viTriCD, 1, arrViTriBD);
    console.log(arrNumbers);
    var exchange = '';
    for (var i = 0; i < arrNumbers.length; i++) {
        exchange += arrNumbers[i] + ' ';
    }
    document.getElementById('tagShow').innerHTML = exchange;
}
var arrNumbers2 = [];
document.getElementById('btnAdd2').onclick = function() {
    var addNumber2 = Number(document.getElementById('addNumber2').value);
    arrNumbers2.push(addNumber2);
    for (var i = 0; i < arrNumbers2.length; i++) {
        arrNumbers2[i];
    }
    console.log(arrNumbers2)
}
// Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
btnShow[9].onclick = function() {
    soNguyen = 0;
    for (var i = 0; i < arrNumbers2.length; i++) {
        if (Number.isInteger(arrNumbers2[i]) === true) {
            soNguyen +=1;
        } 
    }
    document.getElementById('tagShow').innerHTML = 'Có ' + soNguyen + ' Số Nguyên Trong Mảng';
}