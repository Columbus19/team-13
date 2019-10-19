import ProgressEnums from '../enums/progressEnums';

global.userState = {};
global.userState.stage = null;

global.userState.advanceToNextStage = function() {
    var progressEnums = new ProgressEnums();

    if(global.userState.stage == null){
        global.userState.stage = progressEnums.application;
    } else if(global.userState.stage == progressEnums.application){
        global.userState.stage = progressEnums.training;
    } else if(global.userState.stage == progressEnums.training){
        global.userState.stage = progressEnums.interview;
    } else if(global.userState.stage == progressEnums.interview){
        global.userState.stage = progressEnums.final;
    }
};