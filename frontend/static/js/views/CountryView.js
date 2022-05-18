import AbstractView from "./AbstractView.js";
import { getCountries } from "../countries.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        let countries = getCountries()
        // let country = countries.reduce((prev, curr)=> {
        //     if(curr.cca3 == this.params.id){
        //         return prev.concat(curr);
        //     } else {
        //         return prev;
        //     }
        // },[])[0];

        let country;
        for(let i=0; i<countries.length; i++) {
            if(countries[i].cca3==this.params.id){
                country = countries[i];
            }
        }
        return `
        <div class="countryV">
        <h1>${country}'s flag is ${country.flag}</h1>
        <p>Capital: ${country.capital}</p>
        <p>Languages: ${country.languages}</p>
        <p>Population: ${country.population}</p>
        <p>Currencies: ${country.currencies.BWP.name}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        </div>
        `;
    }
    
}