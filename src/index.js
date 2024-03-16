import { companiesData } from "./companies-data";
import {extraRecord} from "./extra-record";

console.log("Extra",extraRecord)

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

//const manipulatedData = Object.values(extraRecord.fieldData.City);

//extraRecord.fieldData.Country = "USA";
//extraRecord.fieldData.CityState = `${extraRecord.fieldData.City}, ${extraRecord.fieldData.State}`
//delete extraRecord.fieldData.Id;
//const {City, State, Zip, ...rest} = extraRecord.fieldData;
//console.log(rest);

const manipulatedData = extraRecord.fieldData;


//TODO: add the manipulated data array to the 'after' div.
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData,null,2)

