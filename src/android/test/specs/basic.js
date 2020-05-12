
describe('Lune app', () => {
  it('should have the right title', () => {
    $('~email').setValue('user@example.com');
    $('~password').setValue('string');
    $('~btnLogin').click();

    browser.pause(2500);
  });
})