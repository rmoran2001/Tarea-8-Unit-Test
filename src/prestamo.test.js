import { aprobarPrestamo } from './prestamo';

describe('Función aprobarPrestamo', () => {
    test('Debería NO aprobar préstamo para estudiantes', () => {
        expect(aprobarPrestamo('estudiante', false)).toBe(false);
        expect(aprobarPrestamo('estudiante', true)).toBe(false);
    });

    test('Debería aprobar préstamo para empleados', () => {
        expect(aprobarPrestamo('empleado', false)).toBe(true);
        expect(aprobarPrestamo('empleado', true)).toBe(true);
    });

    test('Debería aprobar préstamo para retirados sin deudas', () => {
        expect(aprobarPrestamo('retirado', false)).toBe(true);
    });

    test('Debería NO aprobar préstamo para retirados con deudas', () => {
        expect(aprobarPrestamo('retirado', true)).toBe(false);
    });

    test('Debería lanzar error para tipo de solicitante no válido', () => {
        expect(() => aprobarPrestamo('desempleado', false)).toThrow('Tipo de solicitante no válido');
    });
});
