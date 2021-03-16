function criaCalculadora() {
  return {
    display: document.querySelector('.display'),


    // METODOS PARA BAIXO

    inicia() {
      this.clickBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;
          try {
            conta = eval(conta);

            if (!conta) {
              alert('Conta invalida!');
              return;
            }

            this.display.value = conta;

          } catch (error) {
            alert('Conta invalida!');
            return;
          }
    },

    clickBotoes(){
      document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerHTML);
        }
        if (el.classList.contains('btn-clear')) {
          this.display.value = '';
        }

        if (el.classList.contains('btn-del')) {
          this.display.value = this.display.value.slice(0, -1);
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();