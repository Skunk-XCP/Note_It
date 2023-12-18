export class ValidatorService {
    static min(value, min) {
        if (value.length < min) {
            return `Veuillez entrer au moins ${min} caractères`
        }
    }

    static max(value, max) {
        if (value.length > max) {
            return `Veuillez entrer au plus ${max} caractères`
        }
    }
}