import React from "react";
import {ReactComponent as Logo} from "../images/logo-streetcorner.svg";
import {ReactComponent as Arrow} from "../images/Group 11.svg";
import ListButton from '../components/ListButton'

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
            biography: {
                0 : {
                    date: 2015,
                    info: 'Graduated from school'
                },
                1 : {
                    date: 2015,
                    info: 'Successfully pass tests to Aviation University on '
                },
                2 : {
                    date: 2018,
                    info: 'Pass the tests to school Ш++'
                },
                3 : {
                    date: 2019,
                    info: 'Passed the final exam in p2p course'
                },
                4 : {
                    date: 2019,
                    info: "Have entered in web course"
                },
                5 : {
                    date: 2019,
                    info: 'Got my bachelor degree in Organisation of work and management aviation facilities'
                },
                6 : {
                    date: 2019,
                    info: 'Have entered Onix Internship'
                }
            },
            sorted: true,

        };
    }

    selectionSort = () => {
        const bio = this.state.biography;
        let newObj = {};
        let counter = 0;
        let array = Object.keys(bio);
        let length = array.length;
        for (let i = 0; i < length - 1; i++) {
            let firstObj = i;
            for (let j = i + 1; j < length; j++) {
                if (this.state.sorted) {
                    if (bio[array[j]].date > bio[firstObj].date) {
                        firstObj = j;
                    }
                } else {
                    if (bio[array[j]].date < bio[firstObj].date) {
                        firstObj = j;
                    }
                }
            }
            let t = array[firstObj];
            array[firstObj] = array[i];
            array[i] = t;
            newObj = array.map((key) => bio[key]);
        }
        this.setState({
            biography: newObj,
            sorted: !this.state.sorted
        });
    }

    jsSort = () => {
        let sortedArr;
        let newObj = {};
        const bio = this.state.biography;
        const keys = Object.keys(bio);
        if (this.state.sorted) {
            sortedArr = keys.sort((a, b) => bio[b].date - bio[a].date);
        } else {
            sortedArr = keys.sort((a, b) => bio[a].date - bio[b].date);
        }
        newObj = sortedArr.map((key) => bio[key]);
        this.setState({
            biography: newObj,
            sorted: !this.state.sorted
        });
    };

    addToList = () => {
        const defaultObj = {date: 2019, info: 'default'};
        let bio = this.state.biography;
        let length = Object.keys(bio).length;
        bio[length] = defaultObj;
        this.setState({biography: bio})
    };

    deleteLast = () => {
        let bio = this.state.biography;
        let length = Object.keys(bio).length;
        delete bio[length - 1];
        this.setState({biography: bio})
    }

    changeObj = () => {
        const key = document.getElementById('key').value;
        const field = document.getElementById('field').value;
        const value = document.getElementById('value').value;
        const bio = this.state.biography;
        let bioObj = bio[key];
        // console.log(bioObj);
        let obj1 = {};
        obj1[field] = value;
        bio[key] = {...bioObj, ...obj1};
        this.setState({biography: bio})
    }



createList(){
    let count = 0;
    const bio = this.state.biography;
    const keys  = Object.keys(bio);
    return keys.map((key) => <li key={count++}>{bio[key].date} : {bio[key].info}</li>)
}

renderList()
{
    return (
        <ul>
            {this.createList()}
        </ul>
    )
}

    renderListButtons(){
        return (
            <div>
                <ListButton text={'Js Sort'} action={this.jsSort}/>
                <ListButton text={'Own Sort'} action={this.selectionSort}/>
                <ListButton text={'Add New'} action={this.addToList}/>
                <ListButton text={'Delete last'} action={this.deleteLast}/>
            </div>
        )
    }

    renderChangeForm() {
        return (
            <div className="changeForm">
                <label htmlFor="obj">Pick obj with key(1,2...)</label>
                <input type="text" name="obj" placeholder={''} id={'key'} required />
                <label htmlFor="field">Pick which field to change?(date or info)</label>
                <input type="text" name="field" id={'field'} required />
                <label htmlFor="value">Write how to change</label>
                <input type="text" name="value" id={'value'} required />
                <ListButton text={'change object'} action={this.changeObj} />
            </div>
        )
    }

render()
{
    return (
        <div>
            <div className="banner">
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
                <div className="container">t
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
                    {this. renderChangeForm()}
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