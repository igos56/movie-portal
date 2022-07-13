const prepareYearCountry = (year: string, data?: {country: {name: string}}) => {
    const newYear = new Date(year).getFullYear();
    const country = data ? data.country.name : "";
    
    return country ? `${newYear} (${country})` : `${newYear}`;
};

export default prepareYearCountry;