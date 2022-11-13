//Pratyush P Menon 901337
import React, { useState } from 'react'
export function ResourceAvailability()
{
    const [bedCount,setBedCount]=useState(0);
    const [MedicalKits,setMedicalKits]=useState(0);

    return(
        <div  className="mt-5 mb-3">
            <center>
            <table class="table-bordered">
                <thead>
                    <th>Resources</th>
                    <th>Add</th>
                    <th></th>
                    <th>Delete</th>
                </thead>
            <tr>
            <td>No of Beds : {bedCount} </td>
            <td></td>
            <td><button class="btn btn-outline-info" onClick={()=>setBedCount(bedCount+1)}>+</button></td>
            <td><button class="btn btn-outline-danger" onClick={()=>setBedCount(bedCount-1)}>-</button></td>
            </tr>
            <tr>
            <td>No of Medical Kits : {MedicalKits} </td>
            <td></td>
            <td><button class="btn btn-outline-info" onClick={()=>setMedicalKits(MedicalKits+1)}>+</button></td>
            <td><button class="btn btn-outline-danger" onClick={()=>setMedicalKits(MedicalKits-1)}>-</button></td>
            </tr>
            </table>    
            </center>    
        </div>
    )
}
