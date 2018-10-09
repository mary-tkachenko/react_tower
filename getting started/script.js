function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        </div>
    );
  }
  
  var app = (
    <div>
      <Person name="Mary" age="30"/>
      <Person name="Sergii" age="30"/>
      <Person name="Fiona" age="3"/>
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));
