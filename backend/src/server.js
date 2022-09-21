const app = require('./app');
require('dotenv').config();

PORT = process.env.BACK_PORT || 3001;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
