const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
    // console.log(countries);
    const countiresHTML = countries.map((country) => getCountryHtml(country));
    // console.log(countiresHTML[0]);
    const container = document.getElementById("countries");
    container.innerHTML = countiresHTML.join(" ");
};

//Orginal
// const getCountryHtml = (country) => {
//     return ` <div class ='country'>
//             <h2>${country.name.common}</h2>

//             <img src=${country.flags.png} >

//     </div> `;
// };

// //Option 1

// const getCountryHtml = (country) => {
//     //Option 1
//     const { name, flags } = country;

//     return ` <div class ='country'>
//             <h2>${name.common}</h2>

//             <img src=${flags.png} >

//     </div> `;
// };

//Option 2 Destructuing in Parameters

const getCountryHtml = ({ name, flags, area, region }) => {
    return ` <div class ='country'>
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p> Region: ${region} </p>
            <img src=${flags.png} >
    </div> `;
};

loadCountries();