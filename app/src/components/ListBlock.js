import React, {Component} from 'react';
import Button from "./Button";
import loading from "../images/loading.jpg";

class ListBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            biography: [],
            sorted: true,
            itemInFocus: '',
            currentIndex: '',
            loading: true
        }
    }
    showImage = () => {
        this.setState({loading: false})
    }

    alertImage = () => {
        setTimeout(this.showImage,2000)
    }

    handleError = () => {
        alert('some error')
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyDown);
        this.getApi()

    }

    getApi = () => {
        fetch(process.env.REACT_APP_API_USERS)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    biography: json,
                })
            })
            .catch(() => this.handleError)
    }


    selectionSort = () => {
        const bio = this.state.biography;
        let length = bio.length;
        for (let i = 0; i < length - 1; i++) {
            let firstObj = i;
            for (let j = i + 1; j < length; j++) {
                if (this.state.sorted) {
                    if (bio[j].id > bio[firstObj].id) {
                        firstObj = j;
                    }
                } else {
                    if (bio[j].id < bio[firstObj].id) {
                        firstObj = j;
                    }
                }
            }
            let element = bio[firstObj];
            bio[firstObj] = bio[i];
            bio[i] = element;
        }
        this.setState({
            biography: bio,
            sorted: !this.state.sorted
        });
    }

    jsSort = () => {
        let sortedArr;
        const bio = this.state.biography;
        if (this.state.sorted) {
            sortedArr = bio.sort((a, b) => b.id - a.id);
        } else {
            sortedArr = bio.sort((a, b) => a.id - b.id);
        }
        this.setState({
            biography: sortedArr,
            sorted: !this.state.sorted
        });
    };

    addToList = () => {
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        fetch(process.env.REACT_APP_API_USERS, {
            method: 'POST',
            body: {name: name, address: {city: city}}
        })
            .then(response => response.json())
            .then(json => {
                let bio = this.state.biography;
                if (bio.length < json.id) {
                    json.id = ++bio.length;
                }
                bio.push({id: json.id, name: name, address: {city: city}});
                console.log(bio);

                this.setState({
                    biography: bio
                })
            });
    };

    deleteLast = () => {
        let bio = this.state.biography;
        bio.pop();
        this.setState({biography: bio})
    }

    changeObj = () => {
        let place = document.getElementById('place').value;
        const field = document.getElementById('field').value;
        const value = document.getElementById('value').value;
        const bio = this.state.biography;
        if (place > 0 && place < bio.length) {
            place--;
        }
        if (field === 'name') {
            bio[place][field] = value;
        }
        if (field === 'city') {
            bio[place].address[field] = value;
        }
        this.setState({biography: bio})
    }

    dragStart = e => {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
    }

    dragOver = e => {
        e.preventDefault();
        e.target.parentNode.insertBefore(this.dragged, e.target);
    }

    onClick = e => {
        // console.log(e.target.classList);
        const elem = this.state.itemInFocus;
        if (e.target.classList.value === 'picked' && elem) {
            e.target.classList.remove('picked');
            this.setState({itemInFocus: ''})
        } else if (!elem) {
            this.setState({itemInFocus: e.target})
            e.target.classList.add('picked');
        } else {
            this.setState({itemInFocus: this.state.itemInFocus.classList.remove('picked')})
            this.setState({itemInFocus: e.target})
            e.target.classList.add('picked');
        }
     }

    keyDown = e => {
        const list = document.getElementById('list');
        const arrayOfNodes = list.childNodes;
        let element = -1;
        if (this.state.itemInFocus) {
            for (let i = 0; i < arrayOfNodes.length; i++) {
                if (arrayOfNodes[i].classList.value === 'picked') {

                    element = i;
                }
            }
        }
        const currentIndex = this.state.currentIndex;
        if (currentIndex && currentIndex + 1 === arrayOfNodes.length) {
            element = 0
        }
        if (currentIndex && currentIndex - 1 === -1) {
            element = arrayOfNodes.length
        }
        if (e.key === 'ArrowDown') {
            element++;
            if (this.state.itemInFocus) {
                this.setState({itemInFocus: this.state.itemInFocus.classList.remove('picked')});
            }
            this.setState({
                itemInFocus: arrayOfNodes[element],
                currentIndex: element
            })
            arrayOfNodes[element].classList.add('picked');

        }

        if (e.key === 'ArrowUp') {
            element--;
            if (this.state.itemInFocus) {
                this.setState({itemInFocus: this.state.itemInFocus.classList.remove('picked')});
            }
            this.setState({
                itemInFocus: arrayOfNodes[element],
                currentIndex: element
            })
            arrayOfNodes[element].classList.add('picked');

        }
    }


    createList() {
        const bio = this.state.biography;
        return bio.map(obj => <li key={obj.id}
                                  draggable={true}
                                  onDragStart={this.dragStart}
                                  onDragOver={this.dragOver}
        >
            {obj.id}. Name : {obj.name}, Living place : {obj.address.city}
        </li>)
    }

    renderList() {
        return (
            <ul onClick={this.onClick} id={'list'}>
                {this.createList()}
            </ul>
        )
    }

    renderListButtons() {
        return (
            <div className='button-container'>
                <Button text={'Js Sort'} action={this.jsSort}/>
                <Button text={'Own Sort'} action={this.selectionSort}/>
                <Button text={'Delete last'} action={this.deleteLast}/>
            </div>
        )
    }

    renderAddInput() {
        return (
            <div className="changeForm">
                <label htmlFor="name">Name someone who you want to add</label>
                <input type="text" name={'name'} id={'name'}/>
                <label htmlFor={'city'}>Where is this person living</label>
                <input type="text" name={'city'} id={'city'}/>
                <Button text={'Add New'} action={this.addToList}/>
            </div>
        )
    }

    renderChangeForm() {
        return (
            <div className="changeForm">
                <label htmlFor="place">Pick someone id(1,2...)</label>
                <input type="text" name="place" placeholder={''} id={'place'} required/>
                <label htmlFor="field">Pick which field to change?(name or city)</label>
                <input type="text" name="field" id={'field'} required/>
                <label htmlFor="value">Write how to change</label>
                <input type="text" name="value" id={'value'} required/>
                <Button text={'change object'} action={this.changeObj}/>
            </div>
        )
    }
    render() {
        return (
            <>
                <img src={loading} alt="load"
                     onLoad={this.alertImage}
                     className={this.state.loading ?  'loadImage': 'loadImage hidden'}
                />
                {this.renderList()}
                {this.renderListButtons()}
                {this.renderChangeForm()}
                {this.renderAddInput()}
            </>
        );
    }
}

export default ListBlock;