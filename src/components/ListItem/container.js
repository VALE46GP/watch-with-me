import ListItem from './index';
import { connect } from 'react-redux';
import addMedia from "../../actions/addMedia";

// const mapStateToProps = (state) => {
//     const { watchlist } = state;
//     return ({
//         watchlist,
//     })
// };

const mapDispatchToProps = (dispatch) => {
    return ({
        addMedia: (media, watchlist) => dispatch(addMedia(media, watchlist)),
    });
};

const ListItemContainer = connect(null, mapDispatchToProps)(ListItem);

export default ListItemContainer;
