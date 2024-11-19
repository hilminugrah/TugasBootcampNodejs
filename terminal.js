const readline = require("readline");

// Buat interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Fungsi untuk menampilkan pertanyaan dan mendapatkan jawaban
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Fungsi utama untuk mengajukan pertanyaan dan menampilkan jawabannya
async function main() {
    try {
        console.log("===== Formulir Pengguna =====");

        const name = await askQuestion("Siapa nama Anda? ");
        const phone = await askQuestion("Nomor HP Anda? ");
        const email = await askQuestion("Email Anda? ");

        console.log("\n===== Informasi yang Dimasukkan =====");
        console.log(`Nama       : ${name}`);
        console.log(`Nomor HP   : ${phone}`);
        console.log(`Email      : ${email}`);
        console.log("=====================================");

        rl.close();
    } catch (err) {
        console.error("Terjadi kesalahan:", err);
        rl.close();
    }
}

// Jalankan fungsi utama
main();
