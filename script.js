function analyze() {
    const komoditas = document.getElementById("komoditas").value;
    const suhu = parseFloat(document.getElementById("suhu").value);
    const doValue = parseFloat(document.getElementById("do").value);
    const ph = parseFloat(document.getElementById("ph").value);
    const kekeruhan = parseFloat(document.getElementById("kekeruhan").value);
    const amoniak = parseFloat(document.getElementById("amoniak").value);
    const nitrit = parseFloat(document.getElementById("nitrit").value);
    const nitrat = parseFloat(document.getElementById("nitrat").value);

    let resultHtml = "";

    // Rules for each commodity
    if (komoditas === "lele") {
        resultHtml += "<div class='result-card'><h3>Suhu</h3>";
        resultHtml += "<p>Ideal: 25-30°C</p>";
        resultHtml += `<p>Suhu saat ini: ${suhu}°C</p>`;
        if (suhu < 20) {
            resultHtml += "<strong>Saran: Tambah pemanas air karena suhu terlalu rendah.</strong>";
        } else if (suhu > 35) {
            resultHtml += "<strong>Saran: Tambahkan aerasi karena suhu terlalu tinggi.</strong>";
        } else {
            resultHtml += "<strong>Suhu berada dalam kisaran ideal.</strong>";
        }
        resultHtml += "</div>";

        // DO
        resultHtml += "<div class='result-card'><h3>DO (Oksigen Terlarut)</h3>";
        resultHtml += "<p>Ideal: 3-5 mg/L</p>";
        resultHtml += `<p>DO saat ini: ${doValue} mg/L</p>`;
        if (doValue < 2) {
            resultHtml += "<strong>Saran: Tambah aerasi karena DO terlalu rendah.</strong>";
        } else if (doValue > 7) {
            resultHtml += "<strong>Saran: Cek fotosintesis karena DO terlalu tinggi.</strong>";
        } else {
            resultHtml += "<strong>DO berada dalam kisaran ideal.</strong>";
        }
        resultHtml += "</div>";

        // pH
        resultHtml += "<div class='result-card'><h3>pH</h3>";
        resultHtml += "<p>Ideal: 6.5-8</p>";
        resultHtml += `<p>pH saat ini: ${ph}</p>`;
        if (ph < 5.5) {
            resultHtml += "<strong>Saran: Tambah kapur karena pH terlalu rendah.</strong>";
        } else if (ph > 9) {
            resultHtml += "<strong>Saran: Tambah asam organik karena pH terlalu tinggi.</strong>";
        } else {
            resultHtml += "<strong>pH berada dalam kisaran ideal.</strong>";
        }
        resultHtml += "</div>";

        // ... (analisis lainnya untuk kekeruhan, amoniak, nitrit, nitrat)
    }

    // Tampilkan hasil
    document.getElementById("result").innerHTML = resultHtml;
}
