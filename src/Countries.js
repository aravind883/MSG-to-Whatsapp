import GenerateFlags from './CountriesList'


function CountriesDDList(p){
    return <div className="CountriesDDList">        
        <GenerateFlags searchTerm={p.searchTerm}/>
    </div>
}

export default CountriesDDList