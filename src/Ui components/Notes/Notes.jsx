import { connect } from 'react-redux';
import { interFace } from '../../Redux/reducers/notes';
import NotesPure from './NotesPure';

const mapState=(state)=>state.notes

export default connect(mapState,interFace)(NotesPure)