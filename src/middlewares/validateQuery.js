import response from '../utils/response.js';

const validateQuery = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.query, {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true
    });

    if (error) {
        return response(res, 400, error.details.map(d => d.message).join(', '), null);
    }

    req.validated = value;
    return next();
};

export default validateQuery;