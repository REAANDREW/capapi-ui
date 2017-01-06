class App extends React.Component{
    render(){
        return (
                <div>
                    <h1>CAPAPI</h1>
                    <button type="button" className="btn btn-primary">Create new authorization</button>
                </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
