
function ListGroup(){
    const items = ['Nottingham', 'Leicester',
        'Birmingham', 'Manschester'];

    
    return(
        <>
        <h1>List Component</h1>
        <ul className="list-group">
        {items.map((item, index) => (<li className="list-group-item" key={index}>{item}</li>))}
        </ul>
      </>
    );

}

export default ListGroup;