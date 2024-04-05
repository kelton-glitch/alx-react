import { getFullYear, getFooterCopy, getLastestNotification } from "./utils";

describe("Get full year", function () {
    it("should return the current year", function () {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
})

describe("Get footer copy", function () {
    const trueMessage = 'Holberton School';
    const falseMessage = 'Holberton School main dashboard';

    it("should return 'Holberton School' when true is passed", function () {
        const currentMessage = getFooterCopy(true);
        expect(currentMessage).toBe(trueMessage);
    });
    it("should return 'Holberton School main dashboard' when false is passed", function () {
        const currentMessage = getFooterCopy(false);
        expect(currentMessage).toBe(falseMessage);
    });
})

describe("Get latest notifocation", function(){
    it("should return '<strong>Urgent requirement</strong> - complete by EOD'", function(){
        const message = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(message).toBe(getLastestNotification());
    });
})
