import React from "react";
import {ReactComponent as Logo} from "../images/logo-streetcorner.svg";
import {ReactComponent as Arrow} from "../images/Group 11.svg";
import loading from '../images/loading.jpg'
import Button from './Button'

// import logo from '../images/logo-streetcorner.svg';
// function App () {
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner__h1: 'Street Corner Ventures\n' +
                'Qualified Opportunity Zone Funds',
            banner__p: 'Street Corner Ventures Qualified Opportunity Funds are a portfolio of qualified opportunity\n' +
                '                            zone funds that achieve attractive risk-adjusted financial returns while making a positive\n' +
                '                            impact.',
            types__tittle: 'IRS: Opportunity Zones Frequently Asked Questions',
            types__text: 'The IRS has published a list of frequently asked questions regarding\n' +
                '                                opportunity zones including: What is an Opportunity Zones; What is a Qualified Opportunity\n' +
                '                                Fund; How Opportunity Zones Spur Economic Development; and much more.',
            container__h1: 'The Street Corner\n' +
                '                            Investment Strategy',
            container__p: 'The Street Corner Ventures investment strategy is focused on real investments in major urban\n' +
                '                            cities throughout the country. Street Corner Ventures utilizes a defined criteria for selecting\n' +
                '                            investments in emerging urban centers that stimulate a dense ecosystem of commercial, mixed use,\n' +
                '                            and residential development transforming neighborhoods and providing investors with positive\n' +
                '                            returns.',
            form__h1: 'We’ll\n' +
                '                                contact you',
            form__p: 'Complete the simple form below and one of our experts will reach out to you shortly\n' +
                '                                to answer your questions.',
            biography: [],
            sorted: true,
            itemInFocus: '',
            currentIndex: '',
            loading: true

        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyDown);
        this.getApi()

    }

    showImage = () => {
        this.setState({loading: false})
        console.log('1');
    }


    alertImage = () => {
        setTimeout(this.showImage,2000)
    }

    handleError = () => {
        alert('some error')
    }

    getApi = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
        fetch('https://jsonplaceholder.typicode.com/users', {
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
        // console.log(this.state.itemInFocus.previousSibling);

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
            <div>
                <div className="banner">
                    <img src={loading} alt="load"
                         onLoad={this.alertImage}
                        className={this.state.loading ?  'loadImage': 'loadImage hidden'}
                            />

                    <div className="container">
                        <header>
                            <a href="/">
                                <Logo/>
                            </a>
                            <nav>
                                <ul>
                                    <li><a href="#types">types</a></li>
                                    <li><a href="#description">description</a></li>
                                    <li><a href="$form">form</a></li>
                                </ul>
                            </nav>
                        </header>
                        <div className="banner-info">
                            <h1>{this.state.banner__h1}</h1>
                            <p>{this.state.banner__p}</p>
                            <a className="button" href="#">GET STARTED!</a>
                        </div>
                        <div className="lines">
                            <div className="oval"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                <div className="types" id="types">
                    <div className="container">
                        <div className="types--item">
                            <div className="number">1</div>
                            <div className="title">{this.state.types__tittle}
                            </div>
                            <div className="line"></div>
                            <div className="text">${this.state.types__text}
                            </div>
                            <a href="#">READ MORE <Arrow/></a>
                        </div>
                        <div className="types--item">
                            <div className="number">2</div>
                            <div className="title">{this.state.types__tittle}
                            </div>
                            <div className="line"></div>
                            <div className="text">{this.state.types__text}
                            </div>
                            <a href="#">READ MORE <Arrow/></a>
                        </div>
                        <div className="types--item">
                            <div className="number">3</div>
                            <div className="title">{this.state.types__tittle}
                            </div>
                            <div className="line"></div>
                            <div className="text">{this.state.types__text}
                            </div>
                            <a href="#">READ MORE <Arrow/></a>
                        </div>
                    </div>
                </div>

                <div className="description" id="description">
                    <div className="container">
                        <h1>{this.state.container__h1}</h1>
                        <p>{this.state.container__p}
                        </p>
                    </div>
                </div>

                <div className="form" id="form">
                    <div className="container">
                        {/*<div className="contact-text">*/}
                        {/*    <h1>{this.state.form__h1}</h1>*/}
                        {/*    <p>{this.state.form__p}</p>*/}
                        {/*    <a href="#">READ Disclaimer <Arrow/></a>*/}
                        {/*</div>*/}
                        {/*<form>*/}
                        {/*    <h1>Connect with us</h1>*/}
                        {/*    <input type="text" name="first Name" placeholder="First name"/>*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <input type="text" name="last name" placeholder="Last name"/>*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <input type="email" name="email" placeholder="E-mail"/>*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <input type="text" name="phone number" placeholder="Phone number"/>*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <input type="text" name="comments" placeholder="Comments"/>*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <input type="text"/>*/}
                        {/*</form>*/}
                        {this.renderList()}
                        {this.renderListButtons()}
                        {this.renderChangeForm()}
                        {this.renderAddInput()}
                    </div>
                </div>

                <footer>
                    <a href="/"><Logo/></a>
                    <div className="info">
                        <p>Made by Vladislav Dontsov</p>
                        <p>My GIT : <a href="https://github.com/KocMoHaWT">My GIT account</a></p>
                        <p>Original design : <a href="http://clients.onix-systems.com/ds_street_corner/">Template</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }


}

export default App