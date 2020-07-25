const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        mongoose.connect(
            process.env.DB_CNN, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        );

        console.log('Db online');
        // console.log(process.env.DB_CNN);

    } catch (error) {
        console.error(error);
        throw new Error("Error al momento de establecer la conexión a la BD.");
    }
};

module.exports = {
    dbConnection
}