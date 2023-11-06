import PropTypes from 'prop-types';
import React from 'react';



class Search extends React.Component {

  state = {
    search: '',
  }
  
  static propTypes = {
    startSearch: PropTypes.func.isRequired,
  };
  
  handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      this.props.startSearch(this.state.search);
    }
  };

  render() {
    return <div className="row">

      
    <div className='search-div'>
    <div className="col s12">
      <div className="input-field inline">
        <input placeholder='search' type="search" className="validate" style={{backgroundColor: 'none', color: '#000000', fontSize: '20px', textAlign: 'center', zIndex: '1'}} value={this.state.search} onChange={(e) => this.setState({search: e.target.value})} onClick={this.handleSearch} onKeyDown={this.handleSearch}/>
        
      </div>
    </div>
    </div>

    </div>
  }
}

export {Search};





//another variant



//import React from 'react';
//import PropTypes from 'prop-types';

//class Search extends React.Component {
//  state = {
//    search: '',
//  }

//  render() {
//    return (
//      <div className="row">
//        <div className="col s12">
//          <div className="input-field inline">
//            <input
//              placeholder='search'
//              type="search"
//              className="validate"
//              value={this.state.search}
//              onChange={(e) => this.setState({search: e.target.value})}
//              onKeyDown={(e) => {
//                if (e.key === 'Enter') {
//                  this.props.startSearch(this.state.search);
//                }
//              }}
//            />
//          </div>
//        </div>
//      </div>
//    );
//  }
//}

//Search.propTypes = {
//  startSearch: PropTypes.func.isRequired,
//};

//export {Search};