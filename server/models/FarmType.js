const { Schema, model } = require('mongoose')

const farmTypeSchema = new Schema(
    {
        type: [{
            type: String,
            required: true,
            enum: [
                'CSA',
                'Homestead',
                'Farmers Market',
                'Food Hub',
                'On-Farm Market',
                'Agritourism'
            ]
        }]
    }
)

const FarmType = model('Farm', farmSchema)

module.exports = FarmType