function Calculadora() {
  // PEGA O DISPLAY DO HTML
  this.display = document.querySelector('.display');

  // CAPTURA QUAL BOTAO FOI CLICADO
  this.capturaClick = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.apagaDysplay();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.calculaValor();
    })
  }

  // REALIZA A CONTA
  this.calculaValor = () => {
    const conta = eval(this.display.value);
    try {
      if (!conta) {
        alert('Conta invalida!');
        return;
      }
      this.display.value = conta;
    } catch (error) {
      alert('Conta invalida!');
      return;
    }
  }

  // APAGA O ULTIMO DIGITADO
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  // LIMPA O DISPLAY DA CALCULADORA
  this.apagaDysplay = () => this.display.value = '';

  // ADD O NUMERO DO DISPLAY E EVENTO DE ENTER
  this.addNumDisplay = el => {
    this.display.value += el.innerHTML;
    this.display.focus();
  }
  // INICIA A CALCULADORA
  this.inicia = () => {
    this.capturaClick();
    this.capturaEnter();
  }

  // BOTAO ENTER CONTA
  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode !== 13) return;
      this.calculaValor();
    });
  }

}

// INICIA A CALCULADORA
const calculadora = new Calculadora();
calculadora.inicia();