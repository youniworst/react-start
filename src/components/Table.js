import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import productList from "../JSON/products.json";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: productList,
        };
    }
    changeListItem = ({ id, fieldname, value }, callback) => {
        this.setState(
            {
                productList: this.state.productList.map((item) => {
                    if (item.id === id) item[fieldname] = value;
                    return item;
                }),
            },
            callback
        );
    };

    render() {
        return (
            <>
                <div className="flex flex-col mx-auto max-w-7xl">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow">
                                <table className="min-w-full">
                                    <TableHead
                                        list={{
                                            id: "id",
                                            name: "name",
                                            description: "description",
                                            price: "price",
                                            createdAt: "createdAt",
                                        }}
                                    />
                                    <TableBody
                                        onSave={this.changeListItem}
                                        list={this.state.productList}
                                    />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
