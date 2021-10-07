import React from 'react'
import { read } from 'xlsx';

import * as XLSX from 'xlsx';

import './sheet.css';

const ExcelSheet=()=>{

const readExcel=(file)=>{

    const promise=new Promise((resolve,reject)=>{

       const fileReader=new FileReader();

        fileReader.readAsArrayBuffer(file)

        fileReader.onload=(e)=>{

            const bufferArray_1=e.target.result;

            const wb=XLSX.read(bufferArray_1,{type:"buffer"});

            const wsname=wb.SheetNames[0];

            const ws=wb.Sheets[wsname];

            const data=XLSX.utils.sheet_to_json(ws);

            resolve(data)
        
        };

        fileReader.onerror=(error)=>{reject(error)}
    });
    promise.then((d)=>{

    console.log(d)


    });
}


let handle=(e)=>{

    const file=e.target.files[0];
    readExcel(file)
}

    return(
        <div className="s1">
           

{/* <input type="file" onChange={(e)=>{
    const file=e.target.files[0];
    readExcel(file)
}}/> */}


<input type="file" onChange={handle}/>

</div>
    )
}
export default ExcelSheet;



