import React, { Component } from 'react';
import HomeView from './HomeView';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageText: {
        bannerH1: 'Street Corner Ventures\n'
          + 'Qualified Opportunity Zone Funds',
        bannerP: 'Street Corner Ventures Qualified Opportunity Funds are a portfolio of qualified opportunity\n'
          + ' funds that achieve attractive risk-adjusted financial returns while making a positive\n'
          + '                            impact.',
        typesTitle: 'IRS: Opportunity Zones Frequently Asked Questions',
        typesText: 'The IRS has published a list of frequently asked questions regarding\n'
          + '                                opportunity zones including: What is an Opportunity Zones; '
          + 'What is a Qualified Opportunity\n'
          + '                                Fund; How Opportunity Zones Spur Economic Development; and much more.',
        descriptionH1: 'The Street Corner\n'
          + '                            Investment Strategy',
        descriptionP: 'The Street Corner Ventures investment strategy is focused on real investments in major urban\n'
          + '                            cities throughout the country. Street Corner Ventures utilizes a defined '
          + 'criteria for selecting\n'
          + '                            investments in emerging urban centers that stimulate a dense ecosystem '
          + 'of commercial, mixed use,\n'
          + '                            and residential development transforming neighborhoods and providing '
          + 'nvestors with positive\n'
          + '                            returns.',
        form__h1: 'We’ll\n'
          + '                                contact you',
        form__p: 'Complete the simple form below and one of our experts will reach out to you shortly\n'
          + '                                to answer your questions.',
      },
      biography: [],
      sorted: true,
      itemInFocus: '',
      currentIndex: '',
      loading: true,
    };
  }


  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
    this.getApi();
  }

  handleError = () => {
    // eslint-disable-next-line no-alert
    alert('some error');
  };

  getApi = () => {
    fetch(process.env.REACT_APP_API_USERS)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          biography: json,
        });
      })
      .catch(() => this.handleError);
  };


  selectionSort = () => {
    const { biography, sorted } = this.state;
    const { length } = biography;
    for (let i = 0; i < length - 1; i += 1) {
      let firstObj = i;
      for (let j = i + 1; j < length; j += 1) {
        if (sorted) {
          if (biography[j].id > biography[firstObj].id) {
            firstObj = j;
          }
        } else if (biography[j].id < biography[firstObj].id) {
          firstObj = j;
        }
      }
      const element = biography[firstObj];
      biography[firstObj] = biography[i];
      biography[i] = element;
    }
    this.setState({
      biography, // baka
      sorted: !sorted
    });
  };

  jsSort = () => {
    let sortedArr;
    const { biography, sorted } = this.state;
    if (sorted) {
      sortedArr = biography.sort((a, b) => b.id - a.id);
    } else {
      sortedArr = biography.sort((a, b) => a.id - b.id);
    }
    this.setState({
      biography: sortedArr,
      sorted: !sorted
    });
  };

  addToList = () => {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    fetch(process.env.REACT_APP_API_USERS, {
      method: 'POST',
      body: { name, address: { city } }
    })
      .then((response) => response.json())
      .then((json) => {
        let { id } = json;
        const { biography } = this.state;
        if (biography.length <= id) {
          id = biography.length + 1;
        }
        biography.push({ id, name, address: { city } });

        this.setState({
          biography
        });
      });
  };

  deleteLast = () => {
    const { biography } = this.state;
    biography.pop();
    this.setState({ biography });
  };

  changeObj = () => {
    let place = document.getElementById('place').value;
    const field = document.getElementById('field').value;
    const { value } = document.getElementById('value');
    const { biography } = this.state;
    if (place > 0 && place < biography.length) {
      place -= 1;
    }
    if (field === 'name') {
      biography[place][field] = value;
    }
    if (field === 'city') {
      biography[place].address[field] = value;
    }
    this.setState({ biography });
  };

  dragStart = (e) => {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  };

  dragOver = (e) => {
    e.preventDefault();
    e.target.parentNode.insertBefore(this.dragged, e.target);
  };

  onClick = (e) => {
    const { itemInFocus } = this.state;
    if (e.target.classList.value === 'picked' && itemInFocus) {
      e.target.classList.remove('picked');
      this.setState({ itemInFocus: '' });
    } else if (!itemInFocus) {
      this.setState({ itemInFocus: e.target });
      e.target.classList.add('picked');
    } else {
      this.setState({ itemInFocus: itemInFocus.classList.remove('picked') });
      this.setState({ itemInFocus: e.target });
      e.target.classList.add('picked');
    }
  };

  keyDown = (e) => {
    const list = document.getElementById('list');
    const arrayOfNodes = list.childNodes;
    const { itemInFocus } = this.state;
    let element = -1;
    if (itemInFocus) {
      for (let i = 0; i < arrayOfNodes.length; i += 1) {
        if (arrayOfNodes[i].classList.value === 'picked') {
          element = i;
        }
      }
    }
    const { currentIndex } = this.state;
    if (e.key === 'ArrowDown') {
      element += 1;
      if (currentIndex && currentIndex + 1 === arrayOfNodes.length) {
        element = 0;
      }
      if (itemInFocus) {
        this.setState({ itemInFocus: itemInFocus.classList.remove('picked') });
      }
      this.setState({
        itemInFocus: arrayOfNodes[element],
        currentIndex: element
      });
      arrayOfNodes[element].classList.add('picked');
    }

    if (e.key === 'ArrowUp') {
      element -= 1;
      if (!currentIndex) {
        element = arrayOfNodes.length - 1;
      }
      if (currentIndex && currentIndex - 1 === -1) {
        element = arrayOfNodes.length - 1;
      }
      if (itemInFocus) {
        this.setState({ itemInFocus: itemInFocus.classList.remove('picked') });
      }
      this.setState({
        itemInFocus: arrayOfNodes[element],
        currentIndex: element
      });
      arrayOfNodes[element].classList.add('picked');
    }
  };


  showImage = () => {
    this.setState({ loading: false });
  };

  alertImage = () => {
    setTimeout(this.showImage, 2000);
  };


  render() {
    const { homePageText, loading, biography } = this.state;
    return (
      <HomeView
        alertImage={this.alertImage}
        homePageText={homePageText}
        loading={loading}
        onClick={this.onClick}
        changeObj={this.changeObj}
        deleteLast={this.deleteLast}
        addToList={this.addToList}
        jsSort={this.jsSort}
        selectionSort={this.selectionSort}
        list={biography}
      />
    );
  }
}

export default Home;
