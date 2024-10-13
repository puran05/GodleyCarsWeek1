const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://admin:mYHLoGeDmM6CLrZr@backenddb.xcjrfhu.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("Node-API");
    const movies = database.collection("products");

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: "juice" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } catch (error) {
    console.error("Error occurred while querying the database:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
