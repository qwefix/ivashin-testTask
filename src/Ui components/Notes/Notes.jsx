import { connect } from 'react-redux';
import { ac } from '../../Redux/reducers/notes';
import NotesPure from './NotesPure';


const mapState=(state)=>state.notes

export default connect(mapState,ac)(NotesPure)