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

const problemStudentSpeedConfig = {
    family: 2,
    friends: 4,
    normal_life: 8,
    profession: 20,
    carrier: 30
}

const talentedStudentSpeedConfig = {
    normal_life: 30,
    profession: 40,
    carrier: 55,
    top_peformance: 70
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
    });
    describe('for problem student with programming skills', () => {
        const studentConfig = problemStudentSpeedConfig;
        it('should could take a lot of weeks for family focus', () => {
            const weeks = getTimeForEducation('family', true,  studentConfig);
    
            expect(weeks).to.equal(400);
        });
        it('should could take less weeks for friends focus', () => {
            const weeks = getTimeForEducation('friends', true,  studentConfig);
    
            expect(weeks).to.equal(200);
        });
        it('should could take normal number of weeks for normal_life focus', () => {
            const weeks = getTimeForEducation('normal_life', true,  studentConfig);
    
            expect(weeks).to.equal(100);
        });
        it('should could take optimal number of weeks for profession focus', () => {
            const weeks = getTimeForEducation('profession', true,  studentConfig);
    
            expect(weeks).to.equal(40);
        });
        it('should could take a few weeks for carrier focus', () => {
            const weeks = getTimeForEducation('carrier', true,  studentConfig);
    
            expect(weeks).to.equal(27);
        });
    });
    describe('for talented student with programming skills', () => {
        const studentConfig = talentedStudentSpeedConfig;
        
        it('should could take normal number of weeks for normal_life focus', () => {
            const weeks = getTimeForEducation('normal_life', true,  studentConfig);
    
            expect(weeks).to.equal(27);
        });
        it('should could take optimal number of weeks for profession focus', () => {
            const weeks = getTimeForEducation('profession', true,  studentConfig);
    
            expect(weeks).to.equal(20);
        });
        it('should could take a few weeks for carrier focus', () => {
            const weeks = getTimeForEducation('carrier', true,  studentConfig);
    
            expect(weeks).to.equal(15);
        });
        it('should could take 14 weeks for top_peformance focus', () => {
            const weeks = getTimeForEducation('top_peformance', true,  studentConfig);
    
            expect(weeks).to.equal(12);
        });
    });
    describe('for general student without programming skills', () => {
        const studentConfig = defaultStudentSpeedConfig;
        it('should could take a lot of weeks for family focus', () => {
            const weeks = getTimeForEducation('family', false,  studentConfig);
    
            expect(weeks).to.equal(325);
        });
        it('should could take less weeks for friends focus', () => {
            const weeks = getTimeForEducation('friends', false,  studentConfig);
    
            expect(weeks).to.equal(130);
        });
        it('should could take normal number of weeks for normal_life focus', () => {
            const weeks = getTimeForEducation('normal_life', false,  studentConfig);
    
            expect(weeks).to.equal(65);
        });
        it('should could take optimal number of weeks for profession focus', () => {
            const weeks = getTimeForEducation('profession', false,  studentConfig);
    
            expect(weeks).to.equal(44);
        });
        it('should could take a few weeks for carrier focus', () => {
            const weeks = getTimeForEducation('carrier', false,  studentConfig);
    
            expect(weeks).to.equal(33);
        });
    });
    describe('for problem student without programming skills', () => {
        const studentConfig = problemStudentSpeedConfig;
        it('should could take a lot of weeks for family focus', () => {
            const weeks = getTimeForEducation('family', false,  studentConfig);
    
            expect(weeks).to.equal(650);
        });
        it('should could take less weeks for friends focus', () => {
            const weeks = getTimeForEducation('friends', false,  studentConfig);
    
            expect(weeks).to.equal(325);
        });
        it('should could take normal number of weeks for normal_life focus', () => {
            const weeks = getTimeForEducation('normal_life', false,  studentConfig);
    
            expect(weeks).to.equal(163);
        });
        it('should could take optimal number of weeks for profession focus', () => {
            const weeks = getTimeForEducation('profession', false,  studentConfig);
    
            expect(weeks).to.equal(65);
        });
        it('should could take a few weeks for carrier focus', () => {
            const weeks = getTimeForEducation('carrier', false,  studentConfig);
    
            expect(weeks).to.equal(44);
        });
    });
});