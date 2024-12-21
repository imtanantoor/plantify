import "dotenv/config";
import app from "./app";
import constants from "./utils/constants";

app.listen(constants.PORT, () => {
 console.log(`SERVER LISTENING TO ${constants.PORT}`);
});
