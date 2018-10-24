import React from 'react'
import ListItem from './ListItem';


class SavedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedList: []
    };
    this.updateSavedList = this.updateSavedList.bind(this);
  }

  updateSavedList () {
    let savedArr = [];
    this.props.saved.map((item) => {
        savedArr.push(item);
      }
    );
    this.setState({
      savedList: savedArr
    });
  }

  render() {
    return (
      <div>
        <h1>Saved list</h1>
        <ul>
          {this.state.savedList.map((item) => {
            <li>
              <ListItem item={item}/>
            </li>
            }
          )}
        </ul>
      </div>
    )
  }
}

export default SavedList