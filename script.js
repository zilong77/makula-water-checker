function analisisLele(suhu, DO, pH, kekeruhan, amoniak, nitrit, nitrat) {
    let hasil = "Untuk Ikan Lele (Clarias sp.), parameter suhu ideal berada pada kisaran 25-30°C, dengan batas bawah 20°C dan batas atas 35°C.";
    
    if (suhu < 20) {
        hasil += " Suhu terlalu rendah, tambahkan pemanas air.";
    } else if (suhu > 35) {
        hasil += " Suhu terlalu tinggi, tingkatkan aerasi.";
    } else {
        hasil += " Suhu berada dalam batas yang ideal.";
    }

    hasil += " Kadar DO (oksigen terlarut) ideal berkisar 3-5 mg/L.";
    
    if (DO < 3) {
        hasil += " DO terlalu rendah, tambahkan aerasi.";
    } else if (DO > 5) {
        hasil += " DO terlalu tinggi, cek fotosintesis yang berlebihan.";
    } else {
        hasil += " DO berada dalam batas yang ideal.";
    }

    hasil += " pH ideal untuk ikan lele adalah 6.5-8.";
    
    if (pH < 6.5) {
        hasil += " pH terlalu rendah, tambahkan kapur.";
    } else if (pH > 8) {
        hasil += " pH terlalu tinggi, tambahkan asam organik.";
    } else {
        hasil += " pH berada dalam batas yang ideal.";
    }

    hasil += " Kekeruhan air yang ideal untuk ikan lele adalah 30-60 NTU.";
    
    if (kekeruhan < 30) {
        hasil += " Kekeruhan terlalu rendah.";
    } else if (kekeruhan > 60) {
        hasil += " Kekeruhan terlalu tinggi, kurangi pakan atau perbaiki sistem filtrasi.";
    } else {
        hasil += " Kekeruhan berada dalam batas yang ideal.";
    }

    hasil += " Amoniak ideal harus di bawah 0.02 mg/L.";
    
    if (amoniak > 0.02) {
        hasil += " Amoniak terlalu tinggi, ganti sebagian air atau tambahkan zeolit.";
    } else {
        hasil += " Amoniak berada dalam batas yang ideal.";
    }

    hasil += " Nitrit harus di bawah 0.1 mg/L.";
    
    if (nitrit > 0.1) {
        hasil += " Nitrit terlalu tinggi, tambahkan aerasi atau lakukan penggantian air.";
    } else {
        hasil += " Nitrit berada dalam batas yang ideal.";
    }

    hasil += " Nitrat idealnya di bawah 50 mg/L.";
    
    if (nitrat > 50) {
        hasil += " Nitrat terlalu tinggi, lakukan penggantian air berkala atau tambahkan tanaman air.";
    } else {
        hasil += " Nitrat berada dalam batas yang ideal.";
    }

    return hasil;
}

function analisisNila(suhu, DO, pH, kekeruhan, amoniak, nitrit, nitrat) {
    // Logika untuk ikan nila berdasarkan parameter idealnya
    // Anda bisa menambahkan logika serupa seperti analisisLele
}

function analisisKoi(suhu, DO, pH, kekeruhan, amoniak, nitrit, nitrat) {
    // Logika untuk ikan koi berdasarkan parameter idealnya
    // Anda bisa menambahkan logika serupa seperti analisisLele
}

function analisis() {
    let suhu = parseFloat(document.getElementById("suhu").value);
    let DO = parseFloat(document.getElementById("DO").value);
    let pH = parseFloat(document.getElementById("pH").value);
    let kekeruhan = parseFloat(document.getElementById("kekeruhan").value);
    let amoniak = parseFloat(document.getElementById("amoniak").value);
    let nitrit = parseFloat(document.getElementById("nitrit").value);
    let nitrat = parseFloat(document.getElementById("nitrat").value);
    let commodity = document.getElementById("commodity").value;

    let hasil = "";

    if (commodity === "lele") {
        hasil = analisisLele(suhu, DO, pH, kekeruhan, amoniak, nitrit, nitrat);
    } else if (commodity === "nila") {
        hasil = analisisNila(suhu, DO, pH, kekeruhan, amoniak, nitrit, nitrat);
    } else if (commodity === "koi") {
        hasil = analisisKoi(suhu, DO, pH, kekeruhan, amoniak, nitrit, nitrat);
    }

    document.getElementById("hasilAnalisis").innerHTML = hasil;
}
