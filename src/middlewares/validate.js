import response from '../utils/response.js';

const validate = (schema) => (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return response(res, 400, 'Request body tidak boleh kosong', null);
    }

    const { error, value } = schema.validate(req.body, {
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

export default validate;

