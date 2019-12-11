import React, { useState, useEffect } from 'react';

// Import components
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

function IndecisionApp() {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(undefined);
    const subtitle = "Put your life in the hands of a computer!";

    // Lifecycle methods
    // Initialize the options state by grabbing it from local storage
    useEffect(() => {
        try {
            const optionData = JSON.parse(localStorage.getItem('options'));
            // check if options is null
            if (options) {
                setOptions(optionData)
            }
        } catch (e) {
            // do nothing at all - invalid JSON
        }
    }, []);
    // Update the local storage if the options state has changed
    useEffect(() => {
        const json = JSON.stringify(options);
        localStorage.setItem('options', json);
    }, [options]);

    // Methods
    // User picks an option
    const handlePick = () => {
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum];  // choose the randomly generated option
        setSelectedOption(option);
    };
    // User removes all options
    const handleDeleteOptions = () => {
        setOptions([]);
    };
    // User removes a single option
    const handleDeleteOption = (optionToRemove) => {
        setOptions(options.filter((option) => option !== optionToRemove));
    };
    // User presses a button to add an option
    const handleAddOption = (option) => {
        if (!option) {  
            return 'Enter valid value to add item';
        } else if (options.indexOf(option) > -1) {  
            return 'This option already exists';
        } else {
            setOptions(options.concat(option));
        };
    };
    const handleClearSelectedOption = () => {
        setSelectedOption(undefined);
    };
    return (
        <React.Fragment>
            <Header subtitle={subtitle} />
            <div className="container">
                <Action 
                    hasOptions={options.length > 0} 
                    handlePick={handlePick}
                />
                <div className="widget">
                    <Options
                        options={options}
                        handleDeleteOptions={handleDeleteOptions}
                        handleDeleteOption={handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={handleAddOption}
                    />
                </div>
            </div>
            <OptionModal 
                selectedOption={selectedOption}
                handleClearSelectedOption={handleClearSelectedOption}
            />
        </React.Fragment>
    );
};

export default IndecisionApp;

// export default class IndecisionApp extends React.Component {
//     state = {
//         options: [],
//         selectedOption: undefined
//     }
//     handleDeleteOptions = () => {
//         this.setState(() => ({ options: [] }));
//     }
//     // Delete individual items
//     handleDeleteOption = (optionToRemove) => {
//         this.setState((prevState) => ({
//             options: prevState.options.filter((option) => optionToRemove !== option)
//         }));
//     }
//     handlePick = () => {
//         const randomNum = Math.floor(Math.random() * this.state.options.length);
//         const option = this.state.options[randomNum];
//         this.setState(() => ({ selectedOption: option }));
//     }
//     handleAddOption = (option) => {
//         if (!option) {
//             return 'Enter valid value to add item';
//         // is the item already in the array?
//         } else if (this.state.options.indexOf(option) > -1) {
//             return 'This option already exists';
//         }
//         this.setState((prevState) => ({
//             options: prevState.options.concat(option)
//         }));
//     }
//     handleClearSelectedOption = () => {
//         this.setState(() => ({ selectedOption: undefined }));
//     }
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('options');
//             const options = JSON.parse(json);
//             // check if options is null
//             if (options) {
//                 this.setState(() => ({ options: options }));
//             }
//         } catch (e) {
//             // do nothing at all - invalid json
//         }
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.options.length !== this.state.options.length) {
//             const json = JSON.stringify(this.state.options);
//             localStorage.setItem('options', json);
//             console.log('saving data');
//         }
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }
//     render() {
//         const subtitle = 'Put your life in the hands of a computer!';
//         return (
//             <div>
//                 <Header subtitle={subtitle}/>
//                 <div className='container'>
//                     <Action 
//                         hasOptions={this.state.options.length > 0}
//                         handlePick={this.handlePick}
//                     />
//                     <div className='widget'>
//                         <Options
//                             options={this.state.options}
//                             handleDeleteOptions={this.handleDeleteOptions}
//                             handleDeleteOption={this.handleDeleteOption}
//                         />
//                         <AddOption 
//                             handleAddOption={this.handleAddOption}
//                         />
//                     </div>
//                 </div>
                
//                 <OptionModal
//                     selectedOption={this.state.selectedOption}
//                     handleClearSelectedOption={this.handleClearSelectedOption}
//                 />
//             </div>
//         );
//     }
// }
