import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.box}>
            {options.map(option =>
            (<button
                className ={css.button}
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>))}
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};