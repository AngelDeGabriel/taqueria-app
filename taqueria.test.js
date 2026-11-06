// taqueria.test.js
const calcularTotal = require('./taqueria');

test('Debe calcular correctamente el total a pagar por 2 tacos', () => {
    // Si el taco cuesta 15, 2 tacos son 30. 
    // TAREA PARA EL COMPAÑERO: Si cambiaste el precio a 18, actualiza el resultado esperado a 36.
    expect(calcularTotal(2)).toBe(30); 
});
