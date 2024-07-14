function calcular() {
    var txtvel = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtvel.value);

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;

    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>Multado</strong> por excesso de velocidade</p>`;
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}
