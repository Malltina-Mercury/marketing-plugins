import fs from 'fs';
import jsf from 'json-schema-faker';
import mockDataSchema from './DataSchema.mjs';
import faker from "@faker-js/faker";
import chance from "chance";

jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);

const mockData = jsf.generate(mockDataSchema);
const json = JSON.stringify(mockData);

fs.writeFile("./db.json", json, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log("Mock data generated.");
    }
});