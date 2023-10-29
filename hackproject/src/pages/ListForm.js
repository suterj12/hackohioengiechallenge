import React from 'react';

function ListForm(){
    const handleSubmit = event=> {
        event.preventDefault();
        alert('Thank you for listing this item!')
    }

    return (
        <div className="wrapper">
            <h1>Item List Form</h1>
            <form onSubmit={handleSubmit} >
            <fieldset>
                <label>
                    <p>Item Title</p>
                    <input name = "item title" />
                </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ListForm;