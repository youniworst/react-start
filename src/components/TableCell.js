import React from "react";
import TableCellModal from "./TableCellModal";

export default class TableCell extends React.Component {
    constructor(props) {
        super(props);
        this.cellRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.canChange) {
            this.cellRef.current.addEventListener(
                "dblclick",
                this.handleDblClick
            );
        }
    }

    onSave = (value) => {
        this.props.onSave(
            {
                id: this.props.id,
                fieldname: this.props.name,
                value,
            },
            () => this.props.toggleModal(null)
        );
    };

    handleDblClick = () => {
        this.props.toggleModal(this.props.id + this.props.name);
    };

    tdContentSwitcher = () => {
        if (this.props.openedId === this.props.id + this.props.name) {
            return (
                <>
                    <TableCellModal
                        onSave={this.onSave}
                        closeModal={this.closeModal}
                        value={this.props.value}
                    />
                </>
            );
        } else {
            return this.props.value;
        }
    };

    render() {
        if (this.props.isTd) {
            return (
                <>
                    <td
                        ref={this.cellRef}
                        className="text-sm font-medium h-20 text-gray-900 px-6 py-4 text-left"
                    >
                        {this.tdContentSwitcher()}
                    </td>
                </>
            );
        } else
            return (
                <>
                    <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                        {this.props.value}
                    </th>
                </>
            );
    }
}
