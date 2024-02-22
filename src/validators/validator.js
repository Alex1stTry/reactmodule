import Joi from "joi";

const validator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': 'from 1 to 20 characters'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.max': 'maximum 1000000',
        'number.min': 'minimum 0'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min':'minimum - 1990',
        'number.max':' maximum current year'
    })
})
export {validator}