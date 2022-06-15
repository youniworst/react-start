import React from "react";

export default class TableCellModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
        this.inputRef = React.createRef() 
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSave(this.state.value)
    }

    onChangeHandler = () => {
        this.setState({value: this.inputRef.current.value})
    }


    render() {
        return (
            <>
                <div onClickCapture={this.props.closeModal} className="block h-full top-0 left-0 bg-black/[0.75] fixed shadow-lg bg-white w-full ">
                    <form onSubmit={this.onSubmitHandler} className="max-w-3xl h-1/4 relative top-1/4 left-0 -translate-y-50% flex flex-col justify-center mx-auto">
                        <div className="h-full form-group w-full">
                            <input type='text' ref={this.inputRef} className="form-control
                                    block
                                    h-full
                                    w-full
                                    p-4
                                    text-5xl
                                    font-normal
                                    text-gray-900
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-describedby="cellChange" defaultValue={this.props.value} onChange={this.onChangeHandler} placeholder="Enter text"></input>
                        </div>
                        <button type="submit" className="

                            px-6
                            py-6
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
                            ease-in-out">Save</button>
                    </form>
                </div>
            </>
        )
    }
}