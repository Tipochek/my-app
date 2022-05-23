import './employers-list-item.css';

const EmployersListItem = ({name, salary, bonus}) => {

    const bonusClass = bonus ? ' increase' : '';

    return (
        <li className={`list-group-item d-flex justify-content-between${bonusClass}`}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;