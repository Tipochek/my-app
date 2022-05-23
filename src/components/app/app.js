import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployerAddForm from '../employers-add-form/employers-add-form';

function App() {
    const dataEmployers = [
        {name: 'Sotrudnik 1', salary: 800, bonus: true, id: 1},
        {name: 'Sotrudnik 2', salary: 1000, bonus: false, id: 2},
        {name: 'Sotrudnik 3', salary: 1200, bonus: false, id: 3},
        {name: 'Sotrudnik 4', salary: 1400, bonus: true, id: 4}
    ]

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={dataEmployers}/>

            <EmployerAddForm/>
        </div>
    )
}

export default App;