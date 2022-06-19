import React from "react";

export default class TableCellModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
        this.inputRef = React.createRef();
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onSave(this.state.value);
    };

    onChangeHandler = () => {
        this.setState({ value: this.inputRef.current.value });
    };

    render() {
        return (
            <>
                <div className="block h-full  shadow-lg w-full ">
                    <form
                        onSubmit={this.onSubmitHandler}
                        className="w-full  flex mx-auto"
                    >
                        <div className=" form-group w-full">
                            <input
                                type="text"
                                ref={this.inputRef}
                                className="form-control
                                    block
                                    h-full
                                    w-full
                                    p-4
                                    text-s  
                                    font-normal
                                    text-gray-900
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-describedby="cellChange"
                                defaultValue={this.props.value}
                                onChange={this.onChangeHandler}
                                placeholder="Enter text"
                            ></input>
                        </div>
                        <button
                            type="submit"
                            className="
                            px-4
                            py-3
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </>
        );
    }
}
