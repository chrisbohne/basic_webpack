(() => {
  'use strict';
  const e = (...e) => e.every((e) => 'number' == typeof e && !isNaN(e));
  var t, r;
  (t = new (class {
    constructor() {
      this.errorBox = document.getElementById('error');
    }
    handleAdditionError(t, r) {
      const n = t.reduce(
        (t, n, s) => (e(r[s]) ? t + '' : t + `${n} is not a number. `),
        'Please enter two valid numbers! '
      );
      this.errorBox.classList.remove('invisible'),
        (this.errorBox.innerText = n);
    }
    hideErrors() {
      this.errorBox.classList.add('invisible');
    }
  })()),
    (r = new (class {
      constructor() {
        (this.numberOneInput = document.getElementById('numberOne')),
          (this.numberTwoInput = document.getElementById('numberTwo')),
          (this.addValuesButton = document.getElementById('addValues')),
          (this.resultDiv = document.getElementById('result'));
      }
      getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
      }
      setResult(e) {
        this.resultDiv.innerText = e;
      }
      onClick(e) {
        this.addValuesButton.addEventListener('click', e);
      }
    })()),
    t.hideErrors(),
    r.onClick(() => {
      t.hideErrors();
      const n = r.getInputs(),
        s = ((...e) => e.map((e) => parseInt(e)))(...n);
      if (e(...s)) {
        const [e, t] = s;
        r.setResult(e + t);
      } else r.setResult(''), t.handleAdditionError(n, s);
    });
})();
