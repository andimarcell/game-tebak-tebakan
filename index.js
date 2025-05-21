let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    attempts++;
    if(guess > targetNum) {
        guess = prompt('Terlalu tinggi! tebal lagi:');
    }else {
        guess = prompt('Terlalu rendah! tebak lagi:');
    }
}

alert(`Selamat Tebakan Anda benar! Dengan percobaan ${attempts} kali `);