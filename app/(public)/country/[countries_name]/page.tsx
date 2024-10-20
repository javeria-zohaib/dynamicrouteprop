import { countryData } from "@/app/data/countries";
import { CountryDataProp } from "@/app/data/type";
import CountryDetail from "@/app/component/props";
interface CountryPageprop {
    params:{
        countries_name:string
    }
}
export default function Countrypage({params}:CountryPageprop){
    let selectedCountry:CountryDataProp|undefined
    
    switch (params.countries_name){
        case "Pakistan":selectedCountry=countryData[0]
        break;
        case "Qatar":selectedCountry=countryData[1]
        break;
        case "India":selectedCountry=countryData[2]
        break;
        case "Bangladesh":selectedCountry=countryData[3]
        break;
        case "Afghanistan":selectedCountry=countryData[4]
        break;
        default:selectedCountry=undefined
        break;
        

    }
    if(!selectedCountry){
        return(
            <div>country not found</div>
        )
    }
    return(
        <div className=" bg-purple-600 ml-2 mt-20 font-extrabold">
       <CountryDetail name={selectedCountry.name} capital={selectedCountry.capital} population={selectedCountry.population}/>
        </div>
    )
}


  

       
        

    
   

