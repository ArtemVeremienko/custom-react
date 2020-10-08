import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static defaultProps = {
        onChange: function (cnt) { }
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    state = {
        inputValue: this.props.cnt
    };

    increase = () => {
        this.set(this.props.cnt + 1);
    }

    decrease = () => {
        this.set(this.props.cnt - 1);
    }

    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);

        this.setState({
            inputValue: cnt
        });

        // как-то сказать родителю, что cnt обновился
        this.props.onChange(cnt);
    }

    setValue(newStr) {
        this.setState({ inputValue: newStr });
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.applyValue();
        }
    }

    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <button onClick={this.decrease} className="btn btn-outline-secondary" type="button" id="button-addon1"><i class="fa fa-minus-square"></i></button>
                </div>
                <input value={this.state.inputValue}
                    onChange={(e) => this.setValue(e.target.value)}
                    onBlur={this.applyValue}
                    onKeyUp={this.checkEnterKey}
                    type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <div className="input-group-append">
                    <button onClick={this.increase} className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-plus-square"></i></button>
                </div>
            </div>

        );
    }
}

/*
Some.defaultProps = {
                    min: 1,
    max: 5
};
*/
{/* <div>
    <button onClick={this.decrease}>-</button>
    <input value={this.state.inputValue}
        onChange={(e) => this.setValue(e.target.value)}
        onBlur={this.applyValue}
        onKeyUp={this.checkEnterKey}
    />
    <button onClick={this.increase}>+</button>
</div> */}