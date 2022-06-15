import React from "react";
import TableCell from "./TableCell";

export default class TableRow extends React.Component {

    render() {
        return (
            <tr>
                <TableCell onSave={this.props.onSave} id={this.props.list.id} name={'id'} value={this.props.list.id} isTd={this.props.isTd} canChange={false}/> 
                <TableCell onSave={this.props.onSave} id={this.props.list.id} name={'name'} value={this.props.list.name} isTd={this.props.isTd} canChange={this.props.canChange}/> 
                <TableCell onSave={this.props.onSave} id={this.props.list.id} name={'description'} value={this.props.list.description} isTd={this.props.isTd} canChange={this.props.canChange}/> 
                <TableCell onSave={this.props.onSave} id={this.props.list.id} name={'price'} value={this.props.list.price} isTd={this.props.isTd} canChange={this.props.canChange}/> 
                <TableCell onSave={this.props.onSave} id={this.props.list.id} name={'createdAt'} value={this.props.list.createdAt} isTd={this.props.isTd} canChange={false}/> 
            </tr>
        )
    }
}