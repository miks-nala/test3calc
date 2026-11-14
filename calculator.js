    function addValue(value) {
      // Appends the clicked button's value to the input field
      document.getElementById('display').value += value;
    }

    function addDec() {
        var display = document.getElementById('display');
        if (!display.value.includes('.')) {
          display.value += '.';
        }
    }

    function deleteValue() {
      // Deletes the last character from the input field
      var currentValue = document.getElementById('display').value;
      document.getElementById('display').value = currentValue.slice(0, -1);
    }

    function clearAllValue() {
      document.getElementById('display').value = ' ';
    } 

    function lastIsOperator() {
      var value = document.getElementById('display').value.trim();
      return value !== '' && '+-*/'.includes(value.slice(-1));
    }

    function add() {
      var display = document.getElementById('display');
      if (display.value.trim() === ' ' || lastIsOperator()) return;
      display.value += '+';
    }

    function sub(){
      var display = document.getElementById('display');
      if (display.value.trim() === ' ' || lastIsOperator()) return;
      display.value += '-';
    }

    function mul(){
      var display = document.getElementById('display');
      if (display.value.trim() === ' ' || lastIsOperator()) return;
      display.value += '*';
    }

    function div(){
      var display = document.getElementById('display');
      if (display.value.trim() === ' ' || lastIsOperator()) return;
      display.value += '/'; 
    }


    function equal() {
      var display = document.getElementById('display');
      var expression = display.value.trim();

      // Nothing to calculate
      if (expression === '') return;

      // Don't calculate if it ends with an operator (e.g. "5+")
      if (lastIsOperator()) return;

      // Only allow digits, operators, dots, and spaces
      if (!/^[0-9+\-*/. ]+$/.test(expression)) return;

      try {
        var result = Function('"use strict"; return (' + expression + ')')();
        display.value = Number.isFinite(result) ? String(result) : 'Error';
      } catch (e) {
        display.value = 'Error';
      }
    }
