import React from 'react'
import style from './form.module.css'

const Myform = () => {
    return (
        <div className={style.form}>
            <div itemID="container">

                <h1 itemID="title">freeCodeCamp Survey Form</h1>
                <p itemID="description"><i>Thank you for taking the time to help us improve the platform</i></p>
                <div itemID="container_2">
                    <form action="#" itemID="survey-form">
                        <label className='tag' htmlFor="name">Name</label> <br/>
                        <input type="text" itemID="name" placeholder='Enter your name'/><br/>

                        <label className='tag' htmlFor="email">Email</label> <br/>
                        <input type="text" itemID="email" pattern="[^ @]*@[^ @]*"
                               placeholder='Enter your email'/><br/>

                        <label className='tag' htmlFor="number">Number</label> <br/>
                        <input type="text" itemID="number" placeholder='Enter your age'/><br/>
                        <div className='tag'>Which option best describes your current role?</div>
                        <select>
                            <option disabled selected>Select current role</option>
                            <option>Student</option>
                            <option>Full Time Job</option>
                            <option value="">Full Time Learner</option>
                            input
                            <option value="">Prefer not to say</option>
                            <option value="">Other</option>
                        </select>
                        <div className='tag' itemID="dropdown">Would you recommend freeCodeCamp to a friend?
                        </div>
                        <input type="radio" name='Definitely' checked/> Definitely <br/>
                        <input type="radio" name='Maybe'/> Maybe <br/>
                        <input type="radio" name='Not sure'> Not sure <br/><br/>

                            <div className='tag'>What would you like to see
                                improved? <span>(Check all that apply)</span>
                            </div>
                            <input type="checkbox" value=''/> Front-end Projects <br/>
                            <input type="checkbox" value='Back-end Projects'/> Back-end
                            Projects <br/>
                            <input type="checkbox" value='Data Visualization'/> Data
                            Visualization <br/>
                            <input type="checkbox"
                                   value='Challenges'/> Challenges <br/>
                            <input type="checkbox"
                                   value='Open Source Community'/> Open
                            Source Community <br/>
                            <input type="checkbox"
                                   value='Gitter help rooms'/> Gitter
                            help rooms <br/>
                            <input type="checkbox"
                                   value='VitemIDeos'/> VitemIDeos <br/>
                            <input type="checkbox"
                                   value='City Meetups'/> City
                            Meetups <br/>
                            <input
                                type="checkbox"
                                value='Wiki'/> Wiki <br/>
                            <input
                                type="checkbox"
                                value='Forum'/> Forum <br/>
                            <input
                                type="checkbox"
                                value='Additional Courses'/> Additional
                            Courses<br/>
                            <br/>

                            <div
                                className='tag'>Any
                                comments
                                or
                                suggestions?
                            </div>
                            <textarea
                                name="text"
                                itemID=""
                                cols="65"
                                rows="7"
                                placeholder='Enter your comment here'/>
                            <br/>
                            <input
                                type="submit"
                                itemID='submit'
                                value='Submit'/>
                    </form>
                </div>
            </div>


        </div>
)
}

export default Myform