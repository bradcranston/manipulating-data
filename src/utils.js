const filterFunction = (company) => {
    return company.fieldData.State === "TX"
};

const mappedFunction = (company) => {
    return {city: company.fieldData.City, name: company.fieldData.CompanyName};
};

const updateEachElement = (company) => {
    company.fieldData.CityState = `${company.fieldData.City}, ${company.fieldData.State}`
};

export {
    filterFunction, mappedFunction, updateEachElement
};