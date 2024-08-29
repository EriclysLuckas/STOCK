import style from "./Table.module.css"
import TableRecents from "../TableContent/TableContent"
import TableFaltantes from "../TableContent/TableContentFaltantes"

export default function Table(){

return(

<div className ={style.tables}>
<TableRecents />
<TableFaltantes />


</div>

)



}