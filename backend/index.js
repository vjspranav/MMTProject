const mongoose = require('mongoose');
let conn = null;

const uri = 'mongodb+srv://root:9S44TKWwa55VwAXK@mmt0.xkd4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    if (conn == null) {
        conn = mongoose.createConnection(uri, {
          serverSelectionTimeoutMS: 5000
        });
        await conn.asPromise();
        conn.model('Data', new mongoose.Schema({ profession: String, age: Number, gender: Number, data: Array }));
    }
    
    const dataModel = conn.model('Data');
    const body = JSON.parse(event['body']);
    let profession = body.profession;
    let age = body.age;
    let gender = body.gender;
    let data = body.data;
/*    if(!profession || !age || !gender){
        return {
            statusCode: 400,
            body: JSON.stringify({error: "Some data missing"}),
            data: JSON.stringify(body)
        };
    }
*/
    const newData = new dataModel({profession, age, gender, data});
    try {
        await newData.save();
        const response = {
            statusCode: 200,
            body: "Success"
        };
        return response;
    }
    catch(err) {
         return {
            statusCode: 400,
            body: JSON.stringify({ error: err })
        };   
    }
    // const response = {
    //     statusCode: 200,
    //     body: body.name
    // };
    // return response;
};

