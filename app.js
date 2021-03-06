const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const { logger } = require('./config/logger.js');
const { db } = require('./models/index.js');
const router = require('./routes/gradeRouter.js');

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Conectado ao banco de dados');
  } catch (error) {
    logger.error(`Erro ao conectar no banco de dados! ${error}`);

    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(router);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.listen(process.env.PORT, () => {
  logger.info(`Servidor em execucao na porta ${process.env.PORT}`);
});
