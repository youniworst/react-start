import TableRow from "./TableRow";

export default function TableHead(props) {
    return (
        <thead className="border-b">
            <TableRow list={props.list} canChange={false} isTd={false} />
        </thead>
    );
}
