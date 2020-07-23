const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        mongoose.connect(
            'mongodb+srv://mean_user:zbPcvawFG1LeTnsC@cluster0.atlk9.mongodb.net/hospitaldb', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        );

        console.log('Db online');

    } catch (error) {
        console.error(error);
        throw new Error("Error al momento de establecer la conexión a la BD.");
    }
};

module.exports = {
    dbConnection
}