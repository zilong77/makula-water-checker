function checkQuality() {
    const commodity = document.getElementById("commodity").value;
    const doValue = parseFloat(document.getElementById("do").value);
    const temperature = parseFloat(document.getElementById("temperature").value);
    const salinity = parseFloat(document.getElementById("salinity").value);
    const ph = parseFloat(document.getElementById("ph").value);
  
    let result = '';
  
    if (commodity === "tilapia") {
      if (doValue >= 5 && doValue <= 6 && temperature >= 26 && temperature <= 29 && salinity >= 1 && salinity <= 2 && ph >= 6 && ph <= 7) {
        result = "Kualitas air sesuai untuk Ikan Nila";
      } else {
        result = "Kualitas air tidak sesuai untuk Ikan Nila";
      }
    } else if (commodity === "shrimp") {
      // Masukkan parameter ideal untuk Udang
    } else if (commodity === "catfish") {
      // Masukkan parameter ideal untuk Ikan Lele
    }
  
    document.getElementById("result").innerHTML = result;
  }
  
