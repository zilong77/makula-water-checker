function periksaKualitasAir() {
    const commodity = document.getElementById("commodity").value;
    const doValue = parseFloat(document.getElementById("do").value);
    const tempValue = parseFloat(document.getElementById("temp").value);
    const phValue = parseFloat(document.getElementById("ph").value);
    const turbidityValue = parseFloat(document.getElementById("turbidity").value);
    const ammoniaValue = parseFloat(document.getElementById("ammonia").value);
    const nitriteValue = parseFloat(document.getElementById("nitrite").value);
    const nitrateValue = parseFloat(document.getElementById("nitrate").value);

    let hasil = '';
    let kondisi = true;

    if (commodity === 'lele') {
        hasil += `Komoditas: Ikan Lele (Clarias sp.)<br>`;
        if (tempValue < 20 || tempValue > 35) {
            hasil += `Suhu tidak sesuai. Suhu ideal adalah 25-30°C. <br>`;
            kondisi = false;
        }
        if (doValue < 2 || doValue > 7) {
            hasil += `DO tidak sesuai. DO ideal adalah 3-5 mg/L. <br>`;
            kondisi = false;
        }
        if (phValue < 5.5 || phValue > 9) {
            hasil += `pH tidak sesuai. pH ideal adalah 6.5-8. <br>`;
            kondisi = false;
        }
        if (turbidityValue < 20 || turbidityValue > 100) {
            hasil += `Kekeruhan tidak sesuai. Kekeruhan ideal adalah 30-60 NTU. <br>`;
            kondisi = false;
        }
        if (ammoniaValue > 0.05) {
            hasil += `Amoniak terlalu tinggi. Nilai ideal <0.02 mg/L. <br>`;
            kondisi = false;
        }
        if (nitriteValue > 0.5) {
            hasil += `Nitrit terlalu tinggi. Nilai ideal <0.1 mg/L. <br>`;
            kondisi = false;
        }
        if (nitrateValue > 100) {
            hasil += `Nitrat terlalu tinggi. Nilai ideal <50 mg/L. <br>`;
            kondisi = false;
        }
    } else if (commodity === 'nila') {
        hasil += `Komoditas: Ikan Nila (Oreochromis niloticus)<br>`;
        if (tempValue < 22 || tempValue > 32) {
            hasil += `Suhu tidak sesuai. Suhu ideal adalah 26-30°C. <br>`;
            kondisi = false;
        }
        if (doValue < 3 || doValue > 8) {
            hasil += `DO tidak sesuai. DO ideal adalah 5-6 mg/L. <br>`;
            kondisi = false;
        }
        if (phValue < 5.5 || phValue > 9) {
            hasil += `pH tidak sesuai. pH ideal adalah 6-8.1. <br>`;
            kondisi = false;
        }
        if (turbidityValue < 10 || turbidityValue > 80) {
            hasil += `Kekeruhan tidak sesuai. Kekeruhan ideal adalah 20-50 NTU. <br>`;
            kondisi = false;
        }
        if (ammoniaValue > 0.05) {
            hasil += `Amoniak terlalu tinggi. Nilai ideal <0.02 mg/L. <br>`;
            kondisi = false;
        }
        if (nitriteValue > 0.5) {
            hasil += `Nitrit terlalu tinggi. Nilai ideal <0.1 mg/L. <br>`;
            kondisi = false;
        }
        if (nitrateValue > 100) {
            hasil += `Nitrat terlalu tinggi. Nilai ideal <50 mg/L. <br>`;
            kondisi = false;
        }
    } else if (commodity === 'koi') {
        hasil += `Komoditas: Ikan Koi (Cyprinus carpio)<br>`;
        if (tempValue < 15 || tempValue > 30) {
            hasil += `Suhu tidak sesuai. Suhu ideal adalah 20-28°C. <br>`;
            kondisi = false;
        }
        if (doValue < 5 || doValue > 9) {
            hasil += `DO tidak sesuai. DO ideal adalah 6-8 mg/L. <br>`;
            kondisi = false;
        }
        if (phValue < 6 || phValue > 9) {
            hasil += `pH tidak sesuai. pH ideal adalah 6.5-8. <br>`;
            kondisi = false;
        }
        if (turbidityValue < 5 || turbidityValue > 50) {
            hasil += `Kekeruhan tidak sesuai. Kekeruhan ideal adalah 10-30 NTU. <br>`;
            kondisi = false;
        }
        if (ammoniaValue > 0.05) {
            hasil += `Amoniak terlalu tinggi. Nilai ideal <0.02 mg/L. <br>`;
            kondisi = false;
        }
        if (nitriteValue > 0.5) {
            hasil += `Nitrit terlalu tinggi. Nilai ideal <0.1 mg/L. <br>`;
            kondisi = false;
        }
        if (nitrateValue > 100) {
            hasil += `Nitrat terlalu tinggi. Nilai ideal <50 mg/L. <br>`;
            kondisi = false;
        }
    }

    if (kondisi) {
        hasil += "Semua parameter sesuai dengan komoditas yang dipilih.";
    } else {
        hasil += "Periksa parameter yang tidak sesuai dan lakukan tindakan yang diperlukan.";
    }

    document.getElementById("result").innerHTML = hasil;
}
