console.log("App.js is running!");

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    // Stop the page from refreshing
    e.preventDefault();
    // Retrieve the value of the form submitted
    const option = e.target.elements.option.value;
    // Check if something has been submitted - if so, get it then show new form
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    // Re-render the page
    render();
};

const onRemoveAll = () => {
    // wipe the array
    app.options = [];
    // Re-render the page
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick = {onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();