import auth from './auth';
import entities from './entities';
import errorMessage from './errorMessage';

const other_constants = {
    API_ROOT: '/api'
};

export default Object.assign({},
    auth,
    entities,
    errorMessage,
    other_constants
);