const getUsuarios = (req, resp) => {

    resp.status(200).json({
        ok: true,
        usuarios: [{
            id: 123,
            nombre: 'Fernando'
        }]
    });
};

const postUsuario = (req, resp) => {
    resp.json({
        ok: true,
        msg: 'Creando usuario...'
    });
};

module.exports = { getUsuarios, postUsuario }