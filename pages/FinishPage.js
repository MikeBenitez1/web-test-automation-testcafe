import {Selector, t} from 'testcafe'

// Class with Finish Page elements and common methods

class FinishPage {
    constructor(){
        this.finishMessage = Selector('h2.complete-header').withExactText('THANK YOU FOR YOUR ORDER')
    }

    async validateFinishPage(){
        await t
        .expect(this.finishMessage.exists).ok()
    }

}

export default new FinishPage

