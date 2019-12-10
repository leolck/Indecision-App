class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && <p>"These are details you can now see!"</p>}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// const appRoot = document.getElementById('app');

// let visibility = false;

// const onShowDetails = () => {
//     visibility = !visibility;
//     render();
// };

// const visibleText = <p>Hey. These are some details you can now see!</p>;

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>
//                 {visibility ? "Hide Details" : "Show Details"}
//             </button>
//             {visibility && visibleText}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// };

// render();