import ProgressEnums from '../enums/progressEnums';

global.userState = {};
global.userState.stage = null;

global.userState.advanceToApplication = function() {
    global.userState.stage = new ProgressEnums().application;
};

global.userState.advanceToTraining = function() {
    global.userState.stage = new ProgressEnums().training;
};

global.userState.advanceToInterview = function() {
    global.userState.stage = new ProgressEnums().interview;
};

global.userState.advanceToFinal = function() {
    global.userState.stage = new ProgressEnums().final;
};