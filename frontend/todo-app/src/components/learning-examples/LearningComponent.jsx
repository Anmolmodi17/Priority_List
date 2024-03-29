import FirstComponent from './First-Component'
import ThirdComponent from './Third-Component'
import FourthComponent from './Fourth-Component'
import {FifthComponent} from './First-Component'
import LearningJavaScript from './LearningJavaScript'

export default function LearningComponent() {
    return (
        <div className="App">
        <FirstComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <LearningJavaScript />
        </div>
    )
}