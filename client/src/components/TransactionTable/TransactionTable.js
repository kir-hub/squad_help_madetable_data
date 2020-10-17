import React , {useState}  from 'react'
import  styles from "./TransactionTable.module.sass"
import CONSTANTS from '../../constants';

export default function TransactionTable() {

    const data=[
        {
            id: 1,
            type: CONSTANTS.INCOME,
            sum: 350
        },
        {
            id: 2,
            type: CONSTANTS.EXPENSE,
            sum: -350
        }
    ]

    const dataToTable = data.map( function (obj){
        return <tr><td>{id}</td><td>{type}</td><td>{sum}</td></tr>
    } ) 
 
    const {handleSubmit} = this.props;
    return (
        <div>
            <table className={styles.tableCont}>
                <tr> <th>id</th><th>INCOME/EXPENSE</th><th>sum</th></tr>
                <tr><td>{data[0].id}</td><td>{data[0].type}</td><td>{data[0].sum}</td></tr>
                <tr><td>{data[1].id}</td><td>{data[1].type}</td><td>{data[1].sum}</td></tr>
                {dataToTable}
            </table>
        </div>
    )
}
