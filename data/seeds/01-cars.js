// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        {
            vin: '11111111111111111',
            make: 'Ford',
            model: 'Explorer',
            mileage: 105,
            title: 'Clean',
            transmission: 'Automatic'
        },
        {
            vin: '11111111111111112',
            make: 'Ford',
            model: 'Taurus',
            mileage: 303,
            title: 'Clean',
            transmission: 'Automatic'
        },
        {
            vin: '11111111111111113',
            make: 'Ford',
            model: 'Fusion',
            mileage: 107,
            title: 'Clean',
            transmission: 'Automatic'
        }
    ])
}