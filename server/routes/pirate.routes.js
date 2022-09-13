const PirateController = require("../controller/pirate.controller")

const routes = (app)=> {

app.post("/api/pirates",PirateController.create);

//Read ALl
app.get('/api/pirates',PirateController.getAll);
//Read One
app.get('/api/pirates/:id',PirateController.getOne);
//Update
app.put('/api/pirates/:id',PirateController.update);
//Delete
app.delete('/api/pirates/:id',PirateController.delete);
}

module.exports = routes