import React from "react";
import TableRow from "./TableRow";
import { nanoid } from 'nanoid'
export default class TableBody extends React.Component {
    constructor(props) {
        super(props)
        this.idGenetator = nanoid
    }   
    

    render() {
        return (
            <tbody>
                {this.props.list.map((element) => {
                    return <TableRow onSave={this.props.onSave} key={this.idGenetator()} setCanChange={this.setCanChange} isTd={true} canChange={true} list={element} />
                })}
            </tbody>
        )
    }
}