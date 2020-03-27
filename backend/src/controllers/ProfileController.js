const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incientes = await connection('incidents')
        .where('ong_id', ong_id)
        Selection('*');

        return response.json(incidents);
    }
}