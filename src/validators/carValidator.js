import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': 'from 1 to 20 characters'
    }),
    price: Joi.number().min(0).max(1_000_000).required().messages({
        'number.min': 'min 0',
        'number.max': '1000000'
    }),
    year: Joi.number().min(1991).max(new Date().getFullYear()).required().messages({
        'number.min': 'min year - 1991',
        'number.max': 'max year - this year'
    })
})
export {
    carValidator
}