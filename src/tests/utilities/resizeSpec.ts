import resizeImage from '../../utilities/resize'
describe('2 - Image resize function', () => {
    it('should not throw ', () => {
        expect(function () {
            resizeImage('test', 200, 200)
        }).not.toThrowError()
    })
})
