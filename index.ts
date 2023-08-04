 function pindahjumlah1 () {
    console.log("pesanan-1")
    var test1;
    test1 = (<HTMLInputElement>document.getElementById("jumlah1")).value;
    (<HTMLInputElement>document.getElementById("invoice-jumlah1")).value = test1;

    console.log("hargamenu-1")
    var test2;
    test2 = (<HTMLInputElement>document.getElementById("harga1")).value;
    (<HTMLInputElement>document.getElementById("invoice-harga1")).value = test2;

    var test;
    test = test1 * test2;
    (<HTMLInputElement>document.getElementById("invoice-total1")).value = test;
    total();
  }

function pindahjumlah2 () {
    console.log("pesanan-2")
    var test1;
    test1 = (<HTMLInputElement>document.getElementById("jumlah2")).value;
    (<HTMLInputElement>document.getElementById("invoice-jumlah2")).value = test1;

    console.log("hargamenu-2")
    var test2;
    test2 = (<HTMLInputElement>document.getElementById("harga2")).value;
    (<HTMLInputElement>document.getElementById("invoice-harga2")).value = test2;

    var test;
    test = test1 * test2;
    (<HTMLInputElement>document.getElementById("invoice-total2")).value = test;
    total();
  }

function pindahjumlah3 () {
    console.log("pesanan-3")
    var test1;
    test1 = (<HTMLInputElement>document.getElementById("jumlah3")).value;
    (<HTMLInputElement>document.getElementById("invoice-jumlah3")).value = test1;
    
    console.log("hargamenu-3")
    var test2;
    test2 = (<HTMLInputElement>document.getElementById("harga3")).value;
    (<HTMLInputElement>document.getElementById("invoice-harga3")).value = test2;
    
    var test;
    test = test1 * test2;
    (<HTMLInputElement>document.getElementById("invoice-total3")).value = test;
    total();
  }

function pindahjumlah4 () {
    console.log("pesanan-4")
    var test1;
    test1 = (<HTMLInputElement>document.getElementById("jumlah4")).value;
    (<HTMLInputElement>document.getElementById("invoice-jumlah4")).value = test1;

    console.log("hargamenu-4")
    var test2;
    test2 = (<HTMLInputElement>document.getElementById("harga4")).value;
    (<HTMLInputElement>document.getElementById("invoice-harga4")).value = test2;

    var test;
    test = test1 * test2;
    (<HTMLInputElement>document.getElementById("invoice-total4")).value = test;
    total();
  }

function pindahjumlah5 () {
    console.log("pesanan-5")
    var test1;
    test1 = (<HTMLInputElement>document.getElementById("jumlah5")).value;
    (<HTMLInputElement>document.getElementById("invoice-jumlah5")).value = test1;

    console.log("hargamenu-5")
    var test2;
    test2 = (<HTMLInputElement>document.getElementById("harga5")).value;
    (<HTMLInputElement>document.getElementById("invoice-harga5")).value = test2;

    var test;
    test = test1 * test2;
    (<HTMLInputElement>document.getElementById("invoice-total5")).value = test;
    total();
  }

function total (){
  var total1;
  total1 = parseInt((<HTMLInputElement>document.getElementById("invoice-total1")).value);
  var total2;
  total2 = parseInt((<HTMLInputElement>document.getElementById("invoice-total2")).value);
  var total3;
  total3 = parseInt((<HTMLInputElement>document.getElementById("invoice-total3")).value);
  var total4;
  total4 = parseInt((<HTMLInputElement>document.getElementById("invoice-total4")).value);
  var total5;
  total5 = parseInt((<HTMLInputElement>document.getElementById("invoice-total5")).value);

var totalInvoice;
totalInvoice = 0;

  if(!isNaN(total1)) {
    totalInvoice = totalInvoice + total1;
  } 
  if(!isNaN(total2)) {
    totalInvoice = totalInvoice + total2;
  } 
  if(!isNaN(total3)) {
    totalInvoice = totalInvoice + total3;
  } 
  if(!isNaN(total4)) {
    totalInvoice = totalInvoice + total4;
  } 
  if(!isNaN(total5)) {
    totalInvoice = totalInvoice + total5;
  } 
(<HTMLInputElement>document.getElementById("invoice-pembayaran")).value = totalInvoice;

}



