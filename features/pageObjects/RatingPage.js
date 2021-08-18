import {Selector, t} from 'testcafe'

var comments= require('random-words')


class RatingPage{

    constructor(){
        this.makeTile = Selector('.img-fluid center-block').nth(0)
        this.containerTable = Selector('.container')
        this.fordwardBtn = Selector('.btn').withText("»")
        this.messageSucess= Selector('main p').withText('Thank you for your vote!');
        this.comments_post="Esteban's comment "+comments({exactly:10, wordsPerString:2, join:" "})
    }
    async voteByModel(model){
    
        await t
        .click(Selector('main a').withText(model))
        .typeText(Selector('#comment'),this.comments_post )
        .click(Selector('.btn-success'))
    }
    async checkCommentPosted(comment){
    
        await t
        .click(Selector('main td').withText(comment))
    }

    async checkVoteIncrease(){
        await t
        .click(Selector('.main strong'))
    }

}

export default new RatingPage();