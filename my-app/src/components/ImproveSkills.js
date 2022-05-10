import {texts} from '../Data'

export default function ImproveSkills(){
    const img = [
        {
            id:1,
            img: '../img/11-img.jpg'
        }
    ]
    return(
        <div className = "ImproveSkill">
            <div className = "col left-side">
                <img className = "img-improve"src={img[0].img} />
            </div>
            <div className = "col right-side">
                <div className = "title-improve">
                    <h1 className='title-text'>Improve Your Culinary Skills</h1>
                </div>
                <div className = "menu-improve">
                    {texts.map(textline =>{
                        const {id,text} = textline
                        return(
                            <span className = "text-class"key = {id}>{text}</span>
                        )
                    })}
                </div>
                <button className = "btn">SIGNUP NOW</button>
            </div>
        </div>
    )
}