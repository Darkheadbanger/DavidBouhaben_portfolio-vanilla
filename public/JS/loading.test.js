const rewire = require("rewire")
const loading = rewire("./loading")
const updateProgress = loading.__get__("updateProgress")
// @ponicode
describe("updateProgress", () => {
    test("0", () => {
        let result = updateProgress()
        expect(result).toMatchSnapshot()
    })
})
