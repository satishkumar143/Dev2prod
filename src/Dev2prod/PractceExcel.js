import React from 'react';

const PractceExcel=()=>{

    const readExcel=(file)=>{

      const promise=new Promise((Reslove,reject)=>{

          const fileReader=new fileReader();

          fileReader.readAsArrayBuffer(file);

          fileReader.onload=(e)=>{

            const bufer=e.target.result;

            const wb=XLSX.red(bufer,{type:'buffer'});

            const ws=wb.SheetNames[0]

            const data=wb.Sheets[ws];

            const data_1=XLSX.utils.sheet_to_json(data)
            
            Reslove(data_1)
          }

          fileReader=(e)=>{reject(e)}

      })
      promise.then((d)=>{
          console.log(d)
      })
    }
    return(
        <div>

           <input type="file" onChange={()=>{
               const file=e.target.files[0];
               readExcel(file);
           }}/>

        </div>
    )
}
export default PractceExcel;