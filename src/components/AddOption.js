import React, { useState } from 'react';

function AddOption(props){
    const [error, setError] = useState(undefined);
    // Methods
    const handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const result = props.handleAddOption(option);
        setError(result)
        if (!result) {
            e.target.elements.option.value = '';
        };
    };
    return (
        <React.Fragment>
            {error && <p className="add-option-error">{error}</p>}
            <form className="add-option" onSubmit={handleAddOption}>
                <input className="add-option__input" type="text" name="option"></input>
                <button className="button">Add Option</button>
            </form>
        </React.Fragment>
    );
};

export default AddOption;

// export default class AddOption extends React.Component {
//     state = {
//         error: undefined
//     };
//     handleAddOption = (e) => {
//         // Stop page from refreshing
//         e.preventDefault();
//         // Fetch the value
//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option);

//         this.setState(() => ({ error: error }));

//         if (!error) {
//             e.target.elements.option.value = '';
//         }
//     };
//     render() {
//         return (
//             <div>
//             {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
//                 <form className='add-option' onSubmit = {this.handleAddOption}>
//                     <input className='add-option__input' type="text" name="option"></input>
//                     <button className='button'>Add Option</button>
//                 </form>
//             </div>
//         );
//     }
// }