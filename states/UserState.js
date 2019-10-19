import ProgressEnums from '../enums/progressEnums';

global.stage = [''];

advanceToApplication = function() {
    global.stage[0] = new ProgressEnums().application;
};

advanceToTraining = function() {
    global.stage[0] = new ProgressEnums().training;
};

advanceToInterview = function() {
    global.stage[0] = new ProgressEnums().interview;
};

advanceToFinal = function() {
    global.stage[0] = new ProgressEnums().final;
};

advanceToFinal = function() {
    global.stage[0] = new ProgressEnums().final;
};

getStage = function() {
    return global.stage[0];
}

const exports = {
    advanceToApplication,
    advanceToTraining,
    advanceToInterview,
    advanceToFinal,
    getStage
}

module.exports = exports;