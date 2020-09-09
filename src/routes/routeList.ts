import Todo from "../views/Todo";

let routeList: { path: string; component: () => JSX.Element; name: string; exact: boolean }[];
routeList = [
    {
        "path": "",
        "name": "todo",
        "exact": true,
        "component": Todo as any
    }
];

export default  routeList
