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
    describe('for general student', () => {
        it('should could take 200 weeks for family focus', () => {
            const days = getTimeForEducation('family', true,  defaultStudentSpeedConfig);
    
            expect(days).toBe(200);
        });
        it('should could take 14 weeks for top_peformance focus', () => {
            const days = getTimeForEducation('top_peformance', true,  defaultStudentSpeedConfig);
    
            expect(days).toBe(14);
        });
    })
});