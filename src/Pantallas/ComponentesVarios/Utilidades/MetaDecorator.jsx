import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaDecorator = ( props ) => {
    return(
        <>
            <Helmet>
                <title>{ props.title }</title>
                <meta name="description" content={ props.description } />
            </Helmet>
        </>
    );
};

MetaDecorator.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default MetaDecorator;