import React from "react";
import TableRow from "./TableRow";
export default class TableBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modaleOpenedId: null,
        };
    }

    toggleModal = (id = null) => {
        this.setState({ modaleOpenedId: id });
    };

    render() {
        return (
            <tbody>
                {this.props.list.map((element) => {
                    return (
                        <TableRow
                            toggleModal={this.toggleModal}
                            openedId={this.state.modaleOpenedId}
                            onSave={this.props.onSave}
                            key={element.id}
                            setCanChange={this.setCanChange}
                            isTd={true}
                            canChange={true}
                            list={element}
                        />
                    );
                })}
            </tbody>
        );
    }
}
