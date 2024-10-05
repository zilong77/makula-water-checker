document.getElementById('input-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const commodity = document.getElementById('commodity').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    const doLevel = parseFloat(document.getElementById('doLevel').value);
    const phLevel = parseFloat(document.getElementById('phLevel').value);
    const turbidity = parseFloat(document.getElementById('turbidity').value);
    const ammonia = parseFloat(document.getElementById('ammonia').value);
    const nitrite = parseFloat(document.getElementById('nitrite').value);
    const nitrate = parseFloat(document.getElementById('nitrate').value);

    const results = analyzeWaterQuality(commodity, temperature, doLevel, phLevel, turbidity, ammonia, nitrite, nitrate);
    
    displayResults(results);
});

function analyzeWaterQuality(commodity, temperature, doLevel, phLevel, turbidity, ammonia, nitrite, nitrate) {
    const results = [];

    // Analisis untuk Ikan Lele
    if (commodity === 'lele') {
        results.push(`Untuk Ikan Lele (Clarias sp.):`);
        results.push(`- Suhu ideal: 25-30°C. Suhu Anda: ${temperature}°C.`);
        if (temperature < 25) {
            results.push(`  Suhu terlalu rendah. Tambah pemanas air.`);
        } else if (temperature > 30) {
            results.push(`  Suhu terlalu tinggi. Naikkan aerasi.`);
        }

        results.push(`- DO ideal: 3-5 mg/L. DO Anda: ${doLevel} mg/L.`);
        if (doLevel < 3) {
            results.push(`  DO terlalu rendah. Tambah aerasi.`);
        } else if (doLevel > 5) {
            results.push(`  DO terlalu tinggi. Cek fotosintesis.`);
        }

        results.push(`- pH ideal: 6.5-8. pH Anda: ${phLevel}.`);
        if (phLevel < 6.5) {
            results.push(`  pH terlalu rendah. Tambah kapur.`);
        } else if (phLevel > 8) {
            results.push(`  pH terlalu tinggi. Tambah asam organik.`);
        }

        results.push(`- Kekeruhan ideal: 30-60 NTU. Kekeruhan Anda: ${turbidity} NTU.`);
        if (turbidity < 30) {
            results.push(`  Kekeruhan rendah, tidak perlu tindakan.`);
        } else if (turbidity > 60) {
            results.push(`  Kekeruhan terlalu tinggi. Kurangi pakan atau perbaiki sistem filtrasi.`);
        }

        results.push(`- Amoniak ideal: <0.02 mg/L. Amoniak Anda: ${ammonia} mg/L.`);
        if (ammonia > 0.02) {
            results.push(`  Amoniak terlalu tinggi. Ganti sebagian air atau tambahkan zeolit.`);
        }

        results.push(`- Nitrit ideal: <0.1 mg/L. Nitrit Anda: ${nitrite} mg/L.`);
        if (nitrite > 0.1) {
            results.push(`  Nitrit terlalu tinggi. Ganti air atau tambah aerasi.`);
        }

        results.push(`- Nitrat ideal: <50 mg/L. Nitrat Anda: ${nitrate} mg/L.`);
        if (nitrate > 50) {
            results.push(`  Nitrat terlalu tinggi. Tambah tanaman air atau lakukan penggantian air berkala.`);
        }
    }

    // Analisis untuk Ikan Nila
    else if (commodity === 'nila') {
        results.push(`Untuk Ikan Nila (Oreochromis niloticus):`);
        results.push(`- Suhu ideal: 26-30°C. Suhu Anda: ${temperature}°C.`);
        if (temperature < 26) {
            results.push(`  Suhu terlalu rendah. Gunakan pemanas air.`);
        } else if (temperature > 30) {
            results.push(`  Suhu terlalu tinggi. Berikan naungan atau aerasi.`);
        }

        results.push(`- DO ideal: 5-6 mg/L. DO Anda: ${doLevel} mg/L.`);
        if (doLevel < 5) {
            results.push(`  DO terlalu rendah. Tambah aerasi.`);
        } else if (doLevel > 6) {
            results.push(`  DO terlalu tinggi. Kurangi tanaman air.`);
        }

        results.push(`- pH ideal: 6-8. pH Anda: ${phLevel}.`);
        if (phLevel < 6) {
            results.push(`  pH terlalu rendah. Tambah kapur.`);
        } else if (phLevel > 8) {
            results.push(`  pH terlalu tinggi. Tambah asam organik.`);
        }

        results.push(`- Kekeruhan ideal: 20-50 NTU. Kekeruhan Anda: ${turbidity} NTU.`);
        if (turbidity < 20) {
            results.push(`  Kekeruhan rendah, tidak perlu tindakan.`);
        } else if (turbidity > 50) {
            results.push(`  Kekeruhan terlalu tinggi. Kurangi pakan atau bersihkan sistem filtrasi.`);
        }

        results.push(`- Amoniak ideal: <0.02 mg/L. Amoniak Anda: ${ammonia} mg/L.`);
        if (ammonia > 0.02) {
            results.push(`  Amoniak terlalu tinggi. Ganti sebagian air atau gunakan zeolit.`);
        }

        results.push(`- Nitrit ideal: <0.1 mg/L. Nitrit Anda: ${nitrite} mg/L.`);
        if (nitrite > 0.1) {
            results.push(`  Nitrit terlalu tinggi. Tambah aerasi.`);
        }

        results.push(`- Nitrat ideal: <50 mg/L. Nitrat Anda: ${nitrate} mg/L.`);
        if (nitrate > 50) {
            results.push(`  Nitrat terlalu tinggi. Tambah tanaman air atau lakukan penggantian air berkala.`);
        }
    }

    // Analisis untuk Ikan Koi
    else if (commodity === 'koi') {
        results.push(`Untuk Ikan Koi (Cyprinus carpio):`);
        results.push(`- Suhu ideal: 20-28°C. Suhu Anda: ${temperature}°C.`);
        if (temperature < 20) {
            results.push(`  Suhu terlalu rendah. Tambah pemanas.`);
        } else if (temperature > 28) {
            results.push(`  Suhu terlalu tinggi. Tambah aerasi.`);
        }

        results.push(`- DO ideal: 6-8 mg/L. DO Anda: ${doLevel} mg/L.`);
        if (doLevel < 6) {
            results.push(`  DO terlalu rendah. Tambah aerasi.`);
        } else if (doLevel > 8) {
            results.push(`  DO terlalu tinggi. Kurangi aktivitas fotosintesis.`);
        }

        results.push(`- pH ideal: 6.5-8. pH Anda: ${phLevel}.`);
        if (phLevel < 6.5) {
            results.push(`  pH terlalu rendah. Tambah kapur.`);
        } else if (phLevel > 8) {
            results.push(`  pH terlalu tinggi. Tambah asam organik.`);
        }

        results.push(`- Kekeruhan ideal: 10-30 NTU. Kekeruhan Anda: ${turbidity} NTU.`);
        if (turbidity < 10) {
            results.push(`  Kekeruhan rendah, tidak perlu tindakan.`);
        } else if (turbidity > 30) {
            results.push(`  Kekeruhan terlalu tinggi. Kurangi pakan dan bersihkan sistem filtrasi.`);
        }

        results.push(`- Amoniak ideal: <0.02 mg/L. Amoniak Anda: ${ammonia} mg/L.`);
        if (ammonia > 0.02) {
            results.push(`  Amoniak terlalu tinggi. Tambah zeolit atau ganti sebagian air.`);
        }

        results.push(`- Nitrit ideal: <0.1 mg/L. Nitrit Anda: ${nitrite} mg/L.`);
        if (nitrite > 0.1) {
            results.push(`  Nitrit terlalu tinggi. Tambah aerasi atau ganti air.`);
        }

        results.push(`- Nitrat ideal: <50 mg/L. Nitrat Anda: ${nitrate} mg/L.`);
        if (nitrate > 50) {
            results.push(`  Nitrat terlalu tinggi. Ganti air rutin atau menanam tanaman air.`);
        }
    }

    return results;
}

function displayResults(results) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}
