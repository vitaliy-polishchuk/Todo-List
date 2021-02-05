import React from 'react'
import style from './info.module.css'

const Info = () => {
    return (
        <div className={style.info}>
            <div className={style.info_text}>
                A Simple Component
                React components implement a render() method that takes input data and returns what to display. This
                example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed
                by render() via this.props.

                JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code
                produced by the JSX compilation step.
            </div>
            <div className={style.info_picture}><img
                src="https://i.stack.imgur.com/Gsk9I.png"
                alt="ups"/></div>
            <div  className={style.another_info}>React Router v4 uses a declarative, component-based approach to routing.
                What that means is when you want to create a new route, you render a Route component.
                Route allows you to map URL paths to different React components.
                For example, say we wanted to render the Dashboard component whenever a user navigates to the /dashboard path.
                To do that, we’d render a Route that looks like this.

                 <p>&lt;Route path='/dashboard' component=&#123;Dashboard&#125; /&gt;</p>
                Now, what if we also wanted to pass the Dashboard component a prop?

                There are a few different ways to solve this problem but only one right way. The first idea you might have is to just pass it as a prop on Route.

               <p> &lt;Route
                path='/dashboard'
                component=&#123;Dashboard&#125;
                isAuthed=&#123;true&#125;
                /&gt;</p>
                Unfortunately, this won’t work. React Router won’t forward that prop onto the component. Instead, it will just ignore it.

                The next idea you might have, and a pattern I’ve seen a few places is to pass component an inline function that creates the React element.
                </div>
        </div>
    )
}

export default Info