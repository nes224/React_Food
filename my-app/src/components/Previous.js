import React from 'react'
import './Recipes.scss'
import {FaSearch} from 'react-icons/fa'
const Previous = () =>{
    const searches = ['แหนมเห็ด','แกงผักหวานไข่มดแดง','ตำหลวงพระบาง','ก้อยไข่มดแดง','ก้อยเนื้อ','ไส้ย่าง',
    'ตำไหลบัวกุ้งสด','หมกฮวก','ตำป่า','แกงเปรอะ','ซุปบักมี่','หมกปลาซิล','ลาบไข่ต้มยางมะตูม','ลาบทอดซ่อนกุ้ง'
    ,'ลาบปลากดุกย่าง']
    return(
        <div className = "previous-searches section">
            <h2>Previous Searches</h2>
            <div className = "previous-searches-container">
                {searches.map((search,index)=>(
                    <div key = {index} className = "search-item">
                        {search}
                    </div>
                ))}
            </div>
            <div className = "search-box">
                <input type = "text" placeholder = "Search ..." />
                <button className = "btn-search"><FaSearch /></button>
            </div>
        </div>
    )
}
export default Previous