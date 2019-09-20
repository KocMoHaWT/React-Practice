import React from 'react'
import Button from "../../../../../elements/Button";

export const ListBlockView = (props) => {
    return (
        <>
            <ul onClick={props.onClick} id={'list'}>
                {props.children}
            </ul>
            <div className='button-container'>
                <Button text={'Js Sort'} action={props.jsSort}/>
                <Button text={'Own Sort'} action={props.selectionSort}/>
                <Button text={'Delete last'} action={props.deleteLast}/>
            </div>
            <div className="changeForm">
                <label htmlFor="name">Name someone who you want to add</label>
                <input type="text" name={'name'} id={'name'}/>
                <label htmlFor={'city'}>Where is this person living</label>
                <input type="text" name={'city'} id={'city'}/>
                <Button text={'Add New'} action={props.addToList}/>
            </div>
            <div className="changeForm">
                <label htmlFor="place">Pick someone id(1,2...)</label>
                <input type="text" name="place" placeholder={''} id={'place'} required/>
                <label htmlFor="field">Pick which field to change?(name or city)</label>
                <input type="text" name="field" id={'field'} required/>
                <label htmlFor="value">Write how to change</label>
                <input type="text" name="value" id={'value'} required/>
                <Button text={'change object'} action={props.changeObj}/>
            </div>
        </>
    )
}