export function aprobarPrestamo(tipoSolicitante, tieneDeudas) {
    if (tipoSolicitante === 'estudiante') {
        return false; // No se aprueba préstamo para estudiantes
    } else if (tipoSolicitante === 'empleado') {
        return true; // Se aprueba préstamo para empleados aunque tengan deudas
    } else if (tipoSolicitante === 'retirado') {
        return !tieneDeudas; // Se aprueba préstamo solo si no tiene deudas
    } else {
        throw new Error('Tipo de solicitante no válido');
    }
}
