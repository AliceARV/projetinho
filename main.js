gato = 0
cachorro = 0
vaca = 0
ovelha = 0

function start() {
    navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia({ audio: true });
    classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5WG4nKZuC/', modelReady);
}
function modelReady() {
    classfier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    }
    document.getElementById("result_label").innerHTML = 'Posso ouvir - ' + results[0].label;
    document.getElementById("result_confidence").innerHTMLA = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + '%';
    document.getElementById("results_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    img = document.getElementById('gato');
    img1 = document.getElementById('cachorro');
    img2 = document.getElementById('cabra');
    img3 = document.getElementById('vaca');

    if (results[0].label == "cachorro") {
        img.src = 'tenor.gif';
        img.src = 'd466515a3b680d304bb078d9062a4513.jpg';
        img.src = 'desenhos-animados-engraçados-do-gato-39175432.webp';
        img.src = 'OIP (1).jpeg';

    }
    else if (results[0].label == "gato") {
        img.src = 'tenor (1).gif';
        img.src = 'd466515a3b680d304bb078d9062a4513.jpg';
        img.src = 'OIP (1).jpeg';
        img.src = 'OIP.jpeg';
    }
    else if (results[0].label == "vaca") {
        img.src = 'R.gif';
        img.src = 'desenhos-animados-engraçados-do-gato-39175432.webp';
        img.src = 'OIP (1).jpeg';
        img.src = 'OIP.jpeg';
    }
    else {
        img.src = 'cabra.gif';
        img.src = 'desenhos-animados-engraçados-do-gato-39175432.webp';
        img.src = 'd466515a3b680d304bb078d9062a4513.jpg';
        img.src = 'OIP.jpeg';
    }  




