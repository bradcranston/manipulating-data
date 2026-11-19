import { companiesData } from "./companies-data";
import {extraRecord} from "./extra-record"
import {mappedFunction, filterFunction, updateEachElement} from "./utils"

const before = document.getElementById("before");

//const manipulatedData = companiesData.shift();
//const manipulatedData = companiesData.pop();
//const manipulatedData = companiesData.push(extraRecord);
//const manipulatedData = companiesData.unshift(extraRecord);

//const filterFunction = function (company){
//    return company.fieldData.State === "TX" || company.fieldData.State === "FL";
//};

//companiesData.forEach(updateEachElement);

//const manipulatedData = [...new Set(companiesData.map(obj => obj.fieldData.State))].sort();

const manipulatedData = companiesData.filter(filterFunction).map(mappedFunction);

//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData,null,2)