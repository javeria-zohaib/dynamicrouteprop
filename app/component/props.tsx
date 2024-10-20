import { CountryDataProp } from "../data/type"
export default function CountryDetail(Props:CountryDataProp){
    console.log(Props)
    return(
        <div>
            <h1>Name:{Props.name}</h1>
            <h1>Capital:{Props.capital}</h1>
            <h1>population:{Props.population}</h1>
        </div>
    )

}