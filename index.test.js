var { expect } = require('chai')

const getTimeForEducation = require('./src/index')

const defaultStudentSpeedConfig = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
}


describe('js-edu', () => {
    describe('for general student with programming skills', () => {
        it('should could take 200 weeks for family focus', () => {
            const weeks = getTimeForEducation('family', true,  defaultStudentSpeedConfig);
    
            expect(weeks).to.equal(200);
        });
        it('should could take 80 weeks for friends focus', () => {
            const weeks = getTimeForEducation('friends', true,  defaultStudentSpeedConfig);
    
            expect(weeks).to.equal(80);
        });
        it('should could take 40 weeks for normal_life focus', () => {
            const weeks = getTimeForEducation('normal_life', true,  defaultStudentSpeedConfig);
    
            expect(weeks).to.equal(40);
        });
        it('should could take 27 weeks for profession focus', () => {
            const weeks = getTimeForEducation('profession', true,  defaultStudentSpeedConfig);
    
            expect(weeks).to.equal(27);
        });
        it('should could take 20 weeks for carrier focus', () => {
            const weeks = getTimeForEducation('carrier', true,  defaultStudentSpeedConfig);
    
            expect(weeks).to.equal(20);
        });
        it('should could take 14 weeks for top_peformance focus', () => {
            const weeks = getTimeForEducation('top_peformance', true,  defaultStudentSpeedConfig);
    
            expect(weeks).to.equal(14);
        });
    })
});