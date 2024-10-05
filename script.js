function analyzeWaterQuality() {
    const commodity = document.getElementById("commodity").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    const doLevel = parseFloat(document.getElementById("do").value);
    const phLevel = parseFloat(document.getElementById("ph").value);
    const turbidity = parseFloat(document.getElementById("turbidity").value);
    const ammonia = parseFloat(document.getElementById("ammonia").value);
    const nitrite = parseFloat(document.getElementById("nitrite").value);
    const nitrate = parseFloat(document.getElementById("nitrate").value);

    let result = "";
    let suggestion = "";

    // Kondisi dan rentang parameter ideal untuk setiap komoditas
    let idealParams = {
        'lele': {
            temperature: { ideal: [25, 30], min: 20, max: 35 },
            doLevel: { ideal: [3, 5], min: 2, max: 7 },
            phLevel: { ideal: [6.5, 8], min: 5.5, max: 9 },
            turbidity: { ideal: [30, 60], min: 20, max: 100 },
            ammonia: { ideal: [0, 0.02], max: 0.05 },
            nitrite: { ideal: [0, 0.1], max: 0.5 },
            nitrate: { ideal: [0, 50], max: 100 }
        },
        'nila': {
            temperature: { ideal: [26, 30], min: 22, max: 32 },
            doLevel: { ideal: [5, 6], min: 3, max: 8 },
            phLevel: { ideal: [6, 8.1], min: 5.5, max: 9 },
            turbidity: { ideal: [20, 50], min: 10, max: 80 },
            ammonia: { ideal: [0, 0.02], max: 0.05 },
            nitrite: { ideal: [0, 0.1], max: 0.5 },
            nitrate: { ideal: [0, 50], max: 100 }
        },
        'koi': {
            temperature: { ideal: [20, 28], min: 15, max: 30 },
            doLevel: { ideal: [6, 8], min: 5, max: 9 },
            phLevel: { ideal: [6.5, 8], min: 6, max: 9 },
            turbidity: { ideal: [10, 30], min: 5, max: 50 },
            ammonia: { ideal: [0, 0.02], max: 0.05 },
            nitrite: { ideal: [0, 0.1], max: 0.5 },
            nitrate: { ideal: [0, 50], max: 100 }
        }
    };

    let selectedParams = idealParams[commodity];

    // Fungsi untuk cek dan berikan saran berdasarkan parameter
    function checkParameter(value, parameterName, limits) {
        if (value < limits.min) {
            result += `${parameterName} terlalu rendah.\n`;
            suggestion += `Naikkan ${parameterName} ke nilai ideal ${limits.ideal[0]}-${limits.ideal[1]}.\n`;
        } else if (value > limits.max) {
            result += `${parameterName} terlalu tinggi.\n`;
            suggestion += `Turunkan ${parameterName} ke nilai ideal ${limits.ideal[0]}-${limits.ideal[1]}.\n`;
        } else if (value < limits.ideal[0] || value > limits.ideal[1]) {
            result += `${parameterName} mendekati batas tidak ideal.\n`;
            suggestion += `Pertahankan ${parameterName} dalam rentang ${limits.ideal[0]}-${limits.ideal[1]}.\n`;
        }
    }

    // Analisis setiap parameter
    checkParameter(temperature, "Suhu", selectedParams.temperature);
    checkParameter(doLevel, "DO (Oksigen Terlarut)", selectedParams.doLevel);
    checkParameter(phLevel, "pH", selectedParams.phLevel);
    checkParameter(turbidity, "Kekeruhan Air", selectedParams.turbidity);
    checkParameter(ammonia, "Amoniak", selectedParams.ammonia);
    checkParameter(nitrite, "Nitrit", selectedParams.nitrite);
    checkParameter(nitrate, "Nitrat", selectedParams.nitrate);

    // Tampilkan hasil
    document.getElementById("result").innerText = result ? result : "Semua parameter sesuai.";
    document.getElementById("suggestion").innerText = suggestion ? suggestion : "Tidak ada tindakan yang diperlukan.";
}
